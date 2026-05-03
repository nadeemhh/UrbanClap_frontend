"use client";
import Image from "next/image";

export default function ProviderHeader({ setIsOpen }) {
  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0">
      <div className="flex items-center">
        <button 
          className="lg:hidden text-text-muted hover:text-text-main mr-4"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <h2 className="text-xl font-bold text-text-main hidden sm:block">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-text-muted hover:bg-gray-100 rounded-full transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-surface rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer p-1 pr-3 hover:bg-gray-100 rounded-full transition">
          <div className="w-8 h-8 relative rounded-full overflow-hidden border border-border">
            <Image 
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1964&auto=format&fit=crop" 
              alt="Provider" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="hidden md:block text-sm">
            <div className="font-bold text-text-main leading-tight">Rajesh Kumar</div>
            <div className="text-text-muted text-xs">Master Electrician</div>
          </div>
          <svg className="w-4 h-4 text-text-muted hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
    </header>
  );
}
