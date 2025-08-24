import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize2, SkipBack, SkipForward, Download } from 'lucide-react';

const MediaPlayer = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showVolumeControl, setShowVolumeControl] = useState(false);


  const mediaItems = {
    videos: [
      {
        title: "Finding Your Purpose",
        description: "A deep dive into discovering your life's calling",
        duration: "25:30",
        views: "1.2K",
        thumbnail: "/api/placeholder/640/360",
        date: "2 days ago"
      },
      {
        title: "Relationship Mastery",
        description: "Keys to building lasting connections",
        duration: "18:45",
        views: "856",
        thumbnail: "/api/placeholder/640/360",
        date: "1 week ago"
      }
    ],
    audio: [
      {
        title: "Morning Motivation",
        description: "Start your day with purpose",
        duration: "15:30",
        plays: "2.3K",
        thumbnail: "/api/placeholder/120/120",
        date: "3 days ago"
      },
      {
        title: "Mindfulness Meditation",
        description: "Guided meditation for inner peace",
        duration: "20:15",
        plays: "1.8K",
        thumbnail: "/api/placeholder/120/120",
        date: "5 days ago"
      }
    ]
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const AudioPlayer = ({ audio }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Thumbnail */}
        <img
          src={audio.thumbnail}
          alt={audio.title}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
        />

        {/* Audio Content */}
        <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex item from overflowing */}
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 truncate">{audio.title}</h3>
          <p className="text-gray-600 mb-3 text-sm sm:text-base line-clamp-2">{audio.description}</p>

          {/* Audio Player */}
          <div className="space-y-3">
            {/* Progress Bar */}
            <div className="relative">
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="absolute h-1 bg-blue-600 rounded-full"
                  style={{ width: `${(currentTime / 300) * 100}%` }}
                />
              </div>
            </div>

            {/* Mobile Controls - Two Rows */}
            <div className="flex flex-col gap-3 sm:hidden">
              {/* Top Row - Main Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="text-gray-500">
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button 
                    className="bg-blue-600 p-2 rounded-full text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button className="text-gray-500">
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {formatTime(currentTime)} / {audio.duration}
                </span>
              </div>

              {/* Bottom Row - Volume & Download */}
              <div className="flex items-center justify-between">
                <div className="relative">
                  <button 
                    onClick={() => setShowVolumeControl(!showVolumeControl)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Volume2 className="w-4 h-4 text-gray-500" />
                  </button>
                  {showVolumeControl && (
                    <div className="absolute bottom-full left-0 mb-2 p-2 bg-white shadow-lg rounded-lg">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-24"
                      />
                    </div>
                  )}
                </div>
                <button className="text-blue-600">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop Controls - Single Row */}
            <div className="hidden sm:flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <SkipForward className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                  {formatTime(currentTime)} / {audio.duration}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-gray-500" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-20"
                  />
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Inspirational Content</h1>
          <p className="text-xl text-gray-600">Transform your life through our curated media collection</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {['videos', 'audio'].map((tab) => (
               <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 sm:px-8 py-3 rounded-full transition-all ${
                 activeTab === tab 
                   ? 'bg-blue-600 text-white shadow-md' 
                   : 'text-gray-600 hover:text-gray-900'
               }`}
             >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {activeTab === 'videos' ? (
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Player */}
                <div className="relative group">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/90 p-4 rounded-full transform hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-blue-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white/90 p-2 rounded-lg">
                      <Maximize2 className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 px-2 py-1 rounded text-sm text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ): (
          <div className="space-y-6">
            {mediaItems.audio.map((audio, index) => (
              <AudioPlayer key={index} audio={audio} />
            ))}
          </div>
        )} 

       
      </div>
    </div>
  );
};

export default MediaPlayer;