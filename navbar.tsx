import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X, LogOut, User, Heart, Info, MapPin, Compass } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  
  const navLinks = [
    { href: "/", label: "Home", icon: Compass },
    { href: "/destinations", label: "Destinations", icon: MapPin },
    { href: "/bucket-list", label: "Bucket List", icon: Heart, protected: true },
    { href: "/about", label: "About", icon: Info },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="golden-gradient p-1.5 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-800">Travellers Compass</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.protected && !user) return null;
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location === link.href 
                      ? "text-amber-600" 
                      : "text-slate-600 hover:text-amber-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          {/* User Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full p-0 h-8 w-8 overflow-hidden" aria-label="User menu">
                    <Avatar>
                      <AvatarFallback className="bg-amber-100 text-amber-600">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-sm">
                    <User className="h-4 w-4 mr-2" />
                    <span>Signed in as <strong>{user.username}</strong></span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/bucket-list" className="flex items-center cursor-pointer">
                      <Heart className="h-4 w-4 mr-2" />
                      My Bucket List
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-600" />
              ) : (
                <Menu className="h-6 w-6 text-slate-600" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-slate-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.protected && !user) return null;
              
              const Icon = link.icon;
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`flex items-center py-2 px-3 rounded-md transition-colors ${
                    location === link.href 
                      ? "bg-amber-100 text-amber-600" 
                      : "text-slate-600 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {link.label}
                </Link>
              );
            })}
            
            {user ? (
              <div className="border-t border-slate-200 pt-4 mt-2">
                <div className="flex items-center px-3 py-2 text-sm">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-amber-100 text-amber-600">
                      {user.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-slate-600">
                    Signed in as <strong>{user.username}</strong>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-600 mt-2 py-2 px-3" 
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link 
                href="/auth" 
                className="block mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full golden-gradient text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}