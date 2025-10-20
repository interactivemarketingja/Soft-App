# Bookkeeping SaaS Backend

This is the backend service for the Bookkeeping SaaS application. It is built using TypeScript and Express, providing RESTful APIs for managing invoices and handling billing processes.

## Project Structure

- **src/**: Contains the source code for the backend service.
  - **controllers/**: Contains the controllers that handle incoming requests and responses.
  - **routes/**: Defines the routes for the application.
  - **services/**: Contains business logic and service layer for processing invoices and payments.
  - **models/**: Defines the data models used in the application.
  - **db/**: Contains database-related files, including migrations and schema.
  - **utils/**: Contains utility functions and classes, such as logging.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd bookkeeping-saas/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy the `.env.example` to `.env` and fill in the required values.

4. **Run the application**:
   ```bash
   npm start
   ```

## API Endpoints

- **POST /invoices**: Create a new invoice.
- **GET /invoices/:id**: Retrieve an invoice by ID.
- **DELETE /invoices/:id**: Delete an invoice by ID.

## Testing

To run the tests for the backend service, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.