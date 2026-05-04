"use client";
import React, { useState } from 'react';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    businessName: 'JD Cleaning Services',
    address: '123 Main St, Suite 4B, New York, NY 10001',
    bio: 'Professional cleaning services with over 10 years of experience. We specialize in deep cleaning and move-in/move-out services.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text-main">Provider Profile</h1>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
        <div className="p-6 md:p-8 border-b border-border">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold border-2 border-primary">
              JD
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-main">{profileData.firstName} {profileData.lastName}</h2>
              <p className="text-text-muted">{profileData.businessName}</p>
              <button className="mt-2 px-4 py-1.5 bg-background border border-border text-text-main text-sm font-medium rounded-lg hover:bg-gray-50 transition">
                Change Photo
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main block">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main block">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main block">Email Address</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-main block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-text-main block">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={profileData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-text-main block">Business Address</label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-text-main block">Bio / Description</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-border">
            <button type="button" className="px-6 py-2 border border-border text-text-main font-medium rounded-xl hover:bg-background transition">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition shadow-md">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
