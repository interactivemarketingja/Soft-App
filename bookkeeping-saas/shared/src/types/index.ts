export type Invoice = {
    id: string;
    customerName: string;
    amount: number;
    dueDate: Date;
    status: 'paid' | 'unpaid' | 'overdue';
};

export type User = {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
};

export type Payment = {
    id: string;
    invoiceId: string;
    amount: number;
    paymentDate: Date;
    method: 'credit_card' | 'bank_transfer' | 'paypal';
};