import Link from "next/link";
import Image from "next/image";

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Salon & Spa", description: "Hair, Skin, Massage", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "orange", link: "/services" },
    { id: 2, name: "Cleaning", description: "Sofa, Kitchen, Deep Clean", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", color: "purple", link: "/services" },
    { id: 3, name: "AC Repair", description: "Service, Install, Gas Refill", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "blue", link: "/services" },
    { id: 4, name: "Electrician", description: "Repairs, Wiring, Lights", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", color: "red", link: "/services" },
    { id: 5, name: "Plumber", description: "Leaks, Pipes, Fittings", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "teal", link: "/services" },
    { id: 6, name: "Carpentry", description: "Furniture, Doors, Repair", icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z", color: "amber", link: "/services" },
    { id: 7, name: "Home Painting", description: "Interior, Exterior, Texture", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", color: "pink", link: "/services" },
    { id: 8, name: "Pest Control", description: "Termites, Bedbugs, Roaches", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2 12h2 M20 12h2 M12 2v2 M12 20v2 M6.343 6.343l1.414 1.414 M16.243 16.243l1.414 1.414 M6.343 17.657l1.414-1.414 M16.243 7.757l1.414-1.414", color: "green", link: "/services" },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'orange': return 'bg-orange-50 text-orange-500';
      case 'purple': return 'bg-purple-50 text-purple-500';
      case 'blue': return 'bg-blue-50 text-blue-500';
      case 'red': return 'bg-red-50 text-red-500';
      case 'teal': return 'bg-teal-50 text-teal-500';
      case 'amber': return 'bg-amber-50 text-amber-500';
      case 'pink': return 'bg-pink-50 text-pink-500';
      case 'green': return 'bg-green-50 text-green-500';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-light/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">All Service Categories</h1>
          <p className="text-lg text-text-muted max-w-2xl">
            Browse our wide range of professional services designed to make your life easier. From regular maintenance to emergency repairs, we have you covered.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} href={category.link} className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer h-full animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
              <div className={`${getColorClasses(category.color)} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon}></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2">{category.name}</h3>
              <p className="text-sm text-text-muted mt-auto">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden animate-scale-in delay-200">
          <div className="absolute -right-20 -top-20 opacity-10">
            <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pro-Shield Guarantee</h2>
            <p className="text-primary-light mb-6 text-lg">
              Every service is backed by our ₹10,000 insurance coverage. We stand by the quality of our professionals.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition">
              Learn More
            </button>
          </div>
          
          <div className="relative z-10 bg-white/20 p-6 rounded-2xl backdrop-blur-sm flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary font-bold text-2xl">
              10k+
            </div>
            <div>
              <div className="font-bold text-lg">Happy Customers</div>
              <div className="text-primary-light">Across 20+ cities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
