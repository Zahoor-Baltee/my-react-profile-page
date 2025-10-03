import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const handleDownloadCV = () => {
    // Create a sample CV download - in production, replace with actual CV file
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Add your actual CV file to public folder
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Full Stack Developer | React Specialist | UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly web
            applications. With expertise in modern web technologies and a keen eye for
            design, I bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="gradient-primary text-white shadow-elegant hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Message Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
