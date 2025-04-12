import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  count: number;
  image: string;
  color: string;
  icon: 'beach' | 'mountain' | 'museum' | 'adventure';
}

export default function CategoryCard({ title, count, image, color, icon }: CategoryCardProps) {
  // Get icon component based on category
  const getIcon = () => {
    switch (icon) {
      case 'beach':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M17 17h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
            <path d="M14 22v-4a2 2 0 0 1 2-2h4"></path>
            <path d="M11 22H9a2 2 0 0 1-2-2v-4.586a2 2 0 0 1 .586-1.414L14.586 7a2 2 0 0 1 2.828 0L17 7.586"></path>
            <path d="M3 22h6"></path>
          </svg>
        );
      case 'mountain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
        );
      case 'museum':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M2 20h20"></path>
            <path d="M4 20V8"></path>
            <path d="M20 20V8"></path>
            <path d="M4 8V4h16v4"></path>
            <path d="M12 4v16"></path>
            <path d="M8 12h8"></path>
          </svg>
        );
      case 'adventure':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m8 14 2.5 2.5L16 10.5"></path>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <Link href={`/destinations?category=${encodeURIComponent(title)}`}>
      <Card className="relative overflow-hidden cursor-pointer group">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/90 transition-colors duration-300"></div>
        </div>
        
        <CardContent className="relative z-10 p-5 flex flex-col items-center text-center h-44 justify-between">
          <div className={`p-2 rounded-full bg-${color} text-white mb-2`}>
            {getIcon()}
          </div>
          
          <div className="mt-auto">
            <h3 className="text-lg font-bold text-white mb-1 drop-shadow-sm">{title}</h3>
            <p className="text-amber-200 text-sm font-medium">
              {count} {count === 1 ? 'Destination' : 'Destinations'}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}