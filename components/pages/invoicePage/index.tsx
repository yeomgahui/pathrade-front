import { useState } from 'react';
import InvoiceTabs from './InvoiceTabs';
import OrderConfirmsContent from './contents/OrderConfirmsContent';
import ProformaContent from './contents/ProformaCotent';
import PaymentContent from './contents/PaymentContent';
import BankReceiptsContent from './contents/BankReceiptsContent';
import DepositInvoicesContent from './contents/DepositInvoicesContent';
import CreditsContent from './contents/CreditsContent';

const InvoicePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>('payment'); // 기본 탭 설정

  // 선택된 탭에 따라 렌더링할 콘텐츠 결정
  const renderContent = () => {
    switch (selectedTab) {
      case 'order_confirms':
        return <OrderConfirmsContent />;
      case 'proforma':
        return <ProformaContent />;
      case 'payment':
        return <PaymentContent />;
      case 'bank_receipts':
        return <BankReceiptsContent />;
      case 'deposit_invoices':
        return <DepositInvoicesContent />;
      case 'credits':
        return <CreditsContent />;
      default:
        return null;
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
