#!/bin/bash

# Navigate to the backend directory and start the backend service
cd backend
npm install
npm run start &

# Navigate to the frontend directory and start the frontend service
cd ../frontend
npm install
npm run start &

# Wait for both services to start
wait
