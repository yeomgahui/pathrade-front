import React from 'react';

const Page = ({ params }: { params: { title: string } }) => {
  const { title } = params;

  return (
    <div className="bg-white h-screen py-8 px-4">
      <h1 className="text-2xl font-bold text-black relative mb-4">
        {decodeURIComponent(title)}
      </h1>
    </div>
  );
};

export default Page;
