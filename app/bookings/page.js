"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings = [
    {
      id: "BKG-10492",
      service: "Comprehensive AC Power Service",
      date: "Thu, 16 May",
      time: "11:00 AM",
      status: "Upcoming",
      price: "₹648",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
      expert: {
        name: "Amit Patel",
        phone: "+91 98765 43210"
      }
    },
    {
      id: "BKG-09821",
      service: "Full House Deep Cleaning",
      date: "Mon, 02 May",
      time: "09:00 AM",
      status: "Completed",
      price: "₹4,999",
      image: "https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg",
      expert: {
        name: "Priya Singh",
        phone: "+91 98765 43211"
      }
    },
    {
      id: "BKG-08734",
      service: "Sofa Cleaning",
      date: "Wed, 20 Apr",
      time: "02:00 PM",
      status: "Cancelled",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
      expert: null
    }
  ];

  const filteredBookings = bookings.filter(b => b.status === activeTab);

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming": return "bg-blue-100 text-blue-700";
      case "Completed": return "bg-green-100 text-green-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Bookings</h1>
          <p className="text-primary-light">Manage and track all your service appointments.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 mb-20">
        <div className="bg-surface rounded-2xl shadow-xl border border-border overflow-hidden animate-fade-in-up delay-100">

          {/* Tabs */}
          <div className="flex border-b border-border">
            {["Upcoming", "Completed", "Cancelled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-center font-bold text-sm sm:text-base transition-colors ${activeTab === tab
                    ? "text-primary border-b-2 border-primary bg-primary-light/10"
                    : "text-text-muted hover:bg-gray-50 hover:text-text-main"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bookings List */}
          <div className="p-4 sm:p-6 flex flex-col gap-6">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-lg font-bold text-text-main mb-1">No {activeTab.toLowerCase()} bookings</h3>
                <p className="text-text-muted mb-6">Looks like you don't have any {activeTab.toLowerCase()} services yet.</p>
                <Link href="/categories" className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-lg transition">
                  Book a Service
                </Link>
              </div>
            ) : (
              filteredBookings.map((booking, i) => (
                <div key={booking.id} className="border border-border rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>

                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden shrink-0">
                    <Image src={booking.image} alt={booking.service} fill className="object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                        <h3 className="text-lg font-bold text-text-main line-clamp-1">{booking.service}</h3>
                        <div className="text-sm text-text-muted mt-1">Booking ID: {booking.id}</div>
                      </div>
                      <div className="font-bold text-lg text-text-main shrink-0">
                        {booking.price}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 my-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-text-muted text-xs mb-1">Date & Time</div>
                        <div className="font-bold text-text-main flex items-center gap-1">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {booking.date}, {booking.time}
                        </div>
                      </div>
                      {booking.expert && (
                        <div>
                          <div className="text-text-muted text-xs mb-1">Professional</div>
                          <div className="font-bold text-text-main flex items-center gap-1 line-clamp-1">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            {booking.expert.name}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex justify-end gap-3 pt-2">
                      {booking.status === "Upcoming" && (
                        <>
                          <button className="px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition">Cancel</button>
                          <button className="px-4 py-2 text-sm font-bold text-primary border border-primary hover:bg-primary-light/20 rounded-lg transition">Reschedule</button>
                        </>
                      )}
                      {booking.status === "Completed" && (
                        <>
                          <button className="px-4 py-2 text-sm font-bold text-primary border border-primary hover:bg-primary-light/20 rounded-lg transition">Rate Service</button>
                          <button className="px-4 py-2 text-sm font-bold bg-primary text-white hover:bg-primary-hover rounded-lg transition">Rebook</button>
                        </>
                      )}
                      {booking.status === "Cancelled" && (
                        <button className="px-4 py-2 text-sm font-bold bg-primary text-white hover:bg-primary-hover rounded-lg transition">Book Again</button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
