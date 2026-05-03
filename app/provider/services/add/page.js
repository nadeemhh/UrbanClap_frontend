"use client";
import { useState } from "react";
import Link from "next/link";

export default function AddServicePage() {
  const [features, setFeatures] = useState([""]);

  const addFeature = () => setFeatures([...features, ""]);
  const updateFeature = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };
  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/provider" className="p-2 bg-surface hover:bg-gray-100 rounded-full border border-border transition">
          <svg className="w-5 h-5 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-text-main">Add New Service</h1>
          <p className="text-sm text-text-muted mt-1">Fill out the details to list your service on the platform.</p>
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden">
        <form className="p-6 sm:p-8 flex flex-col gap-8">
          
          {/* Basic Info */}
          <div>
            <h2 className="text-lg font-bold text-text-main mb-4 pb-2 border-b border-border">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-main mb-2">Service Title</label>
                <input 
                  type="text" 
                  className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" 
                  placeholder="e.g. Deep Home Cleaning, AC Repair" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Category</label>
                <select className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none bg-transparent">
                  <option value="">Select Category</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="ac_repair">AC Repair</option>
                  <option value="salon">Salon & Spa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Estimated Duration</label>
                <input 
                  type="text" 
                  className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" 
                  placeholder="e.g. 45 mins, 2 hours" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-main mb-2">Service Description</label>
                <textarea 
                  rows="4" 
                  className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none" 
                  placeholder="Describe what the service includes and any terms..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-lg font-bold text-text-main mb-4 pb-2 border-b border-border">Pricing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Base Price (₹)</label>
                <input 
                  type="number" 
                  className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" 
                  placeholder="0.00" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Price Type</label>
                <select className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none bg-transparent">
                  <option value="fixed">Fixed Rate</option>
                  <option value="hourly">Hourly Rate</option>
                  <option value="starting">Starting From</option>
                </select>
              </div>
            </div>
          </div>

          {/* Features / Inclusions */}
          <div>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-border">
              <h2 className="text-lg font-bold text-text-main">Features & Inclusions</h2>
              <button 
                type="button" 
                onClick={addFeature}
                className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Add Feature
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <input 
                      type="text" 
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      className="w-full border border-border rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" 
                      placeholder="e.g. Eco-friendly products used" 
                    />
                  </div>
                  {features.length > 1 && (
                    <button 
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-3 border border-border rounded-xl text-red-500 hover:bg-red-50 hover:border-red-200 transition shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Upload Mock */}
          <div>
            <h2 className="text-lg font-bold text-text-main mb-4 pb-2 border-b border-border">Service Image</h2>
            <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
              <div className="w-16 h-16 bg-primary-light/20 text-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <p className="font-medium text-text-main mb-1">Click to upload an image</p>
              <p className="text-sm text-text-muted">JPG, PNG or WEBP (Max 2MB)</p>
            </div>
          </div>

        </form>

        {/* Footer Actions */}
        <div className="bg-gray-50 p-6 sm:px-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-end items-center">
          <button className="w-full sm:w-auto px-6 py-3 font-medium text-text-main hover:text-text-main/80 transition">
            Save as Draft
          </button>
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 rounded-xl transition shadow-sm">
            Publish Service
          </button>
        </div>

      </div>
    </div>
  );
}
