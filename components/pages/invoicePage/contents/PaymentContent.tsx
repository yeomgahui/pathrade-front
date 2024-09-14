import InvoiceTable from '../InvoiceTable';
import Button from '@/components/atoms/Button';
const PaymentContent = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between pb-2 pt-1">
        <Button variant="secondary">Filter</Button>
        <Button>Upload Payment</Button>
      </div>
      <InvoiceTable />
    </div>
  );
};

export default PaymentContent;
