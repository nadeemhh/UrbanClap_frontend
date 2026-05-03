import Image from "next/image";
import Link from "next/link";

export default function ServicesListingPage() {
  const services = [
    {
      id: 1,
      title: "Comprehensive AC Power Service",
      rating: "4.8",
      verified: true,
      features: [
        "Deep jet cleaning for indoor/outdoor",
        "Antimicrobial filter treatment",
        "Gas level & drainage check",
        "Pre & Post cooling report"
      ],
      price: "₹599",
      priceType: "Starts at",
      duration: "60 mins",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Precision Gas Leak Fix & Refill",
      rating: "4.9",
      verified: true,
      features: [
        "Nitrogen pressure leak testing",
        "Eco-friendly refrigerant refill",
        "90-day warranty on gas refill",
        "Copper coil brazing included"
      ],
      price: "₹2,499",
      priceType: "Flat rate",
      duration: "90 mins",
      image: "https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg"
    },
    {
      id: 3,
      title: "Advanced Wiring & PCB Repair",
      rating: "4.7",
      verified: true,
      features: [
        "Component level PCB diagnostics",
        "Original spare parts only",
        "Full electrical safety audit",
        "Same-day repair resolution"
      ],
      price: "₹899",
      priceType: "Inspection fee",
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">

        {/* Promotional Hero Banner */}
        <div className="bg-bg-dark-section rounded-3xl overflow-hidden relative mb-8 h-[240px] flex items-center shadow-lg animate-scale-in">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1620023473722-e300185e78ec?q=80&w=2070&auto=format&fit=crop"
              alt="AC Servicing Background"
              fill
              className="object-cover opacity-30 mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 p-8 md:p-12 max-w-2xl text-white">
            <div className="inline-block bg-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Limited Time Offer
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Cooling Fest: Flat 20% Off on AC Servicing
            </h1>
            <p className="text-gray-300 mb-6 max-w-xl">
              Expert technicians at your doorstep. Guaranteed cooling in 45 minutes or free service.
            </p>
            <Link href="/book" className="bg-white text-text-main hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition shadow-md inline-block text-center">
              Book Service Now
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 animate-fade-in-up delay-100">
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-text-main mb-6">Service Type</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-5 h-5 rounded border-2 border-primary bg-primary peer-checked:bg-primary transition"></div>
                    <svg className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-100 peer-checked:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-text-main font-medium group-hover:text-primary transition">AC Repair</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition"></div>
                    <svg className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-text-muted group-hover:text-text-main transition">Gas Refill</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition"></div>
                    <svg className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-text-muted group-hover:text-text-main transition">Service & Clean</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition"></div>
                    <svg className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-text-muted group-hover:text-text-main transition">Installation</span>
                </label>
              </div>
            </div>

            <div className="bg-[#2A1E0E] rounded-2xl p-6 text-amber-50 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <h3 className="font-bold text-lg text-amber-500">Pro-Shield</h3>
              </div>
              <p className="text-sm text-amber-200/80 mb-4 leading-relaxed">
                Up to ₹10,000 insurance coverage for all AC services booked today.
              </p>
              <button className="text-amber-500 text-sm font-bold uppercase tracking-wider hover:text-amber-400 transition underline underline-offset-4 decoration-amber-500/30 hover:decoration-amber-400">
                Learn More
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 animate-fade-in-up delay-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-text-main">Available Services</h2>
              <span className="text-text-muted text-sm">{services.length} Services found</span>
            </div>

            <div className="flex flex-col gap-6">
              {services.map((service, index) => (
                <Link key={service.id} href={`/services/${service.id}`} className="bg-surface border border-border rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in-up group block" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                  {/* Service Image */}
                  <div className="w-full sm:w-48 h-48 sm:h-auto relative rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center text-xs font-bold shadow-sm">
                      <svg className="w-3.5 h-3.5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      {service.rating}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition">{service.title}</h3>
                      {service.verified && (
                        <span className="bg-primary-light/50 text-primary text-xs font-bold px-2 py-1 rounded flex items-center shrink-0">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          Verified
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-sm text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <div className="font-bold text-xl text-text-main">{service.price}</div>
                        <div className="text-xs text-text-light flex items-center">
                          {service.priceType} <span className="mx-1">•</span> {service.duration}
                        </div>
                      </div>
                      <div className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-8 rounded-lg transition shadow-sm text-center">
                        Add
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
