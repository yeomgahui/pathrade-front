import { useState } from 'react';
import { Tab } from '@/types/tabTypes';
import Tabs from '@/components/molecules/Tabs'; // 기존의 Tabs 컴포넌트를 import

// 탭 데이터 설정 (페이지에 종속된 내용)
const tabs: Tab[] = [
  { label: 'Order Confirms', value: 'order_confirms' },
  { label: 'Proforma', value: 'proforma' },
  { label: 'Payment', value: 'payment' },
  { label: 'Bank Receipts', value: 'bank_receipts' },
  { label: 'Deposit Invoices', value: 'deposit_invoices' },
  { label: 'Credits', value: 'credits' },
];

const InvoiceTab = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].value);

  const handleTabSelect = (value: string) => {
    setSelectedTab(value);
    console.log('Selected Tab:', value);
  };

  return (
    <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={handleTabSelect} />
  );
};

export default InvoiceTab;
