import { Tab } from '@/types/tabTypes';
import { INVOICE_TAB_KEYS, INVOICE_TAB_VALUE } from '@/types/invoice';
import Tabs from '@/components/molecules/Tabs'; // 기존의 Tabs 컴포넌트를 import

const tabs: Tab[] = [
  { label: 'Order Confirms', value: INVOICE_TAB_KEYS.ORDER_CONFIRMS },
  { label: 'Proforma', value: INVOICE_TAB_KEYS.PROFORMA },
  { label: 'Payment', value: INVOICE_TAB_KEYS.PAYMENT },
  { label: 'Bank Receipts', value: INVOICE_TAB_KEYS.BANK_RECEIPTS },
  { label: 'Deposit Invoices', value: INVOICE_TAB_KEYS.DEPOSIT_INVOICES },
  { label: 'Credits', value: INVOICE_TAB_KEYS.CREDITS },
];

interface InvoiceTabProps {
  selectedTab: INVOICE_TAB_VALUE;
  onTabClick: (value: INVOICE_TAB_VALUE) => void;
}

const InvoiceTabs = ({ selectedTab, onTabClick }: InvoiceTabProps) => {
  const handleTabClick = (value: string) => {
    if (Object.values(INVOICE_TAB_KEYS).includes(value as INVOICE_TAB_VALUE)) {
      onTabClick(value as INVOICE_TAB_VALUE);
    }
  };

  return (
    <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={handleTabClick} />
  );
};

export default InvoiceTabs;
