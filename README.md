# E-Clinic Lesotho

A web-based platform for managing e-clinic services in Lesotho. This guide will help you set up the project on your local machine.

## 📌 Prerequisites

Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [npm](https://www.npmjs.com/) (comes with Node.js)  
- [PostgreSQL](https://www.postgresql.org/) (for database setup)  
- [Git](https://git-scm.com/) (for cloning the repository)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/E-Clinic-Lesotho.git
cd E-Clinic-Lesotho
```

### 2️⃣ Install Backend Dependencies  
```sh
cd backend
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file inside the `backend` folder and configure the following:  
```env
PORT=5000
DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/your_db_name
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run Database Migrations  
```sh
npx prisma migrate dev
```
(If using Sequelize, replace with `npx sequelize-cli db:migrate`)

### 5️⃣ Start the Backend Server  
```sh
npm start
```
or  
```sh
npx nodemon server.js
```

---

## 💻 Frontend Setup

### 6️⃣ Install Frontend Dependencies  
```sh
cd ../frontend
npm install
```

### 7️⃣ Start the React App  
```sh
npm start
```

The application should now be running on **http://localhost:3000** 🚀  

---

## 🛠 Troubleshooting  

- If `react-scripts` is missing, install it manually:  
  ```sh
  npm install react-scripts --save
  ```
- If `node_modules` is corrupted, delete and reinstall dependencies:  
  ```sh
  rm -rf node_modules package-lock.json  # Mac/Linux  
  rd /s /q node_modules package-lock.json  # Windows  
  npm install
  ```

---

## 🎯 Technologies Used  

- **Frontend:** React, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
