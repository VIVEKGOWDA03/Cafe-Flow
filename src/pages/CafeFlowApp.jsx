// CafeFlow - Smart Dining & Entertainment Platform
// Main Application Component in JSX

import React from "react";
import { Navigation } from "../components/landing/navigation.jsx";
import { HeroSection } from "../components/landing/hero-section.jsx";
import { FeaturesSection } from "../components/landing/features-section.jsx";
import { QRScanner } from "../components/demo/qr-scanner.jsx";
import { MusicQueue } from "../components/demo/music-queue.jsx";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  QrCode, 
  Music, 
  Users, 
  Star, 
  Smartphone,
  Github,
  ExternalLink 
} from "lucide-react";

const CafeFlowApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience CafeFlow</span>
              <br />
              <span className="text-foreground">Interactive Demo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try out the core features of our platform with this interactive demonstration
            </p>
          </div>

          <Tabs defaultValue="qr-scanner" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="qr-scanner" className="flex items-center gap-2">
                <QrCode className="w-4 h-4" />
                <span className="hidden sm:inline">QR Scanner</span>
              </TabsTrigger>
              <TabsTrigger value="music-queue" className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                <span className="hidden sm:inline">Music Queue</span>
              </TabsTrigger>
              <TabsTrigger value="group-mode" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Group Mode</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-8">
              <TabsContent value="qr-scanner" className="space-y-4">
                {/* <QRScanner /> */}
              </TabsContent>
              
              <TabsContent value="music-queue" className="space-y-4">
                <MusicQueue />
              </TabsContent>
              
              <TabsContent value="group-mode" className="space-y-4">
                <Card className="glass p-8 text-center max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-entertainment rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Group Entertainment Mode</h3>
                  <p className="text-white/80 mb-8">
                    Create collaborative playlists, play group games, take photos with AR filters, 
                    and celebrate special moments together.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="hero" className="w-full">
                      <Star className="w-4 h-4" />
                      Start Group Session
                    </Button>
                    <Button variant="glass" className="w-full">
                      Join Existing Group
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Documentation & Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Documentation &</span>
              <br />
              <span className="gradient-text">Implementation Guide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to implement CafeFlow in your restaurant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Complete MERN stack implementation guide with API documentation and database schemas.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                View Docs
              </Button>
            </Card>

            <Card className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design System</h3>
              <p className="text-muted-foreground mb-4">
                Complete design system with components, animations, and responsive layouts.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                Design Guide
              </Button>
            </Card>

            <Card className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-entertainment rounded-lg flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Music Integration APIs</h3>
              <p className="text-muted-foreground mb-4">
                Spotify, YouTube Music, and JioSaavn API integration guides and best practices.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                API Guide
              </Button>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="glass p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your CafeFlow?</h3>
              <p className="text-white/80 mb-8">
                Get the complete source code, documentation, and implementation support to launch your own cafe entertainment platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Github className="w-5 h-5" />
                  Get Source Code
                </Button>
                <Button variant="glass" size="lg">
                  <Smartphone className="w-5 h-5" />
                  Schedule Demo Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold gradient-text">CafeFlow</h4>
                <p className="text-sm text-muted-foreground">Smart Dining & Entertainment</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Built with React, JSX, Tailwind CSS & Love
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                © 2024 CafeFlow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CafeFlowApp;