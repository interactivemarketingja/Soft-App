import request from 'supertest';
import app from '../../src/app';
import { Invoice } from '../../src/models/invoice';

describe('Invoice API', () => {
  let invoiceId: string;

  beforeAll(async () => {
    // Setup code to run before all tests, e.g., creating a test invoice
    const response = await request(app)
      .post('/invoices')
      .send({
        amount: 100,
        description: 'Test Invoice',
        dueDate: '2023-12-31',
      });
    invoiceId = response.body.id;
  });

  afterAll(async () => {
    // Cleanup code to run after all tests, e.g., deleting the test invoice
    await request(app).delete(`/invoices/${invoiceId}`);
  });

  it('should create a new invoice', async () => {
    const response = await request(app)
      .post('/invoices')
      .send({
        amount: 200,
        description: 'New Invoice',
        dueDate: '2024-01-31',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.amount).toBe(200);
  });

  it('should retrieve an invoice by ID', async () => {
    const response = await request(app).get(`/invoices/${invoiceId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', invoiceId);
  });

  it('should delete an invoice', async () => {
    const response = await request(app).delete(`/invoices/${invoiceId}`);
    expect(response.status).toBe(204);
  });
});