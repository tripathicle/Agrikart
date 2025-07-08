# 🌾 AgriKart

✅ AgriKart — Microservices-Based Agriculture Platform
AgriKart is an agriculture-focused e-commerce and service platform built using a modern, scalable technology stack. It connects farmers, traders, and service providers by enabling product trading, weather updates, tractor rentals, and milk delivery requests — all through a unified web platform..

### 🛠️ How the Application Was Developed
#### 🔹 Frontend:
Developed using React.js with TypeScript for building a clean, component-driven UI with strict type safety.

Implemented responsive designs for mobile and desktop using Tailwind CSS.

Used Redux Toolkit for managing application state (user roles, service bookings, product cart).

Integrated Axios for calling backend APIs securely and efficiently.

#### 🔹 Backend:
Built using Node.js with Express.js, following a microservices architecture.

Each service (e.g., product catalog, tractor rentals, milk requests, weather module) is modularized for scalability and independent deployment.

Applied RESTful principles to design clean, reusable APIs.

Implemented JWT-based authentication for secure login and role-based access (farmer, trader, admin).

#### 🔹 Database:
Used MySQL as the primary relational database to store structured data like:

User profiles and roles (Farmer, Trader, Admin)

Product listings and order history

Rental and milk service requests

Payment and transaction records

Designed normalized schema with foreign key relationships to ensure data consistency.

#### 🔹 Additional Integrations & Future Enhancements:
Integrated OpenWeatherMap API for real-time weather updates based on the user’s location.

Started configuring GitHub Actions for CI/CD (automated deployment and testing pipelines).

Planned Docker containerization for deploying microservices independently.



---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/tripathicle/agrikart.git
cd agrikart/project

Install Dependencies
npm install
Your app will be up at: http://localhost:5173 
```

### 2. 🛠️ Technologies Used

Frontend: React + TypeScript + Vite

Backend: Node.js (planned - backend folder exists)

Routing: React Router

State Management: React Context API

Version Control: Git & GitHub

Branching Strategy: Feature branches (e.g., feature/login)

### 3. 🧪 Features Implemented
🌐 Marketplace for products and services

🧀 Milk request card and trading flow

🚜 Tractor service booking

☁️ Weather info display

🔐 Login page (under development)

### 4. 🧾 Git Workflow Example

```bash
# Create a feature branch
git checkout -b feature/login

# Add your changes
git add src/pages/Login.tsx
git commit -m "Login-page added"

# Push to remote
git push origin feature/login

# Open a Pull Request on GitHub
```
### 5. 🤝 Contribution
Have ideas or want to contribute? Open an issue or submit a pull request 🚀



👤 Author
Shubham Tripathi
