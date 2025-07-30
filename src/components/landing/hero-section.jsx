import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MusicVisualizer } from "@/components/ui/music-visualizer";
import { QrCode, Music, Users, Smartphone, Star, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Modern cafe interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Next-Gen Dining Experience</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">CafeFlow</span>
              <br />
              <span className="text-foreground">Smart Dining &</span>
              <br />
              <span className="text-foreground">Entertainment</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Revolutionize your cafe experience with QR-based ordering, music requests, 
              group entertainment, and seamless social dining features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <QrCode className="w-6 h-6" />
                Scan & Order Now
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Music className="w-6 h-6" />
                Watch Demo
              </Button>
            </div>

            {/* Live stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Live Music Queue</span>
              </div>
              <div className="flex items-center gap-2">
                <MusicVisualizer isPlaying className="scale-75" />
                <span className="text-sm text-muted-foreground">3 Songs Playing</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">24 Active Tables</span>
              </div>
            </div>
          </div>

          {/* Hero Cards */}
          <div className="flex-1 max-w-md w-full">
            <div className="space-y-6">
              {/* QR Scanner Card */}
              <Card className="glass p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Table 7</h3>
                    <p className="text-sm text-white/70">Ready to order</p>
                  </div>
                </div>
                <div className="text-sm text-white/60 mb-3">Current Bill</div>
                <div className="text-2xl font-bold text-white mb-4">₹1,247</div>
                <Button variant="cafe" size="sm" className="w-full">
                  Add to Order
                </Button>
              </Card>

              {/* Music Queue Card */}
              <Card className="glass p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">Now Playing</h3>
                    <p className="text-sm text-white/70">Bohemian Rhapsody</p>
                  </div>
                  <MusicVisualizer isPlaying />
                </div>
                <div className="text-sm text-white/60 mb-2">Next in Queue</div>
                <div className="text-sm text-white/80 mb-4">2 songs • Your request #3</div>
                <Button variant="music" size="sm" className="w-full">
                  <Star className="w-4 h-4" />
                  Request Song (50 pts)
                </Button>
              </Card>

              {/* Group Activity Card */}
              <Card className="glass p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-entertainment rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Corporate Party</h3>
                    <p className="text-sm text-white/70">8 members active</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gradient-primary rounded-full border-2 border-card"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/70">+4 more</span>
                </div>
                <Button variant="hero" size="sm" className="w-full">
                  <Smartphone className="w-4 h-4" />
                  Join Group
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};