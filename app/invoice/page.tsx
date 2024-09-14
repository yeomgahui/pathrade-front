import InvoicePage from '@/components/pages/InvoicePage';

const Page = () => {
  return (
    <div className="bg-white h-screen py-8 px-4">
      <h1 className="text-2xl font-bold text-black relative mb-4">Invoice</h1>
      <InvoicePage />
    </div>
  );
};

export default Page;
