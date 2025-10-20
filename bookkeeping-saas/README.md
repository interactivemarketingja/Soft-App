# Bookkeeping SaaS

Welcome to the Bookkeeping SaaS project! This project is designed to provide a comprehensive solution for managing invoices and billing processes through a Software as a Service (SaaS) model.

## Project Structure

The project is organized into several key directories:

- **backend**: Contains the server-side code, including API endpoints, database models, and business logic.
- **frontend**: Contains the client-side code, including the user interface and components.
- **shared**: Contains shared types and interfaces used across both backend and frontend.
- **infra**: Contains infrastructure-related files, including Docker configurations and Kubernetes deployment files.
- **tests**: Contains test files for both backend and frontend components.
- **scripts**: Contains utility scripts for starting the application and running migrations.
- **.github**: Contains CI/CD workflows for automated testing and deployment.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd bookkeeping-saas
   ```

2. **Install dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up environment variables**:
   Copy the `.env.example` file to `.env` in the backend directory and fill in the required values.

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend
     npm start
     ```

## Features

- **Invoice Management**: Create, view, and delete invoices.
- **Billing Services**: Process payments and generate invoices.
- **User Dashboard**: A user-friendly interface to manage invoices and billing information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.