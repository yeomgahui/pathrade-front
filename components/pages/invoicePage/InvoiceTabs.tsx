import { Tab } from '@/types/tabTypes';
import Tabs from '@/components/molecules/Tabs'; // 기존의 Tabs 컴포넌트를 import

const tabs: Tab[] = [
  { label: 'Order Confirms', value: 'order_confirms' },
  { label: 'Proforma', value: 'proforma' },
  { label: 'Payment', value: 'payment' },
  { label: 'Bank Receipts', value: 'bank_receipts' },
  { label: 'Deposit Invoices', value: 'deposit_invoices' },
  { label: 'Credits', value: 'credits' },
];

interface InvoiceTabProps {
  selectedTab: string;
  onTabClick: (value: string) => void;
}

const InvoiceTabs = ({ selectedTab, onTabClick }: InvoiceTabProps) => {
  return <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={onTabClick} />;
};

export default InvoiceTabs;
