import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { User, CartItem, Product, Notification } from '../types';

interface AppState {
  user: User | null;
  cart: CartItem[];
  selectedLanguage: string;
  notifications: Notification[]; // NEW
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LANGUAGE'; payload: string }
  // NEW NOTIFICATION ACTIONS:
  | { type: 'ADD_NOTIFICATION'; payload: { message: string; type?: Notification['type'] } }
  | { type: 'MARK_NOTIFICATION_AS_READ'; payload: string }
  | { type: 'MARK_ALL_NOTIFICATIONS_AS_READ' }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };

const initialState: AppState = {
  user: null,
  cart: [],
  selectedLanguage: 'en',
  notifications: [], // NEW
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // NEW NOTIFICATION METHODS:
  addNotification: (message: string, type?: Notification['type']) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  removeNotification: (id: string) => void;
  unreadNotificationsCount: number;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    // ... keep your existing cases ...
    
    // ADD THESE NEW CASES:
    case 'ADD_NOTIFICATION':
      const newNotification: Notification = {
        id: Date.now().toString(),
        message: action.payload.message,
        type: action.payload.type || 'info',
        read: false,
        timestamp: new Date(),
      };
      return { ...state, notifications: [newNotification, ...state.notifications] };
      
    case 'MARK_NOTIFICATION_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(n => 
          n.id === action.payload ? { ...n, read: true } : n
        )
      };
      
    case 'MARK_ALL_NOTIFICATIONS_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(n => ({ ...n, read: true }))
      };
      
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
      
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // NEW NOTIFICATION HELPERS:
  const unreadNotificationsCount = state.notifications.filter(n => !n.read).length;

  const addNotification = (message: string, type: Notification['type'] = 'info') => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: { message, type } });
  };

  const markNotificationAsRead = (id: string) => {
    dispatch({ type: 'MARK_NOTIFICATION_AS_READ', payload: id });
  };

  const markAllNotificationsAsRead = () => {
    dispatch({ type: 'MARK_ALL_NOTIFICATIONS_AS_READ' });
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        // Expose notification methods:
        addNotification,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        removeNotification,
        unreadNotificationsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}