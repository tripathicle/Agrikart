# 🌱 AgriKart — Project Setup & Run Guide

AgriKart is an agriculture-focused web application that connects the frontend, backend, and MySQL database to provide an agricultural marketplace and related services.

This guide explains how to install, configure, run, test, and troubleshoot the AgriKart project locally.

---

## 📌 Project Overview

AgriKart consists of three main components:

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
      │ Port: 5173     │               │ Port: 5000      │
      └────────────────┘               └────────┬────────┘
                                                │
                                                │ MySQL
                                                ▼
                                      ┌──────────────────┐
                                      │      MySQL       │
                                      │     agricart     │
                                      └──────────────────┘

Main Technologies
React

TypeScript

Vite

React Router

Tailwind CSS

Node.js

Express.js

MySQL

mysql2

Git / GitHub

📁 Project Structure
The repository is organized approximately as follows:

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
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── index.html
│
└── README.md

🛠️ Prerequisites
Before running AgriKart, make sure the following software is installed.

Node.js
Check the installed version:

node --version

Also check npm:

npm --version

Git
Check Git:

git --version

MySQL
Install and run MySQL Server.

MySQL Workbench can be used to manage the database and execute SQL queries.

📥 1. Clone the Repository
Open Git Bash or a terminal.

Navigate to your development directory:

cd ~/Desktop/Devops

Clone the repository:

git clone https://github.com/tripathicle/Agrikart.git

Enter the project:

cd Agrikart

🗄️ 2. Configure MySQL
Open MySQL Workbench and connect to your local MySQL server.

Check available databases:

SHOW DATABASES;

If the agricart database already exists:

USE agricart;

If it does not exist, create it:

CREATE DATABASE agricart;
USE agricart;

📦 3. Configure the Products Table
Check the available tables:

SHOW TABLES;

If the products table already exists, you can keep using it.

Otherwise, create it:

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    quantity INT DEFAULT 0,
    image_url VARCHAR(500)
);

Verify the table:

DESCRIBE products;

Check the existing products:

SELECT * FROM products;

⚙️ 4. Backend Setup
Open a new terminal.

Navigate to the backend:

cd ~/Desktop/Devops/Agrikart/backend

Install dependencies:

npm install

🔐 5. Backend Environment Configuration
Create a .env file inside the backend directory:

backend/
├── .env
├── index.js
└── package.json

The .env file should contain:

DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_MYSQL_PASSWORD
DB_NAME=agricart

Replace:

YOUR_MYSQL_PASSWORD

with the password of your local MySQL root user.

Example
DB_HOST=localhost
DB_USER=root
DB_PASS=mypassword
DB_NAME=agricart

If your MySQL root account does not have a password:

DB_PASS=

Important: Never commit the .env file to GitHub.

Make sure .gitignore contains:

.env

🚀 6. Start the Backend
From the backend directory:

node index.js

A successful connection should display something similar to:

Backend running at http://localhost:5000
✅ MySQL Connected

Keep this terminal running.

🔍 7. Test the Backend API
Open a browser and visit:

http://localhost:5000/api/products

If the backend and database are working correctly, the API should return product data in JSON format.

Example:

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

This confirms:

Express → MySQL → Products API

is working correctly.

💻 8. Frontend Setup
Open a second terminal.

Navigate to the frontend:

cd ~/Desktop/Devops/Agrikart/project

Install dependencies:

npm install

▶️ 9. Start the Frontend
Run:

npm run dev

Vite will display a local URL.

Normally:

http://localhost:5173/

If port 5173 is already being used, Vite automatically selects another port, for example:

http://localhost:5174/

Always use the URL displayed by Vite.

🌐 10. Application Routes
The current application contains the following routes.

Home
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

If Vite uses port 5174, replace 5173 with 5174.

📝 11. Registration Page
The registration page is located at:

project/src/pages/Register.tsx

The route is configured in:

project/src/App.tsx

The route should look like:

<Route path="/register" element={<Register />} />

And the import should be:

import Register from './pages/Register';

The current registration form contains:

Full Name

Email

Password

Register button

Link to Login

Current Status
The current Register page is a frontend form.

The registration data is not yet persisted to MySQL unless a backend registration API is implemented.

🔑 12. Login
The existing login page is:

project/src/pages/Login.tsx

Open:

http://localhost:5173/login

The login page should load through the React Router configuration.

🧪 13. Verify the Complete Application
After starting both servers:

Terminal 1 — Backend
cd ~/Desktop/Devops/Agrikart/backend
node index.js

Expected:

Backend running at http://localhost:5000
✅ MySQL Connected

Terminal 2 — Frontend
cd ~/Desktop/Devops/Agrikart/project
npm run dev

Expected:

VITE ready

