import { useState } from 'react';
import InvoiceTabs from './InvoiceTabs';
import OrderConfirmsContent from './contents/OrderConfirmsContent';
import ProformaContent from './contents/ProformaCotent';
import PaymentContent from './contents/PaymentContent';
import BankReceiptsContent from './contents/BankReceiptsContent';
import DepositInvoicesContent from './contents/DepositInvoicesContent';
import CreditsContent from './contents/CreditsContent';

const TAB_KEYS = {
  ORDER_CONFIRMS: 'order_confirms',
  PROFORMA: 'proforma',
  PAYMENT: 'payment',
  BANK_RECEIPTS: 'bank_receipts',
  DEPOSIT_INVOICES: 'deposit_invoices',
  CREDITS: 'credits',
} as const;

const InvoicePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TAB_KEYS.PAYMENT); // 기본 탭 설정

  // 선택된 탭에 따라 렌더링할 콘텐츠 결정
  const renderContent = (): JSX.Element | null => {
    switch (selectedTab) {
      case TAB_KEYS.ORDER_CONFIRMS:
        return <OrderConfirmsContent />;
      case TAB_KEYS.PROFORMA:
        return <ProformaContent />;
      case TAB_KEYS.PAYMENT:
        return <PaymentContent />;
      case TAB_KEYS.BANK_RECEIPTS:
        return <BankReceiptsContent />;
      case TAB_KEYS.DEPOSIT_INVOICES:
        return <DepositInvoicesContent />;
      case TAB_KEYS.CREDITS:
        return <CreditsContent />;
      default:
        return <div>Content not available</div>; // Fallback 처리
    }
  };

  return (
    <div>
      <InvoiceTabs selectedTab={selectedTab} onTabClick={setSelectedTab} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default InvoicePage;
