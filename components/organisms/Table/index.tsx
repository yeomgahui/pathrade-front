// components/organisms/Table.tsx
import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        {/* 테이블 헤더 */}
        <thead className="bg-gray-100">
          <tr className="text-gray-700">
            <th className="py-3 px-4 font-semibold text-left">Title</th>
            <th className="py-3 px-4 font-semibold text-left">Agency</th>
            <th className="py-3 px-4 font-semibold text-left">Sender</th>
            <th className="py-3 px-4 font-semibold text-left">Receiver</th>
            <th className="py-3 px-4 font-semibold text-left">Ordered By</th>
            <th className="py-3 px-4 font-semibold text-left">Paid Amount</th>
            <th className="py-3 px-4 font-semibold text-left">Unpaid Amount</th>
            <th className="py-3 px-4 font-semibold text-left">Requested On</th>
            <th className="py-3 px-4 font-semibold text-left">Status</th>
          </tr>
        </thead>

        {/* 테이블 바디 */}
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="py-4 px-4">
              <div className="font-medium text-gray-900">
                J.LINDEBERG STOCKLIST
              </div>
              <div className="text-sm text-gray-500">AVAILABLE SS23 Season</div>
            </td>
            <td className="py-4 px-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  AN
                </div>
                <span className="text-gray-900">Agency Name</span>
              </div>
            </td>
            <td className="py-4 px-4">Buyer Name</td>
            <td className="py-4 px-4">Uno Trading</td>
            <td className="py-4 px-4">ELEONORA BONUCCI SRL</td>
            <td className="py-4 px-4">€9,999,999</td>
            <td className="py-4 px-4">€9,999,999</td>
            <td className="py-4 px-4">Jan 13, 2024 12:00PM</td>
            <td className="py-4 px-4">
              <span className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                Normal
              </span>
            </td>
          </tr>
          {/* 다른 행들이 반복될 수 있습니다 */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
