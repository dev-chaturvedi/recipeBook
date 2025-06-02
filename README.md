# 🍽️ Recipe Book (MERN Stack)

A full-stack Recipe Book application built with the **MERN stack** (MongoDB, Express, React, Node.js) that allows users to **sign up, log in**, and **create, view, update, and delete recipes**.

---

## ✨ Features

- 🔐 User Authentication (JWT-based)
- 📦 RESTful API for recipes
- 🧑‍🍳 Create, read, update, and delete recipes
- 🖼️ Upload image URLs
- 📱 Responsive React frontend
- ☁️ MongoDB database integration

---

## 🚀 Tech Stack

**Frontend:**
- React
- React Router
- Axios

**Backend:**
- Express.js
- Node.js
- MongoDB + Mongoose
- JWT + Bcrypt for auth

---

## 📂 Project Structure

```
recipe-book/
├── client/      # React frontend
├── server/      # Express backend
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/recipe-book.git
cd recipe-book
```

### 2. Backend Setup (Express)

```bash
cd server
npm install
cp .env.example .env  # Then update your Mongo URI and JWT secret
npm start
```

> Runs backend on `http://localhost:5000`

---

### 3. Frontend Setup (React)

```bash
cd ../client
npm install
npm start
```

> Runs frontend on `http://localhost:3000`

---

## 🌐 API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/api/auth/signup`   | Register a new user      |
| POST   | `/api/auth/login`    | Authenticate user        |
| GET    | `/api/recipes`       | Fetch all recipes        |
| POST   | `/api/recipes`       | Create a new recipe      |
| PUT    | `/api/recipes/:id`   | Update a recipe          |
| DELETE | `/api/recipes/:id`   | Delete a recipe          |

---

