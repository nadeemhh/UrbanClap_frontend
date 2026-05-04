"use client";
import React, { useState } from 'react';

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    { id: 'TRX-1001', date: 'May 03, 2026', customer: 'Alice Smith', provider: 'John Doe', amount: '$150.00', status: 'Completed' },
    { id: 'TRX-1002', date: 'May 02, 2026', customer: 'Bob Johnson', provider: 'Jane Smith', amount: '$85.00', status: 'Pending' },
    { id: 'TRX-1003', date: 'May 01, 2026', customer: 'Charlie Brown', provider: 'Mike Ross', amount: '$200.00', status: 'Completed' },
    { id: 'TRX-1004', date: 'Apr 30, 2026', customer: 'Diana Prince', provider: 'Sarah Lee', amount: '$45.00', status: 'Failed' },
    { id: 'TRX-1005', date: 'Apr 29, 2026', customer: 'Eve Adams', provider: 'John Doe', amount: '$120.00', status: 'Completed' },
  ];

  const filteredTransactions = transactions.filter(trx => 
    trx.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trx.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trx.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              type="text" 
              placeholder="Search by ID, customer, or provider..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="hidden sm:block">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-700">
              <option>All Statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Transaction ID</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Provider</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredTransactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-900">{trx.id}</td>
                  <td className="p-4 text-gray-600">{trx.date}</td>
                  <td className="p-4 text-gray-800">{trx.customer}</td>
                  <td className="p-4 text-gray-800">{trx.provider}</td>
                  <td className="p-4 text-gray-900 font-semibold">{trx.amount}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      trx.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-900 font-medium text-sm">View Details</button>
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">
                    No transactions found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
          <div>Showing {filteredTransactions.length} of {transactions.length} results</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 bg-gray-100 font-medium">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
