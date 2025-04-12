import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Search, Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to destinations page with search query
      setLocation(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    } else {
      setLocation("/destinations");
    }
  };

  return (
    <section className="relative text-white">
      {/* Golden hour overlay with new image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1614587566028-bdd92ee8c02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Vizag golden hour coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-golden-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-amber-500/30 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-white font-medium">Experience Vizag in Golden Hour</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Discover the <span className="text-amber-300">Golden</span> Beauty of Vizag
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl drop-shadow-sm">
            Explore pristine beaches, scenic hills, and cultural landmarks in
            the Jewel of the East Coast during the magical golden hour.
          </p>

          {/* Search Form with golden accents */}
          <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-1 flex flex-col md:flex-row items-stretch border border-amber-200/30">
            <div className="flex-1 p-3">
              <label
                htmlFor="searchDestination"
                className="block text-xs font-medium text-amber-700 mb-1"
              >
                Where to?
              </label>
              <div className="flex items-center">
                <Search className="text-amber-500 mr-2 h-5 w-5" />
                <Input
                  type="text"
                  id="searchDestination"
                  placeholder="Search destinations in Vizag"
                  className="w-full text-slate-800 focus:outline-none bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:border-l border-amber-200/50 flex-1 p-3">
              <label
                htmlFor="travelDate"
                className="block text-xs font-medium text-amber-700 mb-1"
              >
                When?
              </label>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <CalendarIcon className="text-amber-500 mr-2 h-5 w-5" />
                    <Input
                      id="travelDate"
                      placeholder="Select date"
                      className="w-full text-slate-800 focus:outline-none bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 cursor-pointer"
                      readOnly
                      value={date ? format(date, "PPP") : ""}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      setIsCalendarOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:pl-2 p-3 md:py-3">
              <Button
                type="submit"
                className="w-full h-full golden-gradient text-white font-medium rounded-lg px-6 transition-colors shadow-md hover:shadow-lg"
              >
                Explore
              </Button>
            </div>
          </form>
          
          {/* Floating stats badges */}
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-lg px-5 py-3 flex items-center border border-white/20">
              <div className="bg-white/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-amber-200">15+ Destinations</div>
                <div className="text-xs text-white/70">Explore Vizag</div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-lg px-5 py-3 flex items-center border border-white/20">
              <div className="bg-white/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-amber-200">Golden Hour</div>
                <div className="text-xs text-white/70">Best time to visit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}