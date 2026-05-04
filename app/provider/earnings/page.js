"use client";
import React from 'react';

export default function EarningsPage() {
  const stats = [
    { label: 'Total Earnings', value: '$12,450', trend: '+15%', trendType: 'positive' },
    { label: 'Pending Clearance', value: '$840', trend: 'Processing', trendType: 'neutral' },
    { label: 'Completed Jobs', value: '142', trend: '+8 this month', trendType: 'positive' },
    { label: 'Average Rating', value: '4.9', trend: 'Top 5%', trendType: 'positive' },
  ];

  const transactions = [
    { id: 'TRX-101', date: 'May 02, 2026', service: 'Deep House Cleaning', amount: '$120.00', status: 'Completed' },
    { id: 'TRX-102', date: 'May 01, 2026', service: 'Plumbing Repair', amount: '$85.50', status: 'Pending' },
    { id: 'TRX-103', date: 'Apr 28, 2026', service: 'AC Servicing', amount: '$150.00', status: 'Completed' },
    { id: 'TRX-104', date: 'Apr 25, 2026', service: 'Electrical Wiring', amount: '$210.00', status: 'Completed' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text-main">Earnings Dashboard</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition shadow-md">
          Withdraw Funds
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col justify-between">
            <h3 className="text-text-muted text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-text-main mt-2 mb-1">{stat.value}</p>
            <span className={`text-sm font-medium ${stat.trendType === 'positive' ? 'text-green-500' : 'text-yellow-500'}`}>
              {stat.trend}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-bold text-text-main">Recent Transactions</h2>
          <button className="text-primary text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background text-text-muted text-sm">
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Service</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-text-main text-sm">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-background transition">
                  <td className="p-4 font-medium">{trx.id}</td>
                  <td className="p-4 text-text-muted">{trx.date}</td>
                  <td className="p-4">{trx.service}</td>
                  <td className="p-4 font-bold">{trx.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${trx.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
