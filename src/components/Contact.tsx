import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your amazing journey? We'd love to hear from you and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" className="transition-smooth focus:shadow-card" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="transition-smooth focus:shadow-card" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="transition-smooth focus:shadow-card" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help you?" className="transition-smooth focus:shadow-card" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us more about your project..." 
                  rows={5}
                  className="transition-smooth focus:shadow-card resize-none"
                />
              </div>
              <Button variant="hero" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're here to help you succeed. Whether you have questions about our services, 
                need technical support, or want to discuss a partnership opportunity, 
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "hello@amazing.com",
                  description: "Drop us a line anytime"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                  description: "Mon-Fri from 8am to 5pm"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "123 Innovation Street",
                  description: "San Francisco, CA 94102"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index}
                    className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-primary font-medium">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Proof */}
            <Card className="shadow-card border-0 bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Response Time</h4>
                <p className="text-2xl font-bold mb-1">&lt; 2 hours</p>
                <p className="text-white/90 text-sm">Average response time during business hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;