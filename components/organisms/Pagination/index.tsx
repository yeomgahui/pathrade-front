import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border -ml-px first:border-l-0 ${
            i === currentPage ? 'bg-gray-200' : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 border -ml-px hover:bg-gray-100 rounded-l-lg"
        disabled={currentPage === 1}
      >
        &larr;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 border -ml-px hover:bg-gray-100 rounded-r-lg"
        disabled={currentPage === totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
