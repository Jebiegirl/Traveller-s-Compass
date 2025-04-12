import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Destination } from "@shared/schema";
import { Heart } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { user } = useAuth();
  
  // Check if destination is in user's favorites
  const { data: favoriteData } = useQuery({
    queryKey: [
      `/api/favorites/${destination.id}`,
    ],
    enabled: !!user, // Only run query if user is logged in
  });
  
  const isFavorite = favoriteData?.isFavorite || false;
  
  // Add to favorites mutation
  const addToFavorites = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/favorites", {
        destinationId: destination.id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/favorites/${destination.id}`],
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/favorites"],
      });
    },
  });
  
  // Remove from favorites mutation
  const removeFromFavorites = useMutation({
    mutationFn: async () => {
      await apiRequest(
        "DELETE",
        `/api/favorites/${destination.id}`,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/favorites/${destination.id}`],
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/favorites"],
      });
    },
  });
  
  const toggleFavorite = () => {
    if (!user) {
      // Redirect to auth page if not logged in
      window.location.href = "/auth";
      return;
    }
    
    if (isFavorite) {
      removeFromFavorites.mutate();
    } else {
      addToFavorites.mutate();
    }
  };
  
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="text-xs font-medium mb-1">{destination.location}</div>
          <h3 className="text-lg font-bold">{destination.name}</h3>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="flex items-center space-x-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{destination.rating}</span>
            </div>
            <div className="text-sm text-slate-500">{destination.category}</div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-amber-100 text-slate-500 hover:text-amber-600"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className="h-5 w-5" 
              fill={isFavorite ? "currentColor" : "none"} 
            />
          </Button>
        </div>
        
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {destination.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-slate-500">
            <span className="font-medium">{destination.distance}</span> away
          </div>
          
          <Link href={`/destination/${destination.id}`}>
            <Button 
              variant="outline" 
              size="sm"
              className="border-amber-500 text-amber-700 hover:bg-amber-50"
            >
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}