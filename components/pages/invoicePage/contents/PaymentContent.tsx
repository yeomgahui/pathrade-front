'use client';
import Link from 'next/link';
import { useState } from 'react';

import InvoiceTable from '../InvoiceTable';
import Button from '@/components/atoms/Button';
import FilterPanel from '@/components/molecules/FilterPanel';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const PaymentContent = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between pb-2 pt-1">
        <Button
          variant="secondary"
          onClick={() => setIsFilterVisible((prev) => !prev)}
        >
          <div className="flex">
            <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
            Filter
          </div>
        </Button>
        <Button>
          <Link href="payment/upload-payment">Upload Payment</Link>
        </Button>
      </div>
      <InvoiceTable />
      <FilterPanel
        isVisible={isFilterVisible}
        onClose={() => {
          setIsFilterVisible(false);
        }}
      />
    </div>
  );
};

export default PaymentContent;
