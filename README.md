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

## 🌐 Live Database

This project is connected to a live MongoDB Atlas database. The connection is already configured and ready to use.

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
MONGO_URI=mongodb+srv://basant357_db_user:PbY4UUg7ZLaBTic4@cluster0.jabknom.mongodb.net/recipeDB?retryWrites=true&w=majority
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

## ▶️ Running the Application

### Option 1: Quick Start (Recommended)
```bash
bash start.sh
```

### Option 2: Manual Start
**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```
Server runs on http://localhost:5000

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```
App opens at http://localhost:5173

## 🧩 Project Structure

```
Recipe-Book-Planner/
├── server/
│   ├── models/Recipe.js          # MongoDB Recipe schema
│   ├── routes/recipeRoutes.js    # API endpoints (CRUD)
│   ├── server.js                 # Express server setup
│   ├── test-connection.js        # MongoDB connection test
│   ├── package.json              # Backend dependencies
│   └── .env                      # Environment variables
├── client/
│   └── src/
│       ├── components/
│       │   ├── RecipeCard.jsx    # Recipe display component
│       │   └── RecipeForm.jsx    # Add/Edit recipe form
│       ├── pages/
│       │   └── RecipeList.jsx    # Main application page
│       ├── App.jsx               # Root component
│       └── App.css               # Application styles
├── start.sh                      # Quick start script
└── README.md                     # Project documentation
```

## 🔧 API Endpoints

- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create new recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe

## 🗄️ Database

- **Database**: MongoDB Atlas
- **Collection**: recipes
- **Schema**: Title, Ingredients (Array), Steps (Array), Timestamps

## 🚀 Development

- **Backend**: Express.js with Mongoose ODM
- **Frontend**: React with Vite for fast development
- **Styling**: Pure CSS with responsive design
- **Error Handling**: Comprehensive error handling on both client and server