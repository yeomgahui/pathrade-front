'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { INVOICE_TAB_KEYS, INVOICE_TAB_VALUE } from '@/types/invoice';

import InvoiceTabs from './InvoiceTabs';
import OrderConfirmsContent from './contents/OrderConfirmsContent';
import ProformaContent from './contents/ProformaCotent';
import PaymentContent from './contents/PaymentContent';
import BankReceiptsContent from './contents/BankReceiptsContent';
import DepositInvoicesContent from './contents/DepositInvoicesContent';
import CreditsContent from './contents/CreditsContent';

const InvoicePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState<INVOICE_TAB_VALUE>(
    INVOICE_TAB_KEYS.PAYMENT,
  ); // 기본 탭 설정

  // URL에서 탭 정보를 추출하고 상태 초기화
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (
      tab &&
      Object.values(INVOICE_TAB_KEYS).includes(tab as INVOICE_TAB_VALUE)
    ) {
      setSelectedTab(tab as INVOICE_TAB_VALUE);
    }
  }, [searchParams]);

  // 선택된 탭에 따라 렌더링할 콘텐츠 결정
  const renderContent = (): JSX.Element | null => {
    switch (selectedTab) {
      case INVOICE_TAB_KEYS.ORDER_CONFIRMS:
        return <OrderConfirmsContent />;
      case INVOICE_TAB_KEYS.PROFORMA:
        return <ProformaContent />;
      case INVOICE_TAB_KEYS.PAYMENT:
        return <PaymentContent />;
      case INVOICE_TAB_KEYS.BANK_RECEIPTS:
        return <BankReceiptsContent />;
      case INVOICE_TAB_KEYS.DEPOSIT_INVOICES:
        return <DepositInvoicesContent />;
      case INVOICE_TAB_KEYS.CREDITS:
        return <CreditsContent />;
      default:
        return <div>Content not available</div>; // Fallback 처리
    }
  };

  // 탭 클릭 시 URL 업데이트
  const handleTabClick = (value: INVOICE_TAB_VALUE) => {
    setSelectedTab(value);
    // 현재 URL에서 query parameters를 업데이트
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.push(`?${params.toString()}`); // URL을 query string과 함께 업데이트
  };

  return (
    <div>
      <InvoiceTabs selectedTab={selectedTab} onTabClick={handleTabClick} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default InvoicePage;
