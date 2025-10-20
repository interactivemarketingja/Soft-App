import { supabase } from '../config/supabase';
import { 
  Company, 
  Transaction, 
  TransactionLine, 
  Invoice, 
  InvoiceLine,
  Account 
} from '../types/database';

export class BookkeepingService {
  async createCompany(data: Partial<Company>) {
    const { data: company, error } = await supabase
      .from('companies')
      .insert([data])
      .single();

    if (error) throw error;
    return company;
  }

  async getCompanyTransactions(companyId: string) {
    const { data: transactions, error } = await supabase
      .from('transactions')
      .select(`
        *,
        transaction_lines (*)
      `)
      .eq('company_id', companyId);

    if (error) throw error;
    return transactions;
  }

  async createTransaction(data: Partial<Transaction>, lines: Partial<TransactionLine>[]) {
    const { data: transaction, error: transactionError } = await supabase
      .from('transactions')
      .insert([data])
      .single();

    if (transactionError) throw transactionError;

    const transactionLines = lines.map(line => ({
      ...line,
      transaction_id: transaction.id
    }));

    const { data: createdLines, error: linesError } = await supabase
      .from('transaction_lines')
      .insert(transactionLines);

    if (linesError) throw linesError;

    return {
      ...transaction,
      lines: createdLines
    };
  }

  async createInvoice(data: Partial<Invoice>, lines: Partial<InvoiceLine>[]) {
    const { data: invoice, error: invoiceError } = await supabase
      .from('invoices')
      .insert([data])
      .single();

    if (invoiceError) throw invoiceError;

    const invoiceLines = lines.map(line => ({
      ...line,
      invoice_id: invoice.id
    }));

    const { data: createdLines, error: linesError } = await supabase
      .from('invoice_lines')
      .insert(invoiceLines);

    if (linesError) throw linesError;

    return {
      ...invoice,
      lines: createdLines
    };
  }

  async getCompanyAccounts(companyId: string) {
    const { data: accounts, error } = await supabase
      .from('accounts')
      .select('*')
      .eq('company_id', companyId)
      .eq('is_active', true);

    if (error) throw error;
    return accounts;
  }

  async getTrialBalance(companyId: string, asOfDate: string) {
    const { data, error } = await supabase
      .rpc('get_trial_balance', {
        p_company_id: companyId,
        p_date: asOfDate
      });

    if (error) throw error;
    return data;
  }
}