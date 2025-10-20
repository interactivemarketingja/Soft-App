import { Router } from 'express';
import InvoiceController from '../controllers/invoiceController';

const router = Router();
const invoiceController = new InvoiceController();

export function setRoutes(app) {
    app.use('/api/invoices', router);
    router.post('/', invoiceController.createInvoice.bind(invoiceController));
    router.get('/:id', invoiceController.getInvoice.bind(invoiceController));
    router.delete('/:id', invoiceController.deleteInvoice.bind(invoiceController));
}