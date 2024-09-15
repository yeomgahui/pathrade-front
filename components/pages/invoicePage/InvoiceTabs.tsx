'use client';

import { useState } from 'react';
import Link from 'next/link'; // Link를 import합니다.
import { INVOICE_TAB_KEYS } from '@/types/invoice';
import Tabs from '@/components/molecules/Tabs'; // Compound Component를 import

const tabs = [
  {
    label: 'Order Confirms',
    value: INVOICE_TAB_KEYS.ORDER_CONFIRMS,
    href: 'order-confirms',
  },
  {
    label: 'Proforma',
    value: INVOICE_TAB_KEYS.PROFORMA,
    href: 'proforma',
  },
  {
    label: 'Payment',
    value: INVOICE_TAB_KEYS.PAYMENT,
    href: 'payment',
  },
  {
    label: 'Bank Receipts',
    value: INVOICE_TAB_KEYS.BANK_RECEIPTS,
    href: 'bank-receipts',
  },
  {
    label: 'Deposit Invoices',
    value: INVOICE_TAB_KEYS.DEPOSIT_INVOICES,
    href: 'deposit-invoices',
  },
  {
    label: 'Credits',
    value: INVOICE_TAB_KEYS.CREDITS,
    href: 'credits',
  },
];

const InvoiceTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>(
    INVOICE_TAB_KEYS.PAYMENT,
  );

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Tabs selectedTab={selectedTab} onTabClick={handleTabClick}>
      {tabs.map((tab) => (
        <Link key={tab.value} href={tab.href}>
          <Tabs.Tab value={tab.value} label={tab.label} />
        </Link>
      ))}
    </Tabs>
  );
};

export default InvoiceTabs;
