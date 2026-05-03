import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailsPage({ params }) {
  // In a real app, we would fetch data based on params.id
  const service = {
    id: params?.id || 1,
    title: "Comprehensive AC Power Service",
    rating: "4.8",
    reviews: "12,453",
    verified: true,
    description: "Our comprehensive AC power service ensures your air conditioner runs at peak efficiency. It includes deep jet cleaning of both indoor and outdoor units, antimicrobial filter treatment, and a complete gas and drainage check. Perfect for pre-summer maintenance or resolving low cooling issues.",
    features: [
      "Deep jet cleaning for indoor/outdoor",
      "Antimicrobial filter treatment",
      "Gas level & drainage check",
      "Pre & Post cooling report",
      "30-day service warranty",
      "Use of eco-friendly chemicals"
    ],
    price: "₹599",
    originalPrice: "₹999",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-primary transition">AC Servicing</Link>
          <span className="mx-2">/</span>
          <span className="text-text-main font-medium truncate">{service.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Hero Image */}
            <div className="w-full h-[300px] sm:h-[400px] relative rounded-3xl overflow-hidden shadow-sm animate-scale-in">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Title & Meta */}
            <div className="animate-fade-in-up delay-100">
              <div className="flex items-center gap-3 mb-3">
                {service.verified && (
                  <span className="bg-primary-light/50 text-primary text-xs font-bold px-2 py-1 rounded flex items-center shrink-0">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Pro-Verified
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-4">{service.title}</h1>
              
              <div className="flex items-center gap-6 pb-6 border-b border-border">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="font-bold text-text-main mr-1">{service.rating}</span>
                  <span className="text-text-muted underline decoration-dotted underline-offset-2 cursor-pointer">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-text-muted">
                  <svg className="w-5 h-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up delay-200">
              <h2 className="text-xl font-bold text-text-main mb-4">About the service</h2>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm animate-fade-in-up delay-300">
              <h2 className="text-xl font-bold text-text-main mb-6">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-text-main">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="bg-blue-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fade-in-up delay-400">
              <div className="bg-blue-100 p-3 rounded-full shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1 text-center sm:text-left">Safety First Approach</h3>
                <p className="text-blue-800/80 text-sm text-center sm:text-left">All our professionals follow strict hygiene protocols, including wearing masks, gloves, and sanitizing tools before and after the service.</p>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar / Checkout Widget */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6 shadow-xl animate-fade-in-up delay-500 hover:-translate-y-1 transition-all duration-300">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-main">{service.price}</h3>
                <p className="text-text-light text-sm line-through mb-1">{service.originalPrice}</p>
                <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                  Save {parseInt(service.originalPrice.replace('₹', '')) - parseInt(service.price.replace('₹', ''))}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Service charge</span>
                  <span className="text-text-main font-medium">{service.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Taxes & Fee</span>
                  <span className="text-text-main font-medium">₹49</span>
                </div>
                <div className="h-px bg-border my-2"></div>
                <div className="flex items-center justify-between font-bold text-lg">
                  <span className="text-text-main">Total</span>
                  <span className="text-text-main">₹648</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/book" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition shadow-md text-center block">
                  Book Service Now
                </Link>
                <button className="w-full bg-primary-light hover:bg-primary-light/80 text-primary font-bold py-4 rounded-xl transition">
                  Add to Cart
                </button>
              </div>
              
              <p className="text-center text-xs text-text-light mt-4">
                You won't be charged until the service is complete.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
