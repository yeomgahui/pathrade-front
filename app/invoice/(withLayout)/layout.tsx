import InvoiceTabs from '@/components/pages/InvoicePage/InvoiceTabs';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white h-screen py-8 px-4">
      <h1 className="text-2xl font-bold text-black relative mb-4">Invoice</h1>
      <InvoiceTabs />
      {children}
    </div>
  );
}
