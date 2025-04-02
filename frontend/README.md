# E-Clinic App

## Overview
E-Clinic is a web application designed for online clinic management. It allows patients to book appointments, doctors to manage schedules, and admins to oversee operations. The backend is built using Express.js with PostgreSQL, and JWT is used for authentication.

## Prerequisites
Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [PostgreSQL](https://www.postgresql.org/) (Ensure PostgreSQL is running locally)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/L-Semakale/e-clinic.git
cd e-clinic
```

### 2. Install Dependencies
Run the following command inside the project directory:
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
PORT=5000
DATABASE_URL=postgres://yourusername:yourpassword@localhost:5432/eclinic_db
JWT_SECRET=your_secret_key
```
Modify the values as needed based on your setup.

### 4. Set Up the Database
Ensure PostgreSQL is running, then execute:
```sh
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all # (Optional) Seed initial data
```

### 5. Start the Server
Run the backend server with:
```sh
npm start
```
The server should now be running at `http://localhost:5000/`

### 6. Run the Frontend (If applicable)
If you have a frontend, navigate to its directory and run:
```sh
npm install
npm start
```

## API Documentation
You can explore the API using Postman or any API testing tool. If Swagger is configured, visit:
```
http://localhost:5000/api-docs
```

## Troubleshooting
- **Database connection issues:** Ensure PostgreSQL is running and credentials in `.env` are correct.
- **Port conflicts:** If port 5000 is in use, change it in `.env` and restart the server.