import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export default function BucketListPrompt() {
  const { user } = useAuth();
  
  if (user) {
    return null; // Don't show prompt for logged in users
  }

  return (
    <section className="py-16 sunset-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-600/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-xl"></div>
      
      {/* Sun rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[50vh] golden-gradient opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-700 text-sm font-medium mb-6">
            Experience the Magic of Vizag
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="golden-text">Create Your Golden Hour</span> Bucket List
          </h2>
          
          <p className="text-slate-700 text-lg mb-10 max-w-2xl mx-auto">
            Sign up to save your favorite destinations, track your visits, and get 
            personalized travel recommendations for capturing Vizag's most magical moments.
          </p>
          
          <div className="flex flex-col items-center">
            <Link href="/auth">
              <Button className="inline-flex items-center golden-gradient text-white font-medium rounded-lg px-6 py-3 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2 h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Create Your Account
              </Button>
            </Link>
            
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-amber-600 font-bold text-xl">8+</div>
                <div className="text-sm text-slate-600">Beautiful Beaches</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-amber-600 font-bold text-xl">15+</div>
                <div className="text-sm text-slate-600">Scenic Spots</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-amber-600 font-bold text-xl">5+</div>
                <div className="text-sm text-slate-600">Heritage Sites</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}