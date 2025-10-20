export class Invoice {
    id: string;
    customerName: string;
    amount: number;
    date: Date;
    status: 'paid' | 'unpaid' | 'overdue';

    constructor(id: string, customerName: string, amount: number, date: Date, status: 'paid' | 'unpaid' | 'overdue') {
        this.id = id;
        this.customerName = customerName;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    validate(): boolean {
        if (!this.customerName || this.amount <= 0) {
            return false;
        }
        return true;
    }

    markAsPaid(): void {
        this.status = 'paid';
    }

    markAsUnpaid(): void {
        this.status = 'unpaid';
    }

    markAsOverdue(): void {
        this.status = 'overdue';
    }
}