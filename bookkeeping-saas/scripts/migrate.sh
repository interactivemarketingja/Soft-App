#!/bin/bash

# This script is used to run database migrations for the bookkeeping SaaS project.

set -e

# Define the database connection parameters
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="your_username"
DB_PASSWORD="your_password"
DB_NAME="your_database"

# Run the migrations
echo "Running database migrations..."

# Assuming you have a migration tool like 'sequelize-cli' or similar
npx sequelize-cli db:migrate --host $DB_HOST --port $DB_PORT --username $DB_USER --password $DB_PASSWORD --database $DB_NAME

echo "Migrations completed successfully."