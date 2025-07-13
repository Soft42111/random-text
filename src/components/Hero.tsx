import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/60 to-primary/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full animate-spin duration-[20s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-medium">Welcome to the Future</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Amazing</span>
            <br />
            <span className="text-white">Experiences</span>
            <br />
            <span className="gradient-text">Await</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
            Discover a world of innovation where creativity meets technology. 
            Build something extraordinary with our cutting-edge solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-600">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto font-semibold"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto font-semibold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-1000">
          {[
            { number: "100K+", label: "Happy Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;