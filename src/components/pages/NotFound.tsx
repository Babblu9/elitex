import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-display font-bold text-primary/20">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg">
            <a href="/">
              <Home size={18} />
              Go Home
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">
              <ArrowLeft size={18} />
              Contact Support
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
