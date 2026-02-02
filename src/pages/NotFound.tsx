import { Link } from "react-router-dom";
import { ArrowLeft, FileQuestion } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";


const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileQuestion className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-4">
              404
            </h1>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Page Not Found
            </h2>
            
            <p className="text-muted-foreground mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>

            <Link to="/">
              <Button size="lg" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;