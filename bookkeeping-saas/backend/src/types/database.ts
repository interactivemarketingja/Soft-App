export type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  updated_at: string;
}

export type Company = {
  id: string;
  name: string;
  tax_number: string | null;
  address: string | null;
  phone: string | null;
  logo_url: string | null;
  owner_id: string;
  created_at: string;
  updated_at: string;
}

export type CompanyMember = {
  company_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'member';
}

export type Account = {
  id: string;
  company_id: string;
  code: string;
  name: string;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type Transaction = {
  id: string;
  company_id: string;
  date: string;
  description: string | null;
  reference_number: string | null;
  status: 'draft' | 'posted' | 'void';
  created_by: string;
  created_at: string;
  updated_at: string;
}

export type TransactionLine = {
  id: string;
  transaction_id: string;
  account_id: string;
  debit_amount: number;
  credit_amount: number;
  description: string | null;
  created_at: string;
}

export type Invoice = {
  id: string;
  company_id: string;
  customer_id: string | null;
  invoice_number: string;
  issue_date: string;
  due_date: string;
  status: 'draft' | 'sent' | 'paid' | 'void';
  subtotal: number;
  tax_amount: number;
  total_amount: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export type InvoiceLine = {
  id: string;
  invoice_id: string;
  description: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  amount: number;
  created_at: string;
}