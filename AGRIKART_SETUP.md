# 🌱 AgriKart — Setup & Run Guide

AgriKart is an agriculture-focused web application built with a React/Vite frontend, Node.js/Express backend, and MySQL database.

This document explains how to install, configure, run, test, troubleshoot, and stop the complete AgriKart application locally.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Clone the Repository](#1-clone-the-repository)
- [Database Setup](#2-database-setup)
- [Backend Setup](#3-backend-setup)
- [Environment Configuration](#4-environment-configuration)
- [Run the Backend](#5-run-the-backend)
- [Test the Backend API](#6-test-the-backend-api)
- [Frontend Setup](#7-frontend-setup)
- [Run the Frontend](#8-run-the-frontend)
- [Application Routes](#9-application-routes)
- [Frontend-Backend Architecture](#-frontendbackend-architecture)
- [Registration](#-registration)
- [Git and GitHub](#-git-and-github)
- [Troubleshooting](#-troubleshooting)
- [Daily Startup](#-daily-startup)
- [Stopping the Application](#-stopping-the-application)
- [Future Improvements](#-future-improvements)
- [Final Checklist](#-final-checklist)

---

#  Project Overview

AgriKart connects farmers, agricultural products, services, and users through a web-based platform.

The application currently contains features such as:

- Agricultural marketplace
- Product listing
- Tractor services
- Milk trading
- Community section
- Login page
- Registration page
- MySQL-backed product data

## The application consists of three major layers:

```text
                    ┌─────────────────────┐
                    │      AgriKart       │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
      ┌───────▼────────┐               ┌────────▼────────┐
      │    Frontend    │               │     Backend     │
      │ React + Vite   │◄──── API ────►│ Node + Express  │
      │ Port 5173/5174 │               │ Port 5000       │
      └────────────────┘               └────────┬────────┘
                                                │
                                                │ MySQL
                                                ▼
                                      ┌──────────────────┐
                                      │      MySQL       │
                                      │     agricart     │
                                      └──────────────────┘
```
--- 

#  Technology Stack
Frontend
React

TypeScript

Vite

React Router

Tailwind CSS

Backend
Node.js

Express.js

CORS

dotenv

mysql2

Database
MySQL

MySQL Workbench

Version Control
Git

GitHub

---

# 📁 Project Structure

The project is organized into two main applications:
```

Agrikart/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── .gitignore
│   └── node_modules/
│
├── project/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Marketplace.tsx
│   │   │   ├── TractorServices.tsx
│   │   │   ├── MilkTrading.tsx
│   │   │   └── Community.tsx
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── index.html
│
├── AGRIKART_SETUP.md
└── README.md
```
---


# 🛠️ Prerequisites
Make sure the following software is installed before running the project.
```
Node.js
Check the installed Node.js version:
node --version
Check npm:
npm --version
Git
Check Git:
git --version
MySQL
Install MySQL Server and MySQL Workbench.
```
---

## Make sure the MySQL server is running before starting the backend.

```
1. Clone the Repository
Open Git Bash or a terminal.
Navigate to your development directory:
cd ~/Desktop/Devops
Clone the repository:
git clone https://github.com/tripathicle/Agrikart.git
Enter the project directory:
cd Agrikart
2. Database Setup
Open MySQL Workbench and connect to your local MySQL server.
Check Existing Databases
Run:
SHOW DATABASES;
If the agricart database already exists:
USE agricart;
If it does not exist, create it:
CREATE DATABASE agricart;
USE agricart;
Check Existing Tables
Run:
SHOW TABLES;
You should have a products table.
If it does not exist, create it:
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    quantity INT DEFAULT 0,
    image_url VARCHAR(500)
);
```
---

```
Check the table structure:
DESCRIBE products;
Check the products:
SELECT * FROM products;
3. Backend Setup
Open a new terminal.
Navigate to the backend:
cd ~/Desktop/Devops/Agrikart/backend
Install backend dependencies:
npm install
This installs the dependencies listed in backend/package.json.
4. Environment Configuration
The backend requires a .env file.
```
----

The file must be located directly inside the backend folder:
```

Agrikart/
└── backend/
    ├── .env
    ├── index.js
    └── package.json
.env Configuration
Create:

backend/.env

Add:
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_MYSQL_PASSWORD
DB_NAME=agricart

Replace:
YOUR_MYSQL_PASSWORD
with your local MySQL root password.

Example
DB_HOST=localhost
DB_USER=root
DB_PASS=mypassword
DB_NAME=agricart

If your MySQL root user has no password:

DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=agricart

🔐 Important Security Rule
Never upload .env to GitHub.

The .gitignore file should contain:

.env

You can verify it with:

cat .gitignore
If .env is already present, no additional entry is required.
5. Run the Backend
From the backend directory:
node index.js
A successful startup should look similar to:

Backend running at http://localhost:5000
✅ MySQL Connected

```
---

```

The backend is now available at:
http://localhost:5000
Keep this terminal running.
6. Test the Backend API
Open your browser and visit:
http://localhost:5000/api/products
```
---

### If everything is working correctly, the API will return product data in JSON format.

Example:
```
[
  {
    "id": 1,
    "name": "Wheat",
    "description": "Organic wheat grains",
    "price": "25.00",
    "category": "crops",
    "quantity": 100,
    "image_url": "..."
  }
]

```
---


### This confirms that:

```
Express Backend
       ↓
MySQL Database
       ↓
Products API

is working correctly.
```
---

## 7. Frontend Setup
Open a second terminal.

Navigate to the frontend:

```
cd ~/Desktop/Devops/Agrikart/project
Install dependencies:
npm install
```
---

## 8. Run the Frontend


Start the Vite development server:
npm run dev
Vite normally starts at:
http://localhost:5173/
However, if port 5173 is already being used, Vite will automatically select another available port.
For example:
Local: http://localhost:5174/
Always use the URL shown in the terminal.
9. Application Routes
The current application includes the following routes.

## Home
http://localhost:5173/
Marketplace
http://localhost:5173/marketplace
Tractor Services
http://localhost:5173/tractors
Milk Trading
http://localhost:5173/milk
Community
http://localhost:5173/community
Login
http://localhost:5173/login
Register
http://localhost:5173/register
If Vite is running on port 5174, replace 5173 with 5174.
For example:
http://localhost:5174/register
🧭 React Routing
Routes are configured in:
project/src/App.tsx
The Register page should be imported:
import Register from './pages/Register';
The Register route should be:
<Route path="/register" element={<Register />} />
The Login route is:
<Route path="/login" element={<Login />} />

# 📝 Registration
The registration page is located at:
project/src/pages/Register.tsx
The current registration form contains:
Full Name
Email
Password
Register button
Login link
Current Status
The current Register page is a frontend form.

---
## At the current stage, submitting the form does not automatically create a user in MySQL unless the backend registration API has been implemented.

## 🗃️ Users Table
For database-backed registration, a users table can be created.
Run in MySQL Workbench:
```
USE agricart;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Verify:
DESCRIBE users;
Check registered users:
SELECT id, name, email, created_at FROM users;
Passwords should never be stored as plain text in a production application. Password hashing should be implemented in the backend.
```

---
## 🔐 Login

The Login page is located at:
project/src/pages/Login.tsx
Open it using:
http://localhost:5173/login
The login page currently exists as part of the frontend routing.
A complete authentication system should connect the login form to a backend authentication API.

## 🔄 Frontend/Backend Architecture

#### The application follows this general flow:

---
```

User
 │
 ▼
React Frontend
 │
 │ HTTP Request
 ▼
Express Backend
 │
 │ SQL Query
 ▼
MySQL Database
 │
 │ Query Result
 ▼
Express Backend
 │
 │ JSON Response
 ▼
React Frontend
 │
 ▼
User Interface
```


# 🛒 Product API Flow

## For example, when the Marketplace needs products:

```

Marketplace Page
       │
       ▼
GET /api/products
       │
       ▼
Express Backend
       │
       ▼
SELECT * FROM products
       │
       ▼
MySQL
       │
       ▼
JSON Response
       │
       ▼
Marketplace

```
---


# 🧪 Complete Local Testing
## After starting both frontend and backend, verify the following.
---


# Backend

Open:
http://localhost:5000/api/products
Expected:
JSON product data
Frontend
Open:
http://localhost:5173/
Expected:

---

AgriKart Home Page

Marketplace
Open:

http://localhost:5173/marketplace

Expected:

Marketplace products

Login
Open:

http://localhost:5173/login

Expected:

Login page

Register
Open:

http://localhost:5173/register

Expected:

Registration page

🐛 Troubleshooting
1. npm start Shows Missing Script
If you run:

npm start

and see:

Missing script: "start"

Use:

node index.js

from the backend directory.

2. MySQL Access Denied
Example:

Access denied for user 'root'@'localhost'

Check your backend .env:

DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_MYSQL_PASSWORD
DB_NAME=agricart

Make sure the password matches your MySQL account.

3. Unknown Database
Example:

Unknown database 'agricart'

Check databases:

SHOW DATABASES;

Create the database if required:

CREATE DATABASE agricart;

Then verify .env:

DB_NAME=agricart

4. Port 5173 Already in Use
You may see:

Port 5173 is in use, trying another one...

This is normally not an error.

Vite will automatically select another port:

Local: http://localhost:5174/

Use the URL displayed by Vite.

5. Register Page Is Blank
Check that:

project/src/pages/Register.tsx

exists.

Check the import in App.tsx:

import Register from './pages/Register';

Check the route:

<Route path="/register" element={<Register />} />

6. Products Are Not Loading
First test the API directly:

http://localhost:5000/api/products

If JSON data is returned, the backend and database are working.

Then check the browser developer console:

F12 → Console

Also check:

F12 → Network

Look for:

/api/products

7. Images Are Not Loading
Some database records may contain webpage URLs instead of direct image URLs.

For example, this type of URL:

https://unsplash.com/photos/...

is a webpage URL, not necessarily a direct image file.

A direct image URL usually points to an actual image resource such as:

.jpg
.png
.webp

Check the database:

SELECT id, name, image_url
FROM products;

Replace invalid image URLs with valid direct image URLs when necessary.

🔒 Security Notes
Never commit credentials to GitHub.

Do not commit:

.env

Do not put:

MySQL passwords

API keys

JWT secrets

Private credentials

directly into source code.

Use environment variables instead.

📤 Git and GitHub
Before pushing changes, navigate to the repository root:

cd ~/Desktop/Devops/Agrikart

Check the current Git status:

git status

Make sure .env is not listed as a file to commit.

Stage changes:

git add .

Check again:

git status

Create a commit:

git commit -m "Update AgriKart application"

Push to GitHub:

git push origin main

⚠️ Before Every Git Push
Always check:

git status

Make sure this is NOT being committed:

backend/.env

Your .gitignore should include:

.env
node_modules
dist

📅 Daily Startup
Once the project has been configured, you normally need two terminals.

Terminal 1 — Backend
cd ~/Desktop/Devops/Agrikart/backend
node index.js

Expected:

Backend running at http://localhost:5000
✅ MySQL Connected

Keep this terminal running.

Terminal 2 — Frontend
cd ~/Desktop/Devops/Agrikart/project
npm run dev

Vite will display the frontend URL.

Example:

Local: http://localhost:5173/

or:

Local: http://localhost:5174/

Open that URL in your browser.

🛑 Stopping the Application
To stop the backend:

Ctrl + C

To stop the frontend:

Ctrl + C

Stop each process in its respective terminal.

⚡ Quick Start
If everything is already installed and configured:

Terminal 1
cd ~/Desktop/Devops/Agrikart/backend
node index.js

Terminal 2
cd ~/Desktop/Devops/Agrikart/project
npm run dev

Then open the frontend URL shown by Vite.

🔌 Default Ports
Service	Port
Frontend / Vite	5173
Alternative Vite Port	5174
Backend / Express	5000
MySQL	3306

🧱 Recommended Future Improvements
The following improvements can be implemented as the project evolves.

Authentication
Connect Register form to backend

Add registration API

Hash passwords using bcrypt

Add login API

Add JWT/session authentication

Add logout functionality

Protect authenticated routes

Database
Users table

Orders table

Cart table

Farmer profiles

Product management

Order history

Transaction records

Backend
Input validation

Better error handling

Authentication middleware

Database connection pooling

REST API structure

Environment-based configuration

Request logging

Frontend
Form validation

Authentication state

Protected routes

User dashboard

Shopping cart

Order management

Loading states

Error states

Better image handling

DevOps
Docker

Docker Compose

CI/CD pipeline

Automated testing

Production environment configuration

Cloud deployment

Health-check endpoints

Monitoring and logging

🩺 Health Check
Before considering the local setup successful, verify:

Component	Test	Expected Result
Node.js	node --version	Version displayed
npm	npm --version	Version displayed
Git	git --version	Version displayed
MySQL	MySQL Workbench	Connected
Database	SHOW DATABASES;	agricart exists
Products	SELECT * FROM products;	Product records
Backend	node index.js	MySQL Connected
API	/api/products	JSON response
Frontend	npm run dev	Vite running
Login	/login	Login page
Register	/register	Register page
Marketplace	/marketplace	Products displayed

🎯 Complete Startup Checklist
Before starting AgriKart:

 Node.js installed

 npm installed

 Git installed

 MySQL Server running

 MySQL Workbench connected

 agricart database exists

 products table exists

 backend/.env exists

 MySQL credentials are correct

 Backend dependencies installed

 Frontend dependencies installed

Start the backend:

cd backend
node index.js

Start the frontend in another terminal:

cd project
npm run dev

Open the frontend URL shown by Vite.

✅ Current Working Setup
At the current development stage, the following components are configured:

React/Vite frontend

Express backend

MySQL database

Product API

Marketplace

Login page

Register page

React Router

Environment-based MySQL configuration

Git/GitHub workflow

🌱 AgriKart Development Flow
                    AgriKart
                       │
                       ▼
              ┌─────────────────┐
              │ React Frontend  │
              │    Vite         │
              └────────┬────────┘
                       │
                       │ HTTP / REST API
                       ▼
              ┌─────────────────┐
              │ Express Backend │
              │    Node.js      │
              └────────┬────────┘
                       │
                       │ SQL
                       ▼
              ┌─────────────────┐
              │      MySQL      │
              │    agricart     │
              └─────────────────┘

🎉 AgriKart is Ready for Local Development
Once the backend displays:

✅ MySQL Connected

and Vite displays:

Local: http://localhost:5173/

or another available local port, the AgriKart development environment is ready.

Happy coding! 🌱🚀



