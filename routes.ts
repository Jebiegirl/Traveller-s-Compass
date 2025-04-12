import { Express } from "express";
import { Server, createServer } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);
  
  // Get all destinations
  app.get("/api/destinations", async (_req, res) => {
    const destinations = await storage.getDestinations();
    res.json(destinations);
  });
  
  // Get destination by ID
  app.get("/api/destinations/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send("Invalid destination ID");
    }
    
    const destination = await storage.getDestinationById(id);
    if (!destination) {
      return res.status(404).send("Destination not found");
    }
    
    res.json(destination);
  });
  
  // Get destinations by category
  app.get("/api/categories/:category", async (req, res) => {
    const { category } = req.params;
    const destinations = await storage.getDestinationsByCategory(category);
    res.json(destinations);
  });
  
  // Get user's favorite destinations
  app.get("/api/favorites", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Authentication required");
    }
    
    const favorites = await storage.getFavoritesByUserId(req.user!.id);
    res.json(favorites);
  });
  
  // Add a destination to favorites
  app.post("/api/favorites", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Authentication required");
    }
    
    const { destinationId } = req.body;
    if (!destinationId) {
      return res.status(400).send("Destination ID is required");
    }
    
    const destination = await storage.getDestinationById(destinationId);
    if (!destination) {
      return res.status(404).send("Destination not found");
    }
    
    const favorite = await storage.addFavorite({
      userId: req.user!.id,
      destinationId
    });
    
    res.status(201).json(favorite);
  });
  
  // Remove a destination from favorites
  app.delete("/api/favorites/:destinationId", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Authentication required");
    }
    
    const destinationId = parseInt(req.params.destinationId);
    if (isNaN(destinationId)) {
      return res.status(400).send("Invalid destination ID");
    }
    
    const removed = await storage.removeFavorite(req.user!.id, destinationId);
    if (!removed) {
      return res.status(404).send("Favorite not found");
    }
    
    res.status(204).end();
  });
  
  // Check if a destination is in user's favorites
  app.get("/api/favorites/:destinationId", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Authentication required");
    }
    
    const destinationId = parseInt(req.params.destinationId);
    if (isNaN(destinationId)) {
      return res.status(400).send("Invalid destination ID");
    }
    
    const isFavorite = await storage.isFavorite(req.user!.id, destinationId);
    res.json({ isFavorite });
  });

  const httpServer = createServer(app);
  return httpServer;
}