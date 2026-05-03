"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProviderBookingsPage() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings = [
    {
      id: "REQ-11029",
      service: "Precision Gas Leak Fix & Refill",
      date: "Today",
      time: "04:30 PM",
      status: "New Requests",
      price: "₹2,499",
      customer: {
        name: "Rahul Verma",
        address: "Apt 2B, Sunshine Towers, Sector 45",
        distance: "2.4 km away"
      }
    },
    {
      id: "BKG-10492",
      service: "Comprehensive AC Power Service",
      date: "Tomorrow",
      time: "11:00 AM",
      status: "Upcoming",
      price: "₹648",
      customer: {
        name: "Pooja Sharma",
        address: "Villa 14, Rosewood Gardens, Sector 104",
        distance: "4.1 km away"
      }
    },
    {
      id: "BKG-10384",
      service: "AC Deep Cleaning",
      date: "Thu, 16 May",
      time: "02:00 PM",
      status: "Upcoming",
      price: "₹899",
      customer: {
        name: "Amit Desai",
        address: "House 55, Block B, Sector 62",
        distance: "1.2 km away"
      }
    },
    {
      id: "BKG-09821",
      service: "AC Installation",
      date: "Mon, 02 May",
      time: "09:00 AM",
      status: "Completed",
      price: "₹1,499",
      customer: {
        name: "Neha Gupta",
        address: "Flat 401, Supertech, Sector 93",
        distance: "3.8 km away"
      }
    },
    {
      id: "BKG-08734",
      service: "AC Repair Diagnostics",
      date: "Wed, 20 Apr",
      time: "02:00 PM",
      status: "Cancelled",
      price: "₹299",
      customer: {
        name: "Vikas Singh",
        address: "House 12, Sector 50",
        distance: "5.5 km away"
      }
    }
  ];

  const filteredBookings = bookings.filter(b => b.status === activeTab);

  const getStatusBadge = (status) => {
    switch(status) {
      case "New Requests": return <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">New Request</span>;
      case "Upcoming": return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Upcoming</span>;
      case "Completed": return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Completed</span>;
      case "Cancelled": return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Cancelled</span>;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Manage Bookings</h1>
          <p className="text-text-muted mt-1">View and manage all your assigned jobs.</p>
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b border-border overflow-x-auto custom-scrollbar">
          {["New Requests", "Upcoming", "Completed", "Cancelled"].map((tab) => {
            const count = bookings.filter(b => b.status === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? "text-primary border-b-2 border-primary bg-primary-light/10" 
                    : "text-text-muted hover:bg-gray-50 hover:text-text-main"
                }`}
              >
                {tab}
                {count > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Bookings List */}
        <div className="p-4 sm:p-6 flex flex-col gap-6 bg-gray-50/50">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-text-main mb-1">No {activeTab.toLowerCase()} jobs</h3>
              <p className="text-text-muted">You're all caught up for now.</p>
            </div>
          ) : (
            filteredBookings.map((booking, index) => (
              <div key={booking.id} className="bg-white border border-border rounded-xl p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusBadge(booking.status)}
                      <span className="text-sm font-medium text-text-muted">ID: {booking.id}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-main">{booking.service}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-text-main">{booking.price}</div>
                    <span className="text-xs text-text-muted">Payment: Online</span>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Scheduled For</div>
                      <div className="font-bold text-text-main">{booking.date}</div>
                      <div className="text-sm text-text-main">{booking.time}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Customer Details</div>
                      <div className="font-bold text-text-main">{booking.customer.name}</div>
                      <div className="text-sm text-text-muted leading-tight">{booking.customer.address}</div>
                      <div className="text-xs text-primary font-medium mt-1">{booking.customer.distance}</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  {booking.status === "New Requests" && (
                    <>
                      <button className="px-6 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition">Decline</button>
                      <button className="px-6 py-2 text-sm font-bold bg-primary text-white hover:bg-primary-hover rounded-lg transition shadow-sm">Accept Job</button>
                    </>
                  )}
                  {booking.status === "Upcoming" && (
                    <>
                      <button className="px-5 py-2 text-sm font-bold text-text-main border border-border hover:bg-gray-50 rounded-lg transition flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        Call
                      </button>
                      <button className="px-5 py-2 text-sm font-bold text-primary border border-primary hover:bg-primary-light/10 rounded-lg transition flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                        Navigate
                      </button>
                      <button className="px-6 py-2 text-sm font-bold bg-green-600 text-white hover:bg-green-700 rounded-lg transition shadow-sm ml-auto">Mark Completed</button>
                    </>
                  )}
                  {booking.status === "Completed" && (
                    <button className="px-5 py-2 text-sm font-bold text-primary border border-primary hover:bg-primary-light/10 rounded-lg transition">View Invoice</button>
                  )}
                  {booking.status === "Cancelled" && (
                    <span className="text-sm text-text-muted italic">Cancelled on {booking.date}</span>
                  )}
                </div>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
