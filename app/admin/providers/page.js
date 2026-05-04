"use client";
import React, { useState } from 'react';

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const providers = [
    { id: 'PRV-101', name: 'John Doe', businessName: 'JD Cleaning Services', category: 'Cleaning', status: 'Active', rating: 4.8 },
    { id: 'PRV-102', name: 'Mike Smith', businessName: 'Mike Plumbing', category: 'Plumbing', status: 'Pending Approval', rating: 0 },
    { id: 'PRV-103', name: 'Sarah Connor', businessName: 'TechFix Solutions', category: 'Appliance Repair', status: 'Active', rating: 4.9 },
    { id: 'PRV-104', name: 'David Lee', businessName: 'Lee Electricals', category: 'Electrician', status: 'Suspended', rating: 3.5 },
  ];

  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    provider.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Provider Management</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition shadow-sm font-medium">
          Onboard Provider
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
              placeholder="Search providers by name, business, or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="hidden sm:block">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-700">
              <option>All Categories</option>
              <option>Cleaning</option>
              <option>Plumbing</option>
              <option>Electrician</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Provider</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Rating</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredProviders.map((provider) => (
                <tr key={provider.id} className="hover:bg-gray-50 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {provider.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{provider.businessName}</div>
                        <div className="text-gray-500 text-xs">{provider.name} • {provider.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{provider.category}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-gray-700">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {provider.rating > 0 ? provider.rating : 'New'}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      provider.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      provider.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {provider.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-900 font-medium text-sm mr-3">View Details</button>
                    {provider.status === 'Pending Approval' && (
                      <button className="text-green-600 hover:text-green-900 font-medium text-sm mr-3">Approve</button>
                    )}
                    <button className="text-red-600 hover:text-red-900 font-medium text-sm">Action</button>
                  </td>
                </tr>
              ))}
              {filteredProviders.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No providers found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
          <div>Showing {filteredProviders.length} of {providers.length} results</div>
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
