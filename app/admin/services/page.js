"use client";
import React, { useState } from 'react';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { id: 'SRV-001', name: 'Bathroom Cleaning', category: 'Home Cleaning', price: '$50', status: 'Active' },
    { id: 'SRV-002', name: 'Kitchen Deep Clean', category: 'Home Cleaning', price: '$80', status: 'Active' },
    { id: 'SRV-003', name: 'Leaking Pipe Repair', category: 'Plumbing', price: '$60', status: 'Active' },
    { id: 'SRV-004', name: 'Ceiling Fan Installation', category: 'Electrical', price: '$45', status: 'Active' },
    { id: 'SRV-005', name: 'Bridal Makeup', category: 'Beauty & Spa', price: '$150', status: 'Inactive' },
  ];

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Service Management</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition shadow-sm font-medium">
          Add New Service
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
              placeholder="Search services..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="hidden sm:block">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-700">
              <option>All Categories</option>
              <option>Home Cleaning</option>
              <option>Plumbing</option>
              <option>Electrical</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Service Name</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Base Price</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50 transition">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-gray-500 text-xs">{service.id}</div>
                  </td>
                  <td className="p-4 text-gray-600">
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-100">
                      {service.category}
                    </span>
                  </td>
                  <td className="p-4 text-gray-900 font-semibold">{service.price}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-900 font-medium text-sm mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900 font-medium text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {filteredServices.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No services found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
          <div>Showing {filteredServices.length} of {services.length} results</div>
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
