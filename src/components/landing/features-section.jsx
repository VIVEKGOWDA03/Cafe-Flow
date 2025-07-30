import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  QrCode, 
  Music, 
  Users, 
  CreditCard, 
  Camera, 
  Trophy,
  Smartphone,
  Heart,
  Zap,
  Star
} from "lucide-react";
import musicIcon from "@/assets/music-icon.jpg";
import qrIcon from "@/assets/qr-icon.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Ordering",
      description: "Scan, order, and pay seamlessly from your table",
      gradient: "bg-gradient-secondary",
      image: qrIcon,
      details: ["Instant table recognition", "Real-time bill tracking", "Multiple payment options"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Requests",
      description: "Request songs using credit points with smart queue system",
      gradient: "bg-gradient-primary",
      image: musicIcon,
      details: ["Global music database", "Language-based filtering", "Fair play queue system"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Entertainment",
      description: "Corporate parties, birthdays, and group fun activities",
      gradient: "bg-gradient-entertainment",
      details: ["Collaborative playlists", "Group games & contests", "Photo booth with filters"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Birthday Celebrations",
      description: "Automatic birthday detection with priority song wishes",
      gradient: "bg-gradient-secondary",
      details: ["Personalized birthday songs", "Priority queue placement", "Special animations"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Leaderboards & Rewards",
      description: "Earn points, compete with friends, and win rewards",
      gradient: "bg-gradient-primary",
      details: ["Credit point system", "Achievement badges", "Loyalty programs"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Booth",
      description: "Capture memories with AR filters and instant sharing",
      gradient: "bg-gradient-entertainment",
      details: ["AR filters & effects", "Group photo sessions", "Social media sharing"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Complete Solution</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Everything You Need</span>
            <br />
            <span className="text-foreground">for Modern Dining</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your cafe into an interactive entertainment hub with our comprehensive suite of features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:scale-105 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50"
            >
              {/* Feature Image */}
              {feature.image && (
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{feature.description}</p>

                <div className="space-y-2 mb-6">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 text-primary fill-current" />
                      {detail}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Cafe?</h3>
            <p className="text-white/80 mb-6">
              Join hundreds of restaurants already using CafeFlow to enhance their customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Smartphone className="w-5 h-5" />
                Get Started Now
              </Button>
              <Button variant="glass" size="lg">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};