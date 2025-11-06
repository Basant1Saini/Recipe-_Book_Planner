# Recipe-_Book_Planner
Of course! Here is the README.md file for your Recipe Book Planner project, tailored for the MERN stack, emphasizing the use of Vim, avoiding deprecated practices, and keeping the code beginner-level friendly, all in English.

📚 Recipe Book Planner - README.md 📝

🌟 Project Overview

This is a MERN Stack web application designed with beginner coders in mind. Its primary goal is to provide users with a functional platform to save, organize, and manage their favorite recipes.

Stack Used:

    MongoDB (Database)

    Express.js (Backend Framework)

    React (Frontend Library)

    Node.js (Runtime Environment)

Editor Used: This guide assumes you'll be setting up the project using the Vim editor.

🚀 Key Features

This initial version includes the basic CRUD functionalities:

    Create new recipes (Title, Ingredients, Steps).

    View a list of all saved recipes.

    Update existing recipe details.

    Delete recipes permanently.

🛠️ Prerequisites (What You Need)

Before you begin, ensure you have the following tools installed on your system:

    Node.js and npm (Node Package Manager)

    MongoDB (Running locally or accessible via MongoDB Atlas)

    Git (For version control)

💻 Setup and Installation (Using Vim Commands)

Follow these steps to set up the project locally.

1. Clone the Repository

First, clone the repository (if it's remote):
Bash

git clone <repository-url>
cd Recipe-Book-Planner

2. Backend Setup (Server Side)

Navigate into the backend folder (e.g., named server):
Bash

cd server

Install Dependencies:
Bash

npm install

Set Environment Variables:

Create a .env file in the server directory using Vim:
Bash

vim .env

Add your MongoDB connection string inside this file:
Code snippet

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@clustername/recipeDB?retryWrites=true&w=majority

    Security Note: Make sure to add .env to your .gitignore file to keep your credentials private!

3. Frontend Setup (Client Side)

Return to the root directory and navigate to the frontend folder (e.g., named client):
Bash

cd ../client  # Move up one level from 'server' and into 'client'

Install Dependencies:
Bash

npm install

▶️ How to Run the Application

You will need two separate terminal windows to run the client and the server simultaneously.

1. Start the Backend

In the first terminal (inside the server directory):
Bash

npm run dev  # Or 'node server.js', depending on your defined start script

The server should start, usually listening on http://localhost:5000.

2. Start the Frontend

In the second terminal (inside the client directory):
Bash

npm start

The React application will compile and open automatically in your browser, usually at http://localhost:3000.

🧩 Code Structure (For Beginners)

    server/: Contains all backend logic (Express routes, Controllers, Models).

        models/Recipe.js: Defines the Mongoose Schema for a Recipe.

        routes/recipeRoutes.js: Handles the API endpoint definitions (e.g., /api/recipes).

    client/src/: Contains all React components and client-side logic.

        components/: Small, reusable UI elements (e.g., RecipeCard.js).

        pages/: Main screens/views of the application (e.g., RecipeList.js, AddRecipeForm.js).