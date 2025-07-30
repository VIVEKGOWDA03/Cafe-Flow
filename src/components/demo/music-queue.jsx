import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MusicVisualizer } from "@/components/ui/music-visualizer";
import { 
  Music, 
  Search, 
  Play, 
  Clock, 
  Star, 
  Heart,
  SkipForward,
  Volume2 
} from "lucide-react";

export const MusicQueue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const nowPlaying = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    requestedBy: "Arjun",
    timeLeft: "2:15",
    language: "English"
  };

  const queueSongs = [
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      requestedBy: "Priya",
      language: "English",
      credits: 50,
      priority: false
    },
    {
      id: 2,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      requestedBy: "Rahul",
      language: "Hindi",
      credits: 30,
      priority: false
    },
    {
      id: 3,
      title: "Happy Birthday Song",
      artist: "Custom",
      requestedBy: "System",
      language: "English",
      credits: 0,
      priority: true,
      isBirthday: true,
      birthdayName: "Sarah"
    },
    {
      id: 4,
      title: "Vande Mataram",
      artist: "A.R. Rahman",
      requestedBy: "Amit",
      language: "Hindi",
      credits: 40,
      priority: false
    }
  ];

  const popularSongs = [
    { title: "Blinding Lights", artist: "The Weeknd", language: "English", credits: 45 },
    { title: "Kesariya", artist: "Arijit Singh", language: "Hindi", credits: 35 },
    { title: "As It Was", artist: "Harry Styles", language: "English", credits: 50 },
    { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", language: "Hindi", credits: 30 }
  ];

  const languages = ['All', 'English', 'Hindi', 'Tamil', 'Telugu', 'Punjabi'];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Now Playing */}
      <Card className="glass p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Music className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Volume2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/60">NOW PLAYING</span>
            </div>
            <h3 className="text-xl font-bold text-white">{nowPlaying.title}</h3>
            <p className="text-white/80">{nowPlaying.artist}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-white/60">Requested by {nowPlaying.requestedBy}</span>
              <Badge variant="outline" className="text-primary border-primary">
                {nowPlaying.language}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white mb-2">{nowPlaying.timeLeft}</div>
            <MusicVisualizer isPlaying />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            <Heart className="w-4 h-4" />
            Like
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            <SkipForward className="w-4 h-4" />
            Skip Vote
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Queue */}
        <Card className="glass p-6">
          <h3 className="text-xl font-bold text-white mb-6">Queue ({queueSongs.length} songs)</h3>
          
          <div className="space-y-4">
            {queueSongs.map((song, index) => (
              <div 
                key={song.id} 
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  song.priority 
                    ? 'bg-secondary/20 border border-secondary/30' 
                    : 'bg-card/20 hover:bg-card/30'
                }`}
              >
                <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center text-sm text-white">
                  {song.priority ? <Star className="w-4 h-4 text-secondary fill-current" /> : index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">{song.title}</h4>
                    {song.isBirthday && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        🎂 {song.birthdayName}
                      </Badge>
                    )}
                    {song.priority && !song.isBirthday && (
                      <Badge variant="outline" className="text-primary border-primary">
                        Priority
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-white/60">{song.artist}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-white/50">by {song.requestedBy}</span>
                    <Badge variant="outline" className="text-xs">
                      {song.language}
                    </Badge>
                    {song.credits > 0 && (
                      <span className="text-xs text-primary">{song.credits} pts</span>
                    )}
                  </div>
                </div>
                
                <Clock className="w-4 h-4 text-white/40" />
              </div>
            ))}
          </div>
        </Card>

        {/* Song Search & Request */}
        <Card className="glass p-6">
          <h3 className="text-xl font-bold text-white mb-6">Request a Song</h3>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for songs, artists..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>

          {/* Language Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {languages.map((lang) => (
              <Button
                key={lang}
                variant={selectedLanguage === lang.toLowerCase() ? "secondary" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(lang.toLowerCase())}
                className={
                  selectedLanguage === lang.toLowerCase()
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              >
                {lang}
              </Button>
            ))}
          </div>

          {/* Popular Songs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Popular Right Now</h4>
            <div className="space-y-3">
              {popularSongs.map((song, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/20 hover:bg-card/30 transition-all">
                  <div>
                    <h5 className="font-medium text-white">{song.title}</h5>
                    <p className="text-sm text-white/60">{song.artist}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {song.language}
                      </Badge>
                      <span className="text-xs text-primary">{song.credits} pts</span>
                    </div>
                  </div>
                  <Button variant="music" size="sm">
                    <Play className="w-4 h-4" />
                    Request
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Credits: 150 pts</span>
            </div>
            <p className="text-xs text-white/60">
              Earn more credits by ordering food and drinks!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};