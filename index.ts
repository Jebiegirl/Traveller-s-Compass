import express, { Request, Response, NextFunction } from "express";
import { log, setupVite, serveStatic } from "./vite";
import { registerRoutes } from "./routes";

async function createServer() {
  const app = express();
  const port = parseInt(process.env.PORT || "5000");
  
  app.use(express.json());
  
  // Routes
  const server = await registerRoutes(app);
  
  // Error handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    log(`Error: ${err.message}`, "express");
    console.error(err);
    res.status(500).json({
      message: err.message || "Something went wrong",
    });
  });
  
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    await setupVite(app, server);
  }
  
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`, "express");
  });
}

createServer();