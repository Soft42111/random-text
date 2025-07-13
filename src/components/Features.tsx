import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Sparkles, Rocket, Heart, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee.",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Innovative Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and boost productivity.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Grow your business with our scalable platform that adapts to your changing needs.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize your success with dedicated support and customer-centric approach.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Excellence in every detail, from code quality to user experience and beyond.",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the amazing capabilities that make our platform the perfect choice for your next project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">And much more to explore!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;