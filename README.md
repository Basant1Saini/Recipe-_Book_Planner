# Recipe Book Planner

📚 A MERN Stack Recipe Management Application

## 🌟 Project Overview

A MERN Stack web application designed for managing and organizing recipes. Built with beginner-friendly code practices using modern, actively maintained libraries.

### Tech Stack
- **MongoDB** - Database
- **Express.js** - Backend Framework  
- **React** - Frontend Library
- **Vite** - Build Tool
- **Node.js** - Runtime Environment

> **Note:** This project strictly avoids deprecated libraries and outdated methods, utilizing modern versions of React, Express, and Mongoose for stability and security.

## 🚀 Features

- Create new recipes (Title, Ingredients, Steps)
- View all saved recipes
- Update existing recipes
- Delete recipes

## 🛠️ Prerequisites

- Node.js and npm
- MongoDB (local or MongoDB Atlas)
username basant357_db_user
password PbY4UUg7ZLaBTic4
- Git

## 💻 Installation

### 1. Clone Repository
```bash
git clone <repository-url>
cd Recipe-Book-Planner
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster/recipeDB
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

## ▶️ Running the Application

### Start Backend (Terminal 1)
```bash
cd server
npm run dev
```
Server runs on http://localhost:5000

### Start Frontend (Terminal 2)
```bash
cd client
npm run dev
```
App opens at http://localhost:5173

## 🧩 Project Structure

```
Recipe-Book-Planner/
├── server/
│   ├── models/Recipe.js
│   ├── routes/recipeRoutes.js
│   └── server.js
└── client/
    └── src/
        ├── components/
        └── pages/
```