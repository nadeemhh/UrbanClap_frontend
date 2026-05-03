import Image from "next/image";
import Link from "next/link";

export default function ExpertsPage() {
  const experts = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Master Electrician",
      rating: "4.9",
      jobs: "1,240",
      skills: ["Wiring", "Appliance Repair", "Lighting"],
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1964&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sunita Sharma",
      title: "Senior Salon Specialist",
      rating: "4.8",
      jobs: "850",
      skills: ["Facial", "Waxing", "Hair Styling"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "AC & HVAC Expert",
      rating: "4.7",
      jobs: "2,100",
      skills: ["AC Servicing", "Gas Refill", "Installation"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Priya Singh",
      title: "Deep Cleaning Pro",
      rating: "4.9",
      jobs: "3,400",
      skills: ["Sofa Cleaning", "Kitchen Deep Clean", "Bathroom"],
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      title: "Professional Plumber",
      rating: "4.6",
      jobs: "920",
      skills: ["Pipe Repair", "Fittings", "Water Heater"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Neha Gupta",
      title: "Pest Control Specialist",
      rating: "4.8",
      jobs: "1,100",
      skills: ["Termite Treatment", "Bed Bugs", "General Pest Control"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-primary-light/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-6">Meet Our Verified Experts</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Every professional on our platform goes through a strict background check and skill verification process to ensure you get the best service possible.
          </p>
          
          <div className="max-w-md mx-auto bg-surface rounded-xl shadow-md p-2 flex items-center border border-border">
            <svg className="w-6 h-6 text-text-muted ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search by skill or name..." 
              className="w-full bg-transparent border-none focus:outline-none px-4 text-text-main"
            />
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="border-b border-border bg-surface sticky top-16 z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 custom-scrollbar">
            {["All Experts", "Electricians", "Cleaners", "Plumbers", "AC Technicians", "Salon Experts"].map((cat, i) => (
              <button 
                key={cat} 
                className={`whitespace-nowrap font-medium text-sm transition-colors ${i === 0 ? 'text-primary border-b-2 border-primary pb-1 -mb-[18px]' : 'text-text-muted hover:text-text-main'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={expert.id} className="bg-surface border border-border rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-48 bg-primary-light/30 flex items-end justify-center pb-0">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center text-xs font-bold shadow-sm z-10">
                  <svg className="w-3.5 h-3.5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  {expert.rating}
                </div>
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 p-1.5 rounded-full shadow-sm z-10" title="Verified Professional">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </div>
                <div className="w-32 h-32 relative rounded-t-3xl overflow-hidden border-4 border-surface -mb-1 shadow-md">
                  <Image src={expert.image} alt={expert.name} fill className="object-cover" />
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-text-main mb-1">{expert.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{expert.title}</p>
                
                <div className="flex justify-center gap-6 mb-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-text-main">{expert.jobs}</div>
                    <div className="text-text-muted text-xs">Jobs Done</div>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div className="text-center">
                    <div className="font-bold text-text-main">3 Yrs</div>
                    <div className="text-text-muted text-xs">Experience</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {expert.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-text-muted text-xs px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                <Link href="/services" className="block w-full bg-primary-light/50 hover:bg-primary text-primary hover:text-white font-bold py-3 rounded-xl transition-colors duration-300">
                  View Profile & Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
