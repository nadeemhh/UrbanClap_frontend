import Image from "next/image";
import Link from "next/link";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-light/30 w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 w-full max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight mb-4">
              Expert home <br /> services, at your <br /> doorstep.
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-md">
              Book reliable professionals for everything from AC repair to salon services in Noida & Delhi NCR.
            </p>

            <SearchBar />

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-text-muted">Popular:</span>
              <span className="px-3 py-1 bg-primary-light/50 text-text-main text-sm rounded-full cursor-pointer hover:bg-primary-light transition">AC Repair</span>
              <span className="px-3 py-1 bg-primary-light/50 text-text-main text-sm rounded-full cursor-pointer hover:bg-primary-light transition">Sofa Cleaning</span>
              <span className="px-3 py-1 bg-primary-light/50 text-text-main text-sm rounded-full cursor-pointer hover:bg-primary-light transition">Home Painting</span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-scale-in delay-200">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Professional home cleaner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-lg text-text-muted font-medium mb-1">What are you looking for?</h2>
            <p className="text-2xl font-bold text-text-main">Explore our most requested service categories.</p>
          </div>
          <Link href="/categories" className="text-primary font-medium flex items-center hover:text-primary-hover transition hidden sm:flex">
            View all services
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <Link href="/services" className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer animate-fade-in-up delay-100">
            <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-text-main mb-1">Salon & Spa</h3>
            <p className="text-sm text-text-muted">Hair, Skin, Massage</p>
          </Link>

          {/* Category 2 */}
          <Link href="/services" className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer animate-fade-in-up delay-200">
            <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-text-main mb-1">Cleaning</h3>
            <p className="text-sm text-text-muted">Sofa, Kitchen, Deep Clean</p>
          </Link>

          {/* Category 3 */}
          <Link href="/services" className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer animate-fade-in-up delay-300">
            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-text-main mb-1">AC Repair</h3>
            <p className="text-sm text-text-muted">Service, Install, Gas Refill</p>
          </Link>

          {/* Category 4 */}
          <Link href="/services" className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer animate-fade-in-up delay-400">
            <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-text-main mb-1">Electrician</h3>
            <p className="text-sm text-text-muted">Repairs, Wiring, Lights</p>
          </Link>
        </div>

        <Link href="/categories" className="text-primary font-medium flex items-center justify-center hover:text-primary-hover transition sm:hidden mt-6">
          View all services
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </Link>
      </section>

      {/* Most Booked Services */}
      <section className="bg-background py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-lg text-text-muted font-medium mb-8">Most Booked Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <Link href="/services/1" className="bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-100 group block">
            <div className="h-48 relative">
              <Image
                src="https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg"
                alt="Deep Cleaning"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium shadow-sm">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                4.8 (12k+)
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-text-main mb-2">Full House Deep Cleaning</h3>
              <p className="text-sm text-text-muted mb-4 line-clamp-2">Complete sanitation including kitchen and bathroom.</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-text-main">₹4,999</span>
                  <span className="text-sm text-text-light line-through">₹6,499</span>
                </div>
                <div className="bg-text-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition text-center">
                  Add to Cart
                </div>
              </div>
            </div>
          </Link>

          {/* Service 2 */}
          <Link href="/services/2" className="bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200 group block">
            <div className="h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                alt="AC Repair"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium shadow-sm">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                4.9 (8k+)
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-text-main mb-2">AC Power Jet Service</h3>
              <p className="text-sm text-text-muted mb-4 line-clamp-2">Intense cleaning for 2x faster cooling & efficiency.</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-text-main">₹599</span>
                  <span className="text-sm text-text-light line-through">₹899</span>
                </div>
                <div className="bg-text-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition text-center">
                  Add to Cart
                </div>
              </div>
            </div>
          </Link>

          {/* Service 3 */}
          <Link href="/services/3" className="bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hidden md:block animate-fade-in-up delay-300 group block">
            <div className="h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                alt="Salon"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium shadow-sm">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                4.7 (15k+)
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-text-main mb-2">Honey Waxing & Facial</h3>
              <p className="text-sm text-text-muted mb-4 line-clamp-2">Professional grooming in the comfort of your home.</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-text-main">₹1,299</span>
                  <span className="text-sm text-text-light line-through">₹1,899</span>
                </div>
                <div className="bg-text-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition text-center">
                  Add to Cart
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-bg-dark-section text-white py-20 px-4 sm:px-6 lg:px-8 mt-10 rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-7xl mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-end items-center mr-10">
          {/* Big Shield Icon Background */}
          <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center animate-fade-in-up">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by 10,000+ <br /> residents in NCR.
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-lg">
              We bring the highest standards of safety and professionalism to every home we touch.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">4.8/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-400">Verified Pros</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">30 Min</div>
                <div className="text-sm text-gray-400">Avg Arrival Time</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-lg italic mb-6">
                "The AC repair was quick and the professional was extremely polite. Best home service I've used in Noida."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="font-bold">Ananya Sharma</div>
                  <div className="text-sm text-gray-400">Sector 15, Noida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