Local: http://localhost:5173/

or another available port.

🔄 Complete Request Flow
For product data, the application works approximately like this:

User opens Marketplace
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
        │ Product Data
        ▼
Express API
        │
        │ JSON Response
        ▼
React Frontend
        │
        ▼
Products displayed

🛑 14. Stop the Application
To stop either development server, press:

Ctrl + C

Do this separately in the frontend and backend terminals.

🔁 15. Running the Project Again
Once the project is completely configured, you only need two terminals.

Terminal 1
cd ~/Desktop/Devops/Agrikart/backend
node index.js

Terminal 2
cd ~/Desktop/Devops/Agrikart/project
npm run dev

Then open the frontend URL shown by Vite.

🐛 16. Common Errors & Solutions
Error: Missing script: "start"
If you run:

npm start

and receive:

Missing script: "start"

use:

node index.js

from the backend directory.

Error: MySQL Access Denied
Example:

Access denied for user 'root'@'localhost'

Check the .env file:

DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_MYSQL_PASSWORD
DB_NAME=agricart

Make sure the password matches the MySQL account.

Error: Unknown Database
Example:

Unknown database 'agricart'

Check databases:

SHOW DATABASES;

If necessary:

CREATE DATABASE agricart;

Then make sure .env contains:

DB_NAME=agricart

Error: Port 5173 Already in Use
Example:

Port 5173 is in use, trying another one...

This is normally not a problem.

Vite will automatically use another available port:

Local: http://localhost:5174/

Open the URL shown by Vite.

Register Page Is Blank
Check that this file exists:

src/pages/Register.tsx

Check that App.tsx contains:

import Register from './pages/Register';

and:

<Route path="/register" element={<Register />} />

🔐 17. Security Notes
Never commit sensitive credentials.

Do not upload:

.env

to GitHub.

The .gitignore file should contain:

.env
node_modules
dist

Before pushing code, always check:

git status

Make sure your .env file is not included in the files being committed.

📤 18. Push Changes to GitHub
From the project root:

cd ~/Desktop/Devops/Agrikart

Check changes:

git status

Stage files:

git add .

Check again:

git status

Commit:

git commit -m "Update AgriKart application"

Push:

git push origin main

🗃️ 19. Optional Users Table
For future database-backed registration, create a users table:

USE agricart;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Verify:

DESCRIBE users;

Security Requirement
Passwords should not be stored as plain text in a production application.

A password hashing mechanism such as bcrypt should be used before storing passwords.

🚧 20. Future Improvements
The following features can be implemented next:

Authentication
User registration API

Secure password hashing

Login API

Session/JWT authentication

Logout

Protected routes

Database
Users table

Orders table

Cart table

Product management

Farmer profiles

Transaction records

Backend
REST API improvements

Input validation

Error handling

Authentication middleware

Database connection pooling

Environment-based configuration

Frontend
Form validation

Authentication state

Protected pages

User dashboard

Shopping cart

Order management

Better loading/error states

DevOps
Docker

Docker Compose

CI/CD pipeline

Environment-specific configuration

Production deployment

Automated testing

✅ Quick Health Check
Before considering the local setup complete, verify:

Component	Check	Expected
Node.js	node --version	Version displayed
npm	npm --version	Version displayed
MySQL	MySQL Workbench	Connected
Database	SHOW DATABASES;	agricart exists
Products	SELECT * FROM products;	Product records
Backend	node index.js	MySQL Connected
API	/api/products	JSON response
Frontend	npm run dev	Vite running
Login	/login	Login page
Register	/register	Register page

⚡ Quick Start
If everything has already been configured, use only these commands.

Backend
cd ~/Desktop/Devops/Agrikart/backend
node index.js

Frontend
Open a second terminal:

cd ~/Desktop/Devops/Agrikart/project
npm run dev

Then open the Local URL displayed by Vite.

📌 Important Ports
Service	Port
Frontend (Vite)	5173
Alternative Vite Port	5174
Backend (Express)	5000
MySQL	3306

🎯 Final Checklist
Before running AgriKart:

 Node.js installed

 npm installed

 MySQL Server running

 agricart database exists

 products table exists

 backend/.env configured

 Backend dependencies installed

 Frontend dependencies installed

Start:

# Terminal 1
cd backend
node index.js

# Terminal 2
cd project
npm run dev

Then open the Vite URL in your browser.

🎉 AgriKart is Ready!
Once the backend shows:

✅ MySQL Connected

and Vite shows:

VITE ready
Local: http://localhost:5173/

the local AgriKart development environment is running.


**File name:** `AGRIKART_SETUP.md`

Isko repository ke root mein rakho:

```text
Agrikart/
├── AGRIKART_SETUP.md   ← this file
├── backend/
└── project/