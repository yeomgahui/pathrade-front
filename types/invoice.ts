export const INVOICE_TAB_KEYS = {
  ORDER_CONFIRMS: 'order_confirms',
  PROFORMA: 'proforma',
  PAYMENT: 'payment',
  BANK_RECEIPTS: 'bank_receipts',
  DEPOSIT_INVOICES: 'deposit_invoices',
  CREDITS: 'credits',
} as const;

export type INVOICE_TAB_KEY = keyof typeof INVOICE_TAB_KEYS;
export type INVOICE_TAB_VALUE =
  (typeof INVOICE_TAB_KEYS)[keyof typeof INVOICE_TAB_KEYS];
