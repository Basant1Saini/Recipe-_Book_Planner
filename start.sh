#!/bin/bash

echo "Starting Recipe Book Planner..."

# Start backend
echo "Starting backend server..."
cd server && npm run dev &

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "Starting frontend..."
cd ../client && npm run dev &

echo "Both servers are starting..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"

wait