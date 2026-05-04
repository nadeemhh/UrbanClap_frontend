"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProviderSidebar from "../components/ProviderSidebar";
import ProviderHeader from "../components/ProviderHeader";

export default function ProviderLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('providerToken');
      
      if (!token) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
            method: 'POST',
            credentials: 'include'
          });
          
          if (res.ok) {
            const data = await res.json();
            localStorage.setItem('providerToken', data.accessToken);
            setIsAuthenticated(true);
          } else {
            router.push('/provider-login');
          }
        } catch (error) {
          router.push('/provider-login');
        }
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <ProviderSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <ProviderHeader setIsOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
