"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("");
  const [address, setAddress] = useState("");

  const dates = ["Today", "Tomorrow", "Wed, 15 May", "Thu, 16 May"];
  const times = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="bg-surface border-b border-border py-4 px-4 sm:px-6 lg:px-8 shadow-sm sticky top-0 z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/services/1" className="p-2 hover:bg-gray-100 rounded-full transition">
              <svg className="w-5 h-5 text-text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </Link>
            <h1 className="text-xl font-bold text-text-main">Checkout</h1>
          </div>
          <div className="text-sm font-medium text-primary bg-primary-light/50 px-3 py-1 rounded-full">Secure Checkout</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Booking Form */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Step 1: Date & Time */}
            <div className={`bg-surface border ${step >= 1 ? 'border-primary' : 'border-border'} rounded-2xl p-6 shadow-sm animate-fade-in-up delay-100 transition-all duration-300`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h2 className="text-xl font-bold text-text-main">When should the professional arrive?</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-text-muted mb-3">Select Date</h3>
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                  {dates.map((d) => (
                    <button 
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`px-5 py-3 rounded-xl border font-medium whitespace-nowrap transition-all ${selectedDate === d ? 'border-primary bg-primary-light/30 text-primary' : 'border-border bg-surface text-text-main hover:border-primary/50'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-text-muted mb-3">Select Time</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {times.map((t) => (
                    <button 
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-4 py-3 rounded-xl border font-medium transition-all text-sm ${selectedTime === t ? 'border-primary bg-primary-light/30 text-primary' : 'border-border bg-surface text-text-main hover:border-primary/50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              {selectedDate && selectedTime && step === 1 && (
                <button 
                  onClick={() => setStep(2)}
                  className="mt-6 w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-xl transition shadow-md"
                >
                  Continue to Address
                </button>
              )}
            </div>

            {/* Step 2: Address */}
            <div className={`bg-surface border ${step >= 2 ? 'border-primary' : 'border-border'} rounded-2xl p-6 shadow-sm animate-fade-in-up delay-200 transition-all duration-300 opacity-${step >= 2 ? '100' : '50 pointer-events-none'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center font-bold transition-colors`}>2</div>
                <h2 className="text-xl font-bold text-text-main">Service Address</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Full Name</label>
                  <input type="text" className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Complete Address</label>
                  <textarea 
                    rows="3" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" 
                    placeholder="House/Flat No., Building Name, Street..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">City</label>
                    <input type="text" className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" defaultValue="Noida" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Pincode</label>
                    <input type="text" className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" placeholder="201301" />
                  </div>
                </div>
              </div>

              {address.length > 5 && step === 2 && (
                <button 
                  onClick={() => setStep(3)}
                  className="mt-6 w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-xl transition shadow-md"
                >
                  Proceed to Payment
                </button>
              )}
            </div>

            {/* Step 3: Payment */}
            <div className={`bg-surface border ${step >= 3 ? 'border-primary' : 'border-border'} rounded-2xl p-6 shadow-sm animate-fade-in-up delay-300 transition-all duration-300 opacity-${step >= 3 ? '100' : '50 pointer-events-none'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center font-bold transition-colors`}>3</div>
                <h2 className="text-xl font-bold text-text-main">Payment Options</h2>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 border border-primary bg-primary-light/10 rounded-xl cursor-pointer">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked />
                  <div>
                    <div className="font-bold text-text-main">Pay after service</div>
                    <div className="text-sm text-text-muted">Pay via Cash/UPI after the service is completed</div>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 border border-border hover:border-primary/50 rounded-xl cursor-pointer transition">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary focus:ring-primary" />
                  <div>
                    <div className="font-bold text-text-main">Pay Online Now</div>
                    <div className="text-sm text-text-muted">Credit/Debit Card, Netbanking, Wallets</div>
                  </div>
                </label>
              </div>

              {step === 3 && (
                <button className="mt-6 w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-lg">
                  Confirm Booking
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              )}
            </div>

          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6 shadow-xl animate-fade-in-up delay-400">
              <h2 className="text-lg font-bold text-text-main mb-4 pb-4 border-b border-border">Order Summary</h2>
              
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                    alt="Service" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-text-main line-clamp-2">Comprehensive AC Power Service</h3>
                  <div className="text-sm text-text-muted mt-1">1x ₹599</div>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-blue-50 text-blue-800 p-3 rounded-lg mb-6 text-sm flex items-start gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span>Scheduled for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong></span>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Item Total</span>
                  <span className="font-medium">₹599</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Taxes & Fee</span>
                  <span className="font-medium">₹49</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-medium">
                  <span>Discount</span>
                  <span>-₹0</span>
                </div>
                <div className="h-px bg-border my-2"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-text-main">Amount to Pay</span>
                  <span className="text-text-main">₹648</span>
                </div>
              </div>

              <div className="bg-primary-light/20 p-4 rounded-xl border border-primary-light flex gap-3">
                <svg className="w-6 h-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <div className="text-sm">
                  <span className="font-bold text-text-main block mb-1">Pro-Shield Guarantee</span>
                  <span className="text-text-muted leading-tight block">Your service is covered against damages up to ₹10,000.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
