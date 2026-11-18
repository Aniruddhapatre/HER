import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Sparkles, Volume2, VolumeX, Play, Pause, ChevronRight,
  ChevronLeft, X, Mail, MailOpen, Film, Camera, Calendar,
  Compass, Star, Music, BookOpen, HelpCircle, ArrowUp,
  Maximize2, Check, Layers, Scissors, Sun, Moon, CloudRain, Eye
} from 'lucide-react';
import heroPhoto from "./photos/IMG_20261115193455127.JPG";

import coverImage from "./photos/IMG_2835.jpg";
import galleryPhoto1 from "./photos/IMG_2026111519345562.jpg";
import galleryPhoto2 from "./photos/IMG_2187.jpg";
import galleryPhoto3 from "./photos/IMG_1165.jpg";
import galleryPhoto4 from "./photos/IMG_2026111519345526.JPG";
import galleryPhoto5 from "./photos/IMG_3527.jpg";
import galleryPhoto6 from "./photos/IMG_2026111519345543.jpg";
import galleryPhoto7 from "./photos/IMG_2044.jpg";
import galleryPhoto8 from "./photos/IMG_3301.jpg";
import galleryPhoto9 from "./photos/IMG_1508.JPG";
import galleryPhoto10 from "./photos/IMG_2013.jpg";


import video1 from "./videos/IMG_1171.MOV";
import video2 from "./videos/IMG_2241.MOV";
import video3 from "./videos/IMG_2098.MOV";
import video4 from "./videos/Video Project 1.mp4";

/**
 * ============================================================================
 * 1. CENTRALIZED DATA & PERSONALIZATION CONFIG (src/data/siteConfig.js)
 * ============================================================================
 * Edit these placeholders or click the "Customize / Media Guide" button 
 * in the top bar of the live website to preview with your own names and dates!
 */
const INITIAL_SITE_CONFIG = {
  herName: "KESHVI",
  myName: "HONEY",
  birthdayDate: "19 /11",
  issueNumber: "VOL. 01 — ISSUE NO. 24",
  firstMeeting: "2 /MAY /2026",
  specialMemory: "Honestly, I don't think I have just one favourite memory with you. It's all those little moments that might seem ordinary to everyone else, but mean the world to me. The random conversations, the silly laughs, the unexpected hugs, the times we did absolutely nothing and yet I wished the moment would never end. If I had to choose one, it would be the moment I realised that even the simplest days become beautiful when you're in them. That's my favourite memory — and somehow, I'm still making new ones with you.",
  personalMessage: "I love you more than words can express. You are my sunshine, my safe haven, and my greatest adventure. Every day with you is a gift, and I cherish every moment we share. Thank you for being you — for your kindness, your laughter, and your unwavering support. I look forward to a lifetime of memories with you.",
  musicTrackTitle: "clair_de_lune_lofi_edit.mp3",
  musicUrl: "/media/music/background.mp3",

  // PAGE 03: THE GALLERY OF HER (src/data/photos.js)
  photos: [
    {
      id: "photo-01",
      src: galleryPhoto1,
      category: "moments",
      aspect: "portrait",
      rotation: "-2deg",
      date: "sept 20",
      caption: "Golden hour catching your eyelashes just right.",
      note: "The exact second I forgot what I was saying.",
      palette: ["#E9BFC5", "#D8BC91"]
    },
    {
      id: "photo-02",
      src: galleryPhoto2,
      category: "candid",
      aspect: "portrait",
      rotation: "1.5deg",
      date: "Aug 23",
      caption: "Looking at the menu like it's a complex novel.",
      note: "You still ordered the exact same thing as always.",
      palette: ["#C9DFF0", "#755B50"]
    },
    {
      id: "photo-03",
      src: galleryPhoto3,
      category: "outfits",
      aspect: "portrait",
      rotation: "-1deg",
      date: "May 2",
      caption: "That oversized coat + coffee cup combination.",
      note: "Tokyo street style has nothing on you.",
      palette: ["#542B40", "#D8BC91"]
    },
    {
      id: "photo-04",
      src: galleryPhoto4,
      category: "expressions",
      aspect: "portrait",
      rotation: "2.5deg",
      date: "Aug 1",
      caption: "Mid-laugh when you tried not to smile.",
      note: "My absolute favourite sound in the world.",
      palette: ["#DCD4F2", "#B83A4B"]
    },
    {
      id: "photo-05",
      src: galleryPhoto5,
      category: "favorites",
      aspect: "portrait",
      rotation: "-1.5deg",
      date: "Oct 25",
      caption: "Windy afternoon by the water.",
      note: "I keep this one as my lockscreen inside my head.",
      palette: ["#C9DFF0", "#E9BFC5"]
    },
    {
      id: "photo-06",
      src: galleryPhoto6,
      category: "favorites",
      aspect: "portrait",
      rotation: "1deg",
      date: "Aug 22",
      caption: "Sleepy passenger princess mode.",
      note: "Peaceful, soft, and completely unguarded.",
      palette: ["#FFF8F0", "#D8BC91"]
    },
    {
      id: "photo-07",
      src: galleryPhoto7,
      category: "outfits",
      aspect: "portrait",
      rotation: "-2.2deg",
      date: "Aug 17",
      caption: "Dressed up with nowhere urgent to be.",
      note: "Effortless grace in every single frame.",
      palette: ["#B83A4B", "#542B40"]
    },
    {
      id: "photo-08",
      src: galleryPhoto8,
      category: "expressions",
      aspect: "portrait",
      rotation: "1.8deg",
      date: "Oct 17",
      caption: "The 'are you taking a photo of me again?' glare.",
      note: "Yes. Always yes.",
      palette: ["#DCD4F2", "#755B50"]
    }
  ],

  // PAGE 04: OUR LITTLE CINEMA (src/data/videos.js)
  videos: [
    {
      id: "vid-01",
      code: "REEL 01 // 35MM",
      title: "Rainy Window & Warm Matcha",
      category: "replay",
      duration: "00:29",
      date: "[SPECIAL_MEMORY]",
      src: video1,
      caption: "We got caught in the downpour and ducked into that tiny corner café. You were wringing out your sleeves and laughing.",
      moodColor: "#C9DFF0",
      sceneType: "rain"
    },
    {
      id: "vid-02",
      code: "REEL 02 // SUPER 8",
      title: "Midnight Convenience Store Run",
      category: "silly",
      duration: "00:34",
      date: "02:14 AM",
      src: video2,
      caption: "Debating which ice cream flavour is superior at 2 AM in oversized hoodies.",
      moodColor: "#DCD4F2",
      sceneType: "city"
    },
    {
      id: "vid-03",
      code: "REEL 03 // 16MM",
      title: "Sunset From the Train Window",
      category: "adventures",
      duration: "00:27",
      date: "AUTUMN TRIP",
      src: video3,
      caption: "Heading nowhere in particular while sharing one pair of wired earphones.",
      moodColor: "#E9BFC5",
      sceneType: "sunset"
    },
    {
      id: "vid-04",
      code: "REEL 04 // ARCHIVE",
      title: "When You Didn't Know I Was Filming",
      category: "unexpected",
      duration: "00:36",
      date: "SUNDAY MORNING",
      src: video4,
      caption: "Just you humming to yourself while fixing your hair in the mirror.",
      moodColor: "#D8BC91",
      sceneType: "golden"
    }
  ],

  // PAGE 05: THE TIMELINE (src/data/memories.js)
  timeline: [
    {
      id: "tl-01",
      chapter: "CHAPTER 01",
      date: "[28 th march 2026]",
      title: "The Beginning of Everything",
      memory: "We met on Hinge on the 28th of March, and little did I know that one simple match would lead me to one of the most beautiful chapters of my life. Without a doubt, that was one of the best days of my life. ❤️",
      tag: "The Prologue",
      icon: "sparkle"
    },
    {
      id: "tl-02",
      chapter: "CHAPTER 02",
      date: "THE FIRST LONG TALK",
      title: "When Hours Felt Like Minutes",
      memory: "What started as a conversation turned into 6 hours of non-stop talking. Six whole hours of laughter, endless stories, and conversations that made time disappear. Neither of us wanted to say goodnight, because honestly, why would we want to end something that felt so magical? Those six hours became one of my favourite memories and one of the best days of my life. ❤️",
      tag: "Connection",
      icon: "moon"
    },
    {
      id: "tl-03",
      chapter: "CHAPTER 03",
      date: "[SPECIAL_MEMORY]",
      title: "The First Unforgettable Memory",
      memory: "I'll always remember our first six-hour conversation — talking about Seedhe Maut, the concert we were going to, and everything in between. Little did I know that those few hours would become one of my favourite memories. Somehow, every moment with you has turned into a memory I wish I could relive.",
      tag: "Core Memory",
      icon: "heart"
    },
    {
      id: "tl-04",
      chapter: "CHAPTER 04",
      date: "UNSCRIPTED LAUGHTER",
      title: "Our Funniest Moment",
      memory: "I still remember how we laughed endlessly over the craziest things, sometimes for minutes without even catching our breath. And even when we met, it was no different. Laughing until our stomachs hurt over things nobody else in the world would ever understand. Those little moments with you will always be some of my favourite memories. ❤️.",
      tag: "Joy",
      icon: "sun"
    },
    {
      id: "tl-05",
      chapter: "CHAPTER 05",
      date: "A PERFECT ORDINARY DAY",
      title: "A Day I Wish I Could Relive",
      memory: "Nothing dramatic happened, yet everything felt cinematic. From playing Garba together to exploring NMACC, every moment felt like a little scene from my favourite movie. It wasn't about where we were, but about being there with you. ❤️",
      tag: "Nostalgia",
      icon: "film"
    },
    {
      id: "tl-06",
      chapter: "CHAPTER 06",
      date: "[19/11/2026]",
      title: "Today — Celebrating You",
      memory: "Happy Birthday to my favourite person! Another year of you, and I feel so lucky that I get to be a part of your story. I hope this year brings you all the happiness, love, and magic you deserve. I'll always be here cheering for you, making memories with you, and loving you a little more with every passing day. Here's to another year of us, our little universe, and a million more moments together. ❤️",
      tag: "Present Day",
      icon: "star"
    }
  ],

  // PAGE 06: THINGS I NEVER SAY ENOUGH (src/data/letters.js)
  diaryCards: [
  {
    id: "diary-01",
    number: "NOTE 01",
    title: "Things I admire about you",
    preview: "The way you make even the simplest moments feel special...",
    content: "I love how naturally you make me smile. I love the way we can talk about absolutely anything, laugh over the most random things, and never run out of things to say. There's so much about you that I admire, and honestly, I don't think I tell you that enough.",
    stamp: "ADMIRATION",
    color: "#FFF8F0"
  },
  {
    id: "diary-02",
    number: "NOTE 02",
    title: "Things that make you special",
    preview: "One match on Hinge, six hours of talking, and here we are...",
    content: "It's funny how we met on Hinge on 28th March. I still think about those first six hours when we talked about Seedhe Maut, the concert, and a hundred other things. I never imagined that one random match would introduce me to someone who would become this important to me.",
    stamp: "RARITY",
    color: "#FDF2F4"
  },
  {
    id: "diary-03",
    number: "NOTE 03",
    title: "Little things you do that make me smile",
    preview: "All those silly jokes and laughs that never seem to end...",
    content: "The way we start laughing over the most ridiculous things and sometimes can't even stop. Those moments when we're laughing so much that our stomachs hurt are honestly the best. I don't think anyone else would understand half the things we find funny, and that's what makes them ours.",
    stamp: "HABITS",
    color: "#F5F2FA"
  },
  {
    id: "diary-04",
    number: "NOTE 04",
    title: "Why I am grateful for you",
    preview: "For all the little adventures and memories we've made...",
    content: "I'm grateful for every moment we've spent together. From playing Garba to exploring NMACC, and all the little things in between. It doesn't really matter where we go or what we do. I just love having you beside me. These are the kind of memories I know I'll keep coming back to.",
    stamp: "GRATITUDE",
    color: "#F2F7FA"
  },
  {
    id: "diary-05",
    number: "NOTE 05",
    title: "Things I wish you could see about yourself",
    preview: "I wish you could see yourself the way I see you...",
    content: "I wish you could see how special you are to me. I hope you never doubt yourself or forget how much you deserve all the good things in life. You have so much ahead of you, and I genuinely hope you get to do everything you've ever dreamed of. I'll always be rooting for you.",
    stamp: "PERSPECTIVE",
    color: "#FBF7F0"
  },
  {
    id: "diary-06",
    number: "NOTE 06",
    title: "What to remember on difficult days",
    preview: "Even on the not-so-good days, you have me...",
    content: "Not every day is going to be perfect, and that's okay. On days when things don't go your way, I hope you remember that you don't have to figure everything out at once. I'll be here through the good days, the bad days, the silly days, and everything in between. You never have to feel alone in it.",
    stamp: "PROMISE",
    color: "#FFF8F0"
  }
],

  // PAGE 09: OPEN WHEN... (src/data/messages.js)
  openWhenEnvelopes: [
    {
      id: "ow-01",
      label: "Open when you miss me",
      sealColor: "#B83A4B",
      code: "ARCHIVE // 01",
      sticker: "✈️",
      message: "Close your eyes for ten seconds. Remember the weight of my hand holding yours. Distance is just temporary geometry—I'm already counting down the hours until I see your face again.",
      illustrationCaption: "Two coffee cups waiting on a shared table."
    },
    {
      id: "ow-02",
      label: "Open when you are sad",
      sealColor: "#542B40",
      code: "ARCHIVE // 02",
      sticker: "🌧️",
      message: "Take a slow breath in, and let your shoulders drop. Whatever happened today does not define tomorrow. Wrap yourself in a blanket, drink some water, and let me hold the heavy thoughts for a while.",
      illustrationCaption: "Warm light glowing behind a rainy windowpane."
    },
    {
      id: "ow-03",
      label: "Open when you feel low",
      sealColor: "#755B50",
      code: "ARCHIVE // 03",
      sticker: "🌙",
      message: "Even the moon goes through phases where it hides in the dark, and nobody ever accuses the moon of failing. Be gentle with yourself tonight.",
      illustrationCaption: "Crescent moon resting on soft clouds."
    },
    {
      id: "ow-04",
      label: "Open when you need a smile",
      sealColor: "#D8BC91",
      code: "ARCHIVE // 04",
      sticker: "✨",
      message: "Fun fact: Right now, wherever I am, there is a 99.8% statistical probability that I am thinking about how cute you are.",
      illustrationCaption: "Polaroid doodle of two cats holding hands."
    },
    {
      id: "ow-05",
      label: "Open when you are overthinking",
      sealColor: "#B83A4B",
      code: "ARCHIVE // 05",
      sticker: "🌿",
      message: "Pause the mental movie projector. Most of the things your brain is worrying about right now won't matter in a month. Come back to the present moment. We've got this.",
      illustrationCaption: "A quiet garden bench under falling petals."
    },
    {
      id: "ow-06",
      label: "Open when you need a reminder of how special you are",
      sealColor: "#542B40",
      code: "ARCHIVE // 06",
      sticker: "👑",
      message: "Out of 8 billion people on this spinning rock, there is only one you. An entire website was built just to archive a fraction of how extraordinary you are.",
      illustrationCaption: "Museum frame titled 'The Only Original'."
    },
    {
      id: "ow-07",
      label: "Open when you want to laugh",
      sealColor: "#D8BC91",
      code: "ARCHIVE // 07",
      sticker: "💌",
      message: "Remember our most chaotic memory ([SPECIAL_MEMORY])? Nobody else could survive our level of unhinged commentary. Never change.",
      illustrationCaption: "Ticket stub to our favourite chaotic memory."
    }
  ]
};

const PAGES = [
  { id: 1, slug: "entrance", number: "01", title: "The Entrance", subtitle: "A little world, just for you." },
  { id: 2, slug: "cover", number: "02", title: "The Birthday Cover", subtitle: "Today, the world celebrates you." },
  { id: 3, slug: "gallery", number: "03", title: "The Gallery of Her", subtitle: "A million versions of my favourite person." },
  { id: 4, slug: "cinema", number: "04", title: "Our Little Cinema", subtitle: "If our memories were a movie." },
  { id: 5, slug: "timeline", number: "05", title: "The Timeline", subtitle: "Every little moment led me here." },
  { id: 6, slug: "letters", number: "06", title: "Things I Never Say Enough", subtitle: "A few things I want you to know." },
  { id: 7, slug: "fashion", number: "07", title: "The Fashion Muse", subtitle: "If you were an entire fashion collection." },
  { id: 8, slug: "anime", number: "08", title: "Our Anime Universe", subtitle: "In another universe, I'd still find you." },
  { id: 9, slug: "openwhen", number: "09", title: "Open When...", subtitle: "Little letters for different versions of you." },
  { id: 10, slug: "finale", number: "10", title: "The Final Surprise", subtitle: "And if I could wish for one thing..." }
];

/**
 * ============================================================================
 * 2. WEB AUDIO SYNTHESIZER (No external audio file dependency required!)
 * ============================================================================
 * Generates a delicate, dreamy anime music-box melody & gentle paper chimes
 * using the browser's Web Audio API, while also supporting custom MP3 files.
 */
class DreamAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.35;
    this.intervalId = null;
    this.noteIndex = 0;
    // Dreamy pentatonic + major 7th music box progression (Studio Ghibli / Makoto Shinkai vibe)
    this.melody = [
      523.25, 659.25, 783.99, 987.77, 783.99, 659.25,
      587.33, 739.99, 880.00, 1174.66, 880.00, 739.99,
      493.88, 659.25, 783.99, 987.77, 1046.50, 783.99,
      440.00, 523.25, 659.25, 783.99, 659.25, 523.25
    ];
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(freq, duration = 1.8, type = 'sine', gainMult = 1) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const maxGain = Math.max(0.001, this.volume * 0.12 * gainMult);
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(maxGain, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio context restrictions prior to interaction
    }
  }

  playChime() {
    this.playNote(880, 0.7, 'sine', 0.8);
    setTimeout(() => this.playNote(1318.5, 1.1, 'sine', 0.6), 90);
  }

  playPaperRustle() {
    this.playNote(392, 0.35, 'triangle', 0.5);
    setTimeout(() => this.playNote(523.25, 0.5, 'sine', 0.4), 70);
  }

  startMusicBox() {
    if (this.isPlaying) return;
    this.init();
    this.isPlaying = true;
    this.playNote(this.melody[this.noteIndex % this.melody.length], 2.2, 'sine', 1);
    this.intervalId = setInterval(() => {
      if (!this.isPlaying || this.isMuted) return;
      this.noteIndex = (this.noteIndex + 1) % this.melody.length;
      const freq = this.melody[this.noteIndex];
      this.playNote(freq, 2.4, 'sine', 1);
      if (this.noteIndex % 6 === 0) {
        this.playNote(freq / 2, 3.8, 'triangle', 0.6);
      }
    }, 680);
  }

  stopMusicBox() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setVolume(val) {
    this.volume = val;
  }

  setMuted(muted) {
    this.isMuted = muted;
  }
}

const soundEngine = new DreamAudioEngine();

/**
 * ============================================================================
 * 3. ARTISTIC SVG & EDITORIAL PHOTO FALLBACK RENDERER
 * ============================================================================
 * Ensures that even before the user drops their local photos into /public/media/photos,
 * every Polaroid, magazine cover, and film reel renders an extraordinary bespoke
 * editorial illustration without any broken image icons.
 */
const EditorialArtGraphic = ({ id, title, palette = ["#E9BFC5", "#D8BC91"], variant = "portrait", className = "" }) => {
  const [c1, c2] = palette;
  return (
    <div className={`relative overflow-hidden select-none bg-[#F5EBE1] ${className}`}>
      <svg viewBox="0 0 400 520" className="w-full h-full object-cover">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} stopOpacity="0.65" />
            <stop offset="50%" stopColor="#FFF8F0" stopOpacity="0.9" />
            <stop offset="100%" stopColor={c2} stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id={`glow-${id}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background Canvas */}
        <rect width="400" height="520" fill={`url(#grad-${id})`} />
        <circle cx="200" cy="210" r="160" fill={`url(#glow-${id})`} />

        {/* Editorial Arch & Minimalist Line Art */}
        <path
          d="M 80 480 L 80 200 A 120 120 0 0 1 320 200 L 320 480 Z"
          fill="none"
          stroke="#542B40"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <circle cx="265" cy="135" r="36" fill="#B83A4B" fillOpacity="0.16" />
        <circle cx="265" cy="135" r="36" fill="none" stroke="#B83A4B" strokeWidth="0.75" strokeOpacity="0.4" />

        {/* Stylized Silhouette / Botanical Editorial Sketch */}
        <path
          d="M155,390 C160,310 175,265 200,265 C225,265 240,310 245,390"
          fill="none"
          stroke="#542B40"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <circle cx="200" cy="215" r="32" fill="none" stroke="#542B40" strokeWidth="1.5" strokeOpacity="0.45" />
        <path
          d="M120,340 Q200,290 280,330"
          fill="none"
          stroke="#755B50"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />

        {/* Floating Sakura Petals */}
        <path d="M110,130 C120,120 130,130 120,140 C110,135 105,135 110,130 Z" fill="#B83A4B" fillOpacity="0.35" />
        <path d="M290,260 C300,250 310,260 300,270 C290,265 285,265 290,260 Z" fill="#B83A4B" fillOpacity="0.3" />
        <path d="M135,310 C142,302 150,310 142,318 C135,314 132,314 135,310 Z" fill="#542B40" fillOpacity="0.25" />

        {/* Magazine Crop Marks */}
        <path d="M24,40 L24,24 L40,24" fill="none" stroke="#542B40" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M376,40 L376,24 L360,24" fill="none" stroke="#542B40" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M24,480 L24,496 L40,496" fill="none" stroke="#542B40" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M376,480 L376,496 L360,496" fill="none" stroke="#542B40" strokeWidth="1" strokeOpacity="0.4" />

        {/* Minimalist Typography Stamp */}
        <text x="200" y="445" textAnchor="middle" fill="#542B40" fillOpacity="0.55" fontSize="10" fontFamily="monospace" letterSpacing="3">
          {id ? id.toUpperCase() : "ARCHIVE PORTRAIT"}
        </text>
        <text x="200" y="465" textAnchor="middle" fill="#755B50" fillOpacity="0.45" fontSize="9" fontFamily="serif" fontStyle="italic">
          {title || "Replace in /public/media/photos/"}
        </text>
      </svg>
    </div>
  );
};

// Smart Image Component that tries local/custom URL and falls back to EditorialArtGraphic gracefully
const SmartMediaImage = ({ src, customUpload, id, title, palette, className = "" }) => {
  const [imgError, setImgError] = useState(false);
  const activeSrc = customUpload || src;

  if (!activeSrc || imgError || activeSrc.startsWith('/media/')) {
    // If user uploaded a custom dataURL or valid external URL, render <img>; otherwise show bespoke art
    if (customUpload) {
      return (
        <img
          src={customUpload}
          alt={title || id}
          loading="lazy"
          className={`w-full h-full object-cover ${className}`}
        />
      );
    }
    return <EditorialArtGraphic id={id} title={title} palette={palette} className={className} />;
  }

  return (
    <img
      src={activeSrc}
      alt={title || id}
      loading="lazy"
      onError={() => setImgError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

/**
 * ============================================================================
 * 4. GLOBAL AMBIENT DETAILS: FLOATING PETALS, CUSTOM CURSOR & LOADING SCREEN
 * ============================================================================
 */
const FloatingAmbientCanvas = ({ theme = "light", onSecretStarClick }) => {
  const petals = [
    { id: 1, left: "8%", delay: "0s", duration: "16s", size: 14 },
    { id: 2, left: "22%", delay: "3s", duration: "19s", size: 11 },
    { id: 3, left: "38%", delay: "7s", duration: "15s", size: 16 },
    { id: 4, left: "57%", delay: "2s", duration: "21s", size: 12 },
    { id: 5, left: "74%", delay: "5s", duration: "17s", size: 15 },
    { id: 6, left: "89%", delay: "9s", duration: "18s", size: 13 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Subtle Paper Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#542B40 0.75px, transparent 0.75px), radial-gradient(#755B50 0.75px, #FFF8F0 0.75px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px'
        }}
      />

      {/* Drifting Cherry Blossom Petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration
          }}
          className="absolute -top-10 animate-petal-fall opacity-60"
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C7 7 4 12 7 17C9 20 12 22 12 22C12 22 15 20 17 17C20 12 17 7 12 2Z"
              fill={theme === "dark" ? "#DCD4F2" : "#E9BFC5"}
              fillOpacity="0.75"
            />
          </svg>
        </div>
      ))}

      {/* Interactive Hidden Easter-Egg Star */}
      <button
        onClick={onSecretStarClick}
        title="A tiny hidden star..."
        className="pointer-events-auto fixed bottom-24 left-5 md:left-8 z-30 group p-2 opacity-60 hover:opacity-100 transition-all duration-500"
        aria-label="Hidden secret star"
      >
        <Sparkles className="w-4 h-4 text-[#D8BC91] group-hover:text-[#B83A4B] group-hover:scale-125 transition-transform animate-pulse" />
      </button>
    </div>
  );
};

const CustomDesktopCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block transition-transform duration-75 ease-out"
      style={{ transform: `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)` }}
    >
      <div className="w-6 h-6 rounded-full border border-[#B83A4B]/40 flex items-center justify-center bg-[#FFF8F0]/10 backdrop-blur-[1px]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B83A4B]" />
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * 5. GLOBAL NAVIGATION, PROGRESS & FLOATING MUSIC PLAYER
 * ============================================================================
 */
const GlobalNavigation = ({
  currentPage,
  onSelectPage,
  config,
  onOpenCustomizer,
  unlockedEasterEggs
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activePageObj = PAGES.find((p) => p.id === currentPage) || PAGES[0];

  return (
    <>
      {/* Top Editorial Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFF8F0]/85 backdrop-blur-md border-b border-[#542B40]/10 transition-colors">
        {/* Scroll/Page Progress Bar */}
        <div className="h-[2px] w-full bg-[#E9BFC5]/30 overflow-hidden">
          <div
            className="h-full bg-[#B83A4B] transition-all duration-500"
            style={{ width: `${(currentPage / PAGES.length) * 100}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between text-[#542B40]">
          {/* Left: Brand & Issue */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onSelectPage(1)}
              className="font-mono text-xs tracking-[0.2em] uppercase hover:text-[#B83A4B] transition-colors flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#B83A4B]" />
              <span className="font-semibold">THE DREAM ARCHIVE</span>
            </button>
            <span className="hidden md:inline-block text-[#755B50]/40">|</span>
            <span className="hidden md:inline-block font-mono text-[11px] text-[#755B50] tracking-widest">
              FOR {config.herName}
            </span>
          </div>

          {/* Center: Current Chapter Indicator */}
          <div className="hidden lg:flex items-center space-x-3">
            <span className="font-mono text-xs text-[#B83A4B] font-medium">
              PAGE {activePageObj.number} / 10
            </span>
            <span className="text-xs text-[#542B40]/30">—</span>
            <span className="font-serif italic text-sm text-[#542B40]">
              {activePageObj.title}
            </span>
            <span className="text-[11px] text-[#755B50]/70 font-sans">
              ({activePageObj.jp})
            </span>
          </div>

          {/* Right: Quick Controls & Full Index Drawer Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            

            {/* Prev / Next quick buttons */}
            <div className="flex items-center border border-[#542B40]/15 rounded-full bg-white/50 p-0.5">
              <button
                onClick={() => onSelectPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-full hover:bg-[#E9BFC5]/30 disabled:opacity-30 transition"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-mono text-[11px] sm:hidden">
                {activePageObj.number}/10
              </span>
              <button
                onClick={() => onSelectPage(Math.min(10, currentPage + 1))}
                disabled={currentPage === 10}
                className="p-1.5 rounded-full hover:bg-[#E9BFC5]/30 disabled:opacity-30 transition"
                aria-label="Next Page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="px-3 py-1.5 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition-colors font-mono text-xs tracking-wider uppercase flex items-center gap-1.5"
            >
              <span>Index</span>
              <span className="text-[10px] opacity-75">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Chapter Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#542B40]/95 text-[#FFF8F0] backdrop-blur-lg flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#FFF8F0]/15 pb-4">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-[#D8BC91] uppercase">
                A LITTLE UNIVERSE MADE FOR MY BABYGURL
              </p>
              <p className="font-serif italic text-sm text-[#E9BFC5] mt-0.5">
                Editorial Table of Contents — 10 Interactive Chapters
              </p>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full border border-[#FFF8F0]/20 hover:bg-[#FFF8F0]/10 transition"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-8 max-w-5xl mx-auto w-full">
            {PAGES.map((page) => {
              const isActive = page.id === currentPage;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    onSelectPage(page.id);
                    setMenuOpen(false);
                  }}
                  className={`group text-left p-4 rounded-xl border transition-all flex items-center justify-between ${isActive
                    ? "bg-[#FFF8F0] text-[#542B40] border-[#D8BC91]"
                    : "border-[#FFF8F0]/15 hover:border-[#E9BFC5]/60 hover:bg-[#FFF8F0]/5"
                    }`}
                >
                  <div className="flex items-baseline space-x-4">
                    <span className={`font-mono text-sm ${isActive ? "text-[#B83A4B] font-bold" : "text-[#D8BC91]"}`}>
                      {page.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg sm:text-xl tracking-wide">
                          {page.title}
                        </h3>
                        <span className={`text-[11px] ${isActive ? "text-[#755B50]" : "text-[#E9BFC5]/60"}`}>
                          {page.jp}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 ${isActive ? "text-[#755B50]" : "text-[#FFF8F0]/60"}`}>
                        {page.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-[#B83A4B]" : "text-[#D8BC91]"}`} />
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#FFF8F0]/15 pt-4 text-xs font-mono text-[#E9BFC5]/80">
            <span>CURATED BY {config.myName}</span>
            <span>SECRET STARS FOUND: {unlockedEasterEggs} / 3</span>
            <span>BIRTHDAY EDITION • {config.birthdayDate}</span>
          </div>
        </div>
      )}
    </>
  );
};

const FloatingMusicPlayer = ({ isPlaying, isMuted, volume, onTogglePlay, onToggleMute, onVolumeChange, trackTitle }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center">
      <div className="bg-[#FFF8F0]/95 backdrop-blur-md border border-[#542B40]/20 shadow-lg rounded-full px-3 py-2 flex items-center space-x-2.5 text-[#542B40]">
        <button
          onClick={onTogglePlay}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isPlaying ? "bg-[#B83A4B] text-white" : "bg-[#E9BFC5]/50 text-[#542B40] hover:bg-[#E9BFC5]"
            }`}
          aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        {/* Animated Soundbars */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center space-x-2 text-left pr-1"
        >
          <div className="flex items-end space-x-0.5 h-3">
            <span className={`w-0.5 bg-[#B83A4B] rounded-full transition-all ${isPlaying && !isMuted ? "h-3 animate-pulse" : "h-1"}`} />
            <span className={`w-0.5 bg-[#B83A4B] rounded-full transition-all ${isPlaying && !isMuted ? "h-2 animate-bounce" : "h-1.5"}`} />
            <span className={`w-0.5 bg-[#B83A4B] rounded-full transition-all ${isPlaying && !isMuted ? "h-3.5 animate-pulse" : "h-1"}`} />
          </div>
          <div className="hidden sm:block">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#755B50] leading-none">
              {isPlaying ? "Now Playing" : "Soundtrack Paused"}
            </p>
            <p className="font-serif italic text-xs text-[#542B40] truncate max-w-[120px]">
              {trackTitle}
            </p>
          </div>
        </button>

        {expanded && (
          <div className="flex items-center space-x-2 pl-2 border-l border-[#542B40]/15 animate-fadeIn">
            <button
              onClick={onToggleMute}
              className="p-1 hover:text-[#B83A4B] transition"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-[#B83A4B]" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="w-16 accent-[#B83A4B] cursor-pointer h-1"
              aria-label="Volume"
            />
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * 6. THE 10 INTERACTIVE PAGES
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * PAGE 01 — THE ENTRANCE ("A little world, just for you.")
 * --------------------------------------------------------------------------*/
const Page01Entrance = ({ config, customUploads, onEnterUniverse, onToggleMusic, isPlaying }) => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    soundEngine.playPaperRustle();
    setEnvelopeOpen(true);
  };

  return (
    <section className="min-h-screen pt-20 pb-16 px-4 sm:px-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FDF2F4] to-[#DCD4F2]/35">
      {/* Dreamy Sky Clouds & Glowing Orb */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#E9BFC5]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-[8%] w-80 h-80 rounded-full bg-[#C9DFF0]/35 blur-3xl pointer-events-none" />

      {/* Vertical Japanese Editorial Accent */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 text-[#755B50]/50 font-serif text-xs tracking-[0.4em] select-none z-20">
        <span style={{ writingMode: 'vertical-rl' }}>あなたのための小さな宇宙</span>
        <span className="w-px h-16 bg-[#755B50]/30" />
        <span className="font-mono text-[10px]">01</span>
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-20">
        {/* Left Column: Editorial Typography & Envelope Invitation */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/70 border border-[#542B40]/15 text-[#542B40] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B83A4B]" />
            <span>A Little World, Just For You • {config.birthdayDate}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#542B40] leading-[1.12] tracking-tight">
            Somewhere between a thousand moments, my favourite universe became{" "}
            <span className="italic text-[#B83A4B] font-normal underline decoration-[#D8BC91] decoration-1 underline-offset-8">
              you.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#755B50] max-w-xl leading-relaxed">
            I made a little something for the person who makes my world feel different.
          </p>

          <p className="font-handwriting text-2xl text-[#B83A4B] -rotate-1">
            — Happy birthday, {config.herName} ♡
          </p>

          {/* Interactive Invitation Envelope */}
          <div className="pt-2 max-w-lg">
            {!envelopeOpen ? (
              <div className="relative bg-[#FFF8F0] border border-[#D8BC91] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all group">
                {/* Washi Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E9BFC5]/70 rotate-1 border border-white/60 shadow-sm" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#755B50]">
                    PRIVATE INVITATION • SEALED
                  </span>
                  <Mail className="w-5 h-5 text-[#B83A4B]" />
                </div>

                <p className="font-serif italic text-2xl text-[#542B40] mb-6">
                  “To my favourite person, with love.”
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleOpenEnvelope}
                    className="px-6 py-3 rounded-full bg-[#B83A4B] text-[#FFF8F0] font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#542B40] transition-all shadow-md flex items-center gap-2"
                  >
                    <MailOpen className="w-4 h-4" />
                    <span>OPEN INVITATION</span>
                  </button>

                  <button
                    onClick={onToggleMusic}
                    className="px-4 py-3 rounded-full border border-[#542B40]/20 text-[#542B40] hover:bg-white/80 font-mono text-xs tracking-wider flex items-center gap-2 transition"
                  >
                    {isPlaying ? <Volume2 className="w-4 h-4 text-[#B83A4B]" /> : <Music className="w-4 h-4" />}
                    <span>{isPlaying ? "Sound On" : "Play Soundtrack"}</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Opened Letter State */
              <div className="relative bg-white/95 border-2 border-[#D8BC91] rounded-2xl p-6 sm:p-8 shadow-xl animate-fadeIn space-y-4">
                <div className="flex items-center justify-between border-b border-[#542B40]/10 pb-3">
                  <span className="font-mono text-xs text-[#B83A4B] uppercase tracking-widest">
                    FROM: {config.myName} — TO: {config.herName}
                  </span>
                  <Heart className="w-4 h-4 text-[#B83A4B] fill-[#B83A4B]" />
                </div>

                <div className="font-serif text-[#542B40] space-y-3 text-base leading-relaxed">
                  <p className="font-handwriting text-2xl text-[#B83A4B]">
                    Dearest {config.herName},
                  </p>
                  <p>
                    Ordinary gifts never felt quite right for someone who turns everyday moments into cinema. So I built a quiet little archive—ten rooms filled with the way I see you, the memories we’ve kept, and the future I hope we share.
                  </p>
                  <p className="italic text-sm text-[#755B50]">
                    Take your time exploring every corner. Turn the sound on if you’d like.
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onEnterUniverse}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#542B40] hover:bg-[#B83A4B] text-[#FFF8F0] font-mono text-xs tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-3 group"
                  >
                    <span>ENTER MY LITTLE UNIVERSE</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Layered Scrapbook Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 sm:w-80 md:w-96">
            {/* Decorative Back Card */}
            <div className="absolute inset-0 bg-[#E9BFC5]/50 rounded-2xl rotate-3 translate-x-3 translate-y-3 border border-[#542B40]/10" />

            {/* Main Polaroid Editorial Frame */}
            <div className="relative bg-[#FFF8F0] p-4 pb-12 rounded-2xl shadow-xl border border-[#542B40]/15 -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Washi Tape Top Right */}
              <div className="absolute -top-3 right-6 w-20 h-6 bg-[#C9DFF0]/80 rotate-6 z-10 shadow-sm" />

              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#542B40]/10">
                <SmartMediaImage
                  src={heroPhoto}
                  customUpload={customUploads["cover"]}
                  id="HERO PORTRAIT"
                  title={`Featured Muse: ${config.herName}`}
                  palette={["#E9BFC5", "#C9DFF0"]}
                />
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <span className="font-handwriting text-xl text-[#542B40]">
                  The girl who changed everything
                </span>
                <span className="font-mono text-[10px] text-[#B83A4B] border border-[#B83A4B]/40 px-2 py-0.5 rounded">
                  FIG. 01
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 02 — THE BIRTHDAY COVER ("Today, the world celebrates you.")
 * --------------------------------------------------------------------------*/
const Page02BirthdayCover = ({ config, customUploads, onNextPage }) => {
  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FFF8F0] text-[#542B40] relative">
      <div className="max-w-6xl mx-auto">
        {/* Magazine Masthead Header */}
        <div className="border-b-2 border-[#542B40] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#B83A4B] uppercase">
              <span>SPECIAL COLLECTOR’S EDITION</span>
              <span>•</span>
              <span>{config.issueNumber}</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mt-2 text-[#542B40]">
              THE GIRL ISSUE
            </h1>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#755B50] space-y-1">
            <p className="text-[#542B40] font-semibold">CELEBRATING: {config.herName}</p>
            <p>RELEASE DATE: {config.birthdayDate}</p>
            <p>PRICE: PRICELESS // NOT FOR SALE</p>
          </div>
        </div>

        {/* Editorial Cover Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Editorial Captions Column */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="border-l-2 border-[#B83A4B] pl-4 space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#B83A4B] uppercase">
                COVER STORY // 01
              </span>
              <h3 className="font-serif text-2xl italic text-[#542B40]">
                “The girl who makes ordinary days beautiful.”
              </h3>
              <p className="text-xs text-[#755B50] leading-relaxed">
                An intimate study on how a single laugh can recalibrate the entire atmosphere of a room.
              </p>
            </div>

            <div className="border-l-2 border-[#D8BC91] pl-4 space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#755B50] uppercase">
                ARCHIVE // 02
              </span>
              <h3 className="font-serif text-2xl italic text-[#542B40]">
                “A face I could never get tired of seeing.”
              </h3>
              <p className="text-xs text-[#755B50] leading-relaxed">
                Photographed across coffee shops, train windows, and sleepy Sunday mornings.
              </p>
            </div>

            <div className="border-l-2 border-[#E9BFC5] pl-4 space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#755B50] uppercase">
                ANTHOLOGY // 03
              </span>
              <h3 className="font-serif text-2xl italic text-[#542B40]">
                “A collection of moments worth keeping forever.”
              </h3>
              <p className="text-xs text-[#755B50] leading-relaxed">
                Why every season feels softer since {config.firstMeeting}.
              </p>
            </div>

            {/* Handwritten Scrapbook Note */}
            <div className="bg-[#FDF2F4] p-5 rounded-xl border border-[#E9BFC5] relative rotate-1">
              <span className="absolute -top-2.5 right-4 bg-[#B83A4B] text-white font-mono text-[10px] px-2 py-0.5 rounded">
                EDITOR'S NOTE
              </span>
              <p className="font-handwriting text-xl text-[#542B40]">
                “An entire universe dedicated to one extraordinary girl. Happy Birthday, {config.herName}!”
              </p>
            </div>
          </div>

          {/* Center/Right Full-Bleed Portrait Magazine Cover */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#542B40] shadow-2xl bg-[#F5EBE1] aspect-[4/5] sm:aspect-[5/6]">
              <SmartMediaImage
                src={coverImage}
                customUpload={customUploads["cover"]}
                id="THE BIRTHDAY COVER"
                title={`Cover Star: ${config.herName}`}
                palette={["#E9BFC5", "#D8BC91"]}
              />

              {/* Magazine Cover Overlay Typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#542B40]/80 via-transparent to-[#542B40]/20 p-6 sm:p-10 flex flex-col justify-between text-[#FFF8F0]">
                <div className="flex justify-between items-start">
                  <div className="bg-[#FFF8F0]/90 text-[#542B40] px-3 py-1.5 rounded font-mono text-xs tracking-widest uppercase shadow">
                    BIRTHDAY ISSUE • {config.birthdayDate}
                  </div>
                  <div className="hidden sm:block text-right font-serif text-sm tracking-widest">
                    特別編集号<br />
                    <span className="font-mono text-[10px] opacity-80">TOKYO • SEOUL • OUR WORLD</span>
                  </div>
                </div>

                {/* Floating Sticker Badge */}
                <div className="self-end bg-[#B83A4B] text-[#FFF8F0] w-24 h-24 rounded-full flex flex-col items-center justify-center text-center p-2 rotate-12 shadow-lg border-2 border-[#FFF8F0]/60">
                  <Sparkles className="w-4 h-4 mb-0.5" />
                  <span className="font-mono text-[9px] uppercase tracking-wider">100% PURE</span>
                  <span className="font-serif italic text-xs font-bold">Main Character</span>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#E9BFC5]">
                    TODAY, THE WORLD CELEBRATES YOU
                  </p>
                  <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
                    An entire universe dedicated to one extraordinary girl.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Turn-Page Footer */}
        <div className="mt-14 pt-6 border-t border-[#542B40]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#755B50]">
            CONTINUED ON PAGE 03 — THE GALLERY OF HER
          </span>
          <button
            onClick={onNextPage}
            className="px-6 py-3 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition font-mono text-xs tracking-[0.2em] uppercase flex items-center gap-2"
          >
            <span>TURN TO PAGE 03: THE GALLERY</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 03 — THE GALLERY OF HER ("A million versions of my favourite person.")
 * --------------------------------------------------------------------------*/
const Page03Gallery = ({ config, customUploads, onUploadCustomPhoto, onNextPage }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: "all", label: "All Archives (08)" },
    { id: "moments", label: "1. Beautiful Moments" },
    { id: "candid", label: "2. Candid Photographs" },
    { id: "outfits", label: "3. Favourite Outfits" },
    { id: "expressions", label: "4. Funniest Expressions" },
    { id: "favorites", label: "5. Photos I Keep Looking At" }
  ];

  const filteredPhotos = activeFilter === "all"
    ? config.photos
    : config.photos.filter((p) => p.category === activeFilter);

  const handleFileChange = (photoId, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onUploadCustomPhoto(photoId, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FFF8F0] text-[#542B40]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#542B40]/15 pb-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#B83A4B] uppercase">
              PAGE 03 // SCRAPBOOK EXHIBITION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-1">
              The Gallery of Her
            </h1>
            <p className="font-serif italic text-lg text-[#755B50] mt-1">
              “A million versions of my favourite person.”
            </p>
          </div>
          <p className="font-mono text-xs text-[#755B50] mt-3 md:mt-0">
            CLICK ANY POLAROID FOR FULL-SCREEN MEMORY VIEW • UPLOAD READY
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${activeFilter === cat.id
                ? "bg-[#542B40] text-[#FFF8F0] shadow"
                : "bg-white/80 text-[#542B40] border border-[#542B40]/15 hover:border-[#B83A4B]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Scrapbook Polaroid Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              style={{ transform: `rotate(${photo.rotation})` }}
              className="group relative bg-white p-3.5 pb-6 rounded-xl shadow-md hover:shadow-2xl border border-[#542B40]/15 hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Washi Tape Top */}
              <div
                className="w-20 h-5 mx-auto -mt-5 mb-2 opacity-80 shadow-sm"
                style={{ backgroundColor: photo.palette[0] }}
              />

              {/* Image Container */}
              <div
                onClick={() => setSelectedPhoto(photo)}
                className={`cursor-pointer overflow-hidden rounded-lg border border-[#542B40]/10 relative ${photo.aspect === "portrait" ? "aspect-[3/4]" : photo.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square"
                  }`}
              >
                <SmartMediaImage
                  src={photo.src}
                  customUpload={customUploads[photo.id]}
                  id={photo.id}
                  title={photo.caption}
                  palette={photo.palette}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#542B40]/0 group-hover:bg-[#542B40]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition bg-[#FFF8F0]/95 text-[#542B40] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase flex items-center gap-1 shadow">
                    <Maximize2 className="w-3 h-3" /> View Memory
                  </span>
                </div>
              </div>

              {/* Caption & Upload Slot */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#755B50]">
                  <span>{photo.date}</span>
                  <label className="cursor-pointer text-[#B83A4B] hover:underline flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    <span>Replace Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(photo.id, e)}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="font-serif text-sm text-[#542B40] font-medium leading-snug">
                  {photo.caption}
                </p>
                <p className="font-handwriting text-lg text-[#B83A4B] leading-tight">
                  “{photo.note}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Screen Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-[#542B40]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
            <div className="bg-[#FFF8F0] text-[#542B40] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#D8BC91] grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 bg-[#F5EBE1] aspect-[4/5] md:aspect-auto">
                <SmartMediaImage
                  src={selectedPhoto.src}
                  customUpload={customUploads[selectedPhoto.id]}
                  id={selectedPhoto.id}
                  title={selectedPhoto.caption}
                  palette={selectedPhoto.palette}
                />
              </div>
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#B83A4B] uppercase tracking-widest">
                      {selectedPhoto.date} • {selectedPhoto.id}
                    </span>
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="p-1.5 rounded-full hover:bg-[#E9BFC5]/40 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-serif text-2xl text-[#542B40]">
                    {selectedPhoto.caption}
                  </h3>
                  <div className="p-4 rounded-xl bg-[#FDF2F4] border border-[#E9BFC5]">
                    <p className="font-handwriting text-2xl text-[#B83A4B]">
                      “{selectedPhoto.note}”
                    </p>
                  </div>
                  <p className="text-xs text-[#755B50] font-mono">
                    Asset Path: public{selectedPhoto.src}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="mt-6 w-full py-2.5 rounded-full bg-[#542B40] text-[#FFF8F0] font-mono text-xs uppercase tracking-widest hover:bg-[#B83A4B] transition"
                >
                  Close Memory View
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Next Page CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-md"
          >
            <span>CONTINUE TO PAGE 04: OUR LITTLE CINEMA</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 04 — OUR LITTLE CINEMA ("If our memories were a movie.")
 * --------------------------------------------------------------------------*/
const Page04Cinema = ({ config, onNextPage }) => {
  const [activeVideo, setActiveVideo] = useState(config.videos[0]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [customVideoUrl, setCustomVideoUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPlayingClip, setIsPlayingClip] = useState(false);


  useEffect(() => {
    if (!isPlayingClip) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 300);
    return () => clearInterval(timer);
  }, [isPlayingClip]);

  const categories = [
    { id: "all", label: "All Reels" },
    { id: "silly", label: "The Silly Moments" },
    { id: "unexpected", label: "Unexpected Memories" },
    { id: "adventures", label: "Little Adventures" },
    { id: "replay", label: "Moments I Wish I Could Replay" }
  ];

  const filteredVideos = activeCategory === "all"
    ? config.videos
    : config.videos.filter((v) => v.category === activeCategory);

  const videoRef = useRef(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Please select a valid video file.");
      return;
    }

    const videoUrl = URL.createObjectURL(file);

    setCustomVideoUrl(videoUrl);
    setProgress(0);
  };
  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#23161E] text-[#FFF8F0] relative">
      <div className="max-w-6xl mx-auto">
        {/* Independent Film Archive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FFF8F0]/15 pb-6 mb-8">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#D8BC91] uppercase flex items-center gap-2">
              <Film className="w-3.5 h-3.5" /> PAGE 04 // INDEPENDENT FILM ARCHIVE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-1">
              Our Little Cinema
            </h1>
            <p className="font-serif italic text-lg text-[#E9BFC5] mt-1">
              “If our memories were a movie.”
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <label className="cursor-pointer px-4 py-2 rounded-full border border-[#D8BC91]/50 hover:bg-[#D8BC91]/20 text-xs font-mono tracking-wider uppercase transition flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-[#D8BC91]" />
              <span>Load Local MP4</span>
              <input type="file" accept="video/mp4,video/quicktime,.mp4,.mov" onChange={handleVideoUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition ${activeCategory === cat.id
                ? "bg-[#B83A4B] text-white"
                : "bg-[#FFF8F0]/10 text-[#FFF8F0]/80 hover:bg-[#FFF8F0]/20"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Cinema Screen Player */}
        <div className="rounded-2xl overflow-hidden border border-[#FFF8F0]/20 bg-[#140B10] shadow-2xl mb-10">
          {/* Top Film Sprocket Bar */}
          <div className="h-7 bg-[#0E070B] px-4 flex items-center justify-between border-b border-[#FFF8F0]/10 font-mono text-[10px] text-[#D8BC91]">
            <span>{activeVideo.code}</span>
            <span>DIRECTED BY US • {activeVideo.date}</span>
            <span>DURATION {activeVideo.duration}</span>
          </div>

{/* Actual Video Player */}
<div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">

  <video
    key={customVideoUrl || activeVideo.src}
    ref={videoRef}
    src={customVideoUrl || activeVideo.src}
    controls
    playsInline
    preload="metadata"
    className="w-full h-full object-contain"
    onTimeUpdate={(e) => {
      const video = e.currentTarget;

      if (video.duration) {
        setProgress(
          (video.currentTime / video.duration) * 100
        );
      }
    }}
    onEnded={() => setProgress(100)}
    onError={(e) => {
      console.error(
        "Video playback error:",
        e.currentTarget.error
      );
    }}
  >
    Your browser does not support video playback.
  </video>

</div>

          {/* Timeline Scrubber Control */}
          {/* Video Progress */}
<div className="p-4 bg-[#190E14] border-t border-[#FFF8F0]/10">
  <div className="w-full h-1.5 bg-[#FFF8F0]/15 rounded-full overflow-hidden">
    <div
      className="h-full bg-[#B83A4B] transition-all"
      style={{ width: `${progress}%` }}
    />
  </div>

  <p className="text-right text-xs font-mono text-[#E9BFC5] mt-2">
    {Math.round(progress)}% PLAYED
  </p>
</div>
        </div>

        {/* Film-Strip Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredVideos.map((vid) => {
            const isSelected = vid.id === activeVideo.id;
            return (
              <button
                key={vid.id}
               onClick={() => {
  setCustomVideoUrl(null);
  setActiveVideo(vid);
  setProgress(0);
}}
                className={`text-left p-4 rounded-xl border transition-all ${isSelected
                  ? "bg-[#FFF8F0]/15 border-[#D8BC91] shadow-lg"
                  : "bg-[#FFF8F0]/5 border-[#FFF8F0]/10 hover:border-[#E9BFC5]/40"
                  }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#D8BC91] mb-2">
                  <span>{vid.code}</span>
                  <span>{vid.duration}</span>
                </div>
                <h3 className="font-serif text-lg text-[#FFF8F0] mb-1">{vid.title}</h3>
                <p className="text-xs text-[#FFF8F0]/60 line-clamp-2">{vid.caption}</p>
              </button>
            );
          })}
        </div>

        {/* Next Page CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#D8BC91] text-[#23161E] hover:bg-[#E9BFC5] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 font-semibold"
          >
            <span>CONTINUE TO PAGE 05: THE TIMELINE</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 05 — THE TIMELINE ("Every little moment led me here.")
 * --------------------------------------------------------------------------*/
const Page05Timeline = ({ config, onNextPage }) => {
  const [activeMilestone, setActiveMilestone] = useState(config.timeline.length - 1);

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FFF8F0] text-[#542B40]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#B83A4B] uppercase">
            PAGE 05 // CHRONOLOGY OF US
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mt-2">
            Every Little Moment Led Me Here
          </h1>
          <p className="font-serif italic text-lg text-[#755B50] mt-2">
            Click any milestone along the thread to illuminate the memory.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative">
          {/* Center / Left Vertical Illuminated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9BFC5] -translate-x-1/2">
            <div
              className="w-full bg-[#B83A4B] transition-all duration-700"
              style={{ height: `${((activeMilestone + 1) / config.timeline.length) * 100}%` }}
            />
          </div>

          <div className="space-y-12">
            {config.timeline.map((item, idx) => {
              const isLit = idx <= activeMilestone;
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMilestone(idx)}
                  className={`relative flex flex-col md:flex-row items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } cursor-pointer group`}
                >
                  {/* Node Circle */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all ${isLit
                      ? "bg-[#B83A4B] border-[#FFF8F0] text-white scale-110 shadow-md"
                      : "bg-[#FFF8F0] border-[#D8BC91] text-[#755B50]"
                      }`}
                  >
                    <Heart className="w-3.5 h-3.5" />
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className={`p-6 rounded-2xl border transition-all ${isLit
                        ? "bg-white border-[#D8BC91] shadow-lg"
                        : "bg-white/60 border-[#542B40]/10 opacity-75 hover:opacity-100"
                        }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-[#B83A4B] mb-2">
                        <span>{item.chapter} • {item.tag}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#542B40] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#755B50] leading-relaxed">
                        {item.memory}
                      </p>
                      <div className="mt-4 pt-3 border-t border-[#542B40]/10 flex items-center justify-between text-xs font-handwriting text-[#B83A4B]">
                        <span>Memory #0{idx + 1} kept forever</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Page CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-md"
          >
            <span>CONTINUE TO PAGE 06: THINGS I NEVER SAY ENOUGH</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 06 — THINGS I NEVER SAY ENOUGH ("A few things I want you to know.")
 * --------------------------------------------------------------------------*/
const Page06Letters = ({ config, onNextPage }) => {
  const [openCard, setOpenCard] = useState(null);

  const handleOpenCard = (card) => {
    soundEngine.playPaperRustle();
    setOpenCard(card);
  };

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FBF5EC] text-[#542B40]">
      <div className="max-w-6xl mx-auto">
        {/* Diary Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#B83A4B] uppercase">
            PAGE 06 // HANDWRITTEN DIARY ARCHIVE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mt-1">
            Things I Never Say Enough
          </h1>
          <p className="font-handwriting text-2xl text-[#B83A4B] mt-2">
            “A few things I want you to know, written down so you never forget.”
          </p>
        </div>

        {/* Interactive Paper Diary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.diaryCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleOpenCard(card)}
              style={{ backgroundColor: card.color }}
              className="cursor-pointer group p-6 sm:p-8 rounded-2xl border border-[#755B50]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative Corner Stamp */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#755B50] mb-6">
                <span>{card.number}</span>
                <span className="px-2 py-0.5 rounded border border-[#B83A4B]/30 text-[#B83A4B]">
                  {card.stamp}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#542B40] group-hover:text-[#B83A4B] transition-colors mb-3">
                  {card.title}
                </h3>
                <p className="font-handwriting text-xl text-[#755B50] mb-6">
                  “{card.preview}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#542B40]/10 flex items-center justify-between text-xs font-mono text-[#542B40]">
                <span>READ FULL NOTE</span>
                <MailOpen className="w-4 h-4 text-[#B83A4B] group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Opened Diary Note Modal */}
        {openCard && (
          <div className="fixed inset-0 z-50 bg-[#542B40]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[#FFF8F0] max-w-xl w-full rounded-2xl p-8 sm:p-10 border-2 border-[#D8BC91] shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-[#542B40]/15 pb-4">
                <span className="font-mono text-xs text-[#B83A4B] tracking-widest uppercase">
                  {openCard.number} • {openCard.stamp}
                </span>
                <button
                  onClick={() => setOpenCard(null)}
                  className="p-1.5 rounded-full hover:bg-[#E9BFC5]/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-serif text-3xl text-[#542B40]">
                {openCard.title}
              </h3>

              <p className="font-serif text-lg leading-relaxed text-[#542B40] bg-white/80 p-6 rounded-xl border border-[#542B40]/10">
                {openCard.content}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="font-handwriting text-2xl text-[#B83A4B]">
                  Always yours, {config.myName}
                </span>
                <button
                  onClick={() => setOpenCard(null)}
                  className="px-5 py-2 rounded-full bg-[#542B40] text-[#FFF8F0] font-mono text-xs uppercase tracking-widest hover:bg-[#B83A4B]"
                >
                  Fold Note
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Next Page CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-md"
          >
            <span>CONTINUE TO PAGE 07: THE FASHION MUSE</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 07 — THE FASHION MUSE ("If you were an entire fashion collection.")
 * --------------------------------------------------------------------------*/
const Page07FashionMuse = ({ config, customUploads, onNextPage }) => {
  const [selectedSwatch, setSelectedSwatch] = useState(0);

  const colorPaletteCards = [
    {
      name: "Warm Ivory Silk",
      hex: "#FFF8F0",
      pantone: "ARCHIVE 11-0105",
      trait: "Your morning calm & effortless honesty",
      fabric: "100% Mulberry Silk Organza"
    },
    {
      name: "Dusty Rose Cashmere",
      hex: "#E9BFC5",
      pantone: "ARCHIVE 14-1511",
      trait: "The warmth in your cheeks when you're complimented",
      fabric: "Brushed Scottish Cashmere"
    },
    {
      name: "Cherry Velvet",
      hex: "#B83A4B",
      pantone: "ARCHIVE 19-1755",
      trait: "Your boldness, fierce loyalty & main-character energy",
      fabric: "Crushed Couture Velvet"
    },
    {
      name: "Twilight Lavender",
      hex: "#DCD4F2",
      pantone: "ARCHIVE 14-3812",
      trait: "Your dreamy late-night imagination",
      fabric: "Sheer Pleated Tulle"
    },
    {
      name: "Champagne Gold Leaf",
      hex: "#D8BC91",
      pantone: "ARCHIVE 16-1127",
      trait: "How you elevate every room you walk into",
      fabric: "Metallic Jacquard Weave"
    }
  ];

  const silhouettes = [
    {
      look: "LOOK 01 // THE OVERSIZED COAT",
      drape: "Structured Shoulder, Soft Heart",
      metaphor: "Tailored on the outside to take on the world; lined with the softest warmth for the people you love."
    },
    {
      look: "LOOK 02 // FLUID BIAS CUT",
      drape: "Unscripted Grace in Motion",
      metaphor: "Moving through chaotic days with an effortless poise that turns sidewalks into runways."
    },
    {
      look: "LOOK 03 // KNITWEAR ARCHIVE",
      drape: "Comfort as High Art",
      metaphor: "Proof that you look just as breathtaking in a sleepy oversized sweater as you do dressed for a gala."
    }
  ];

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FFF8F0] text-[#542B40]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Atelier Portfolio Header */}
        <div className="border-b-2 border-[#542B40] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#B83A4B] uppercase">
              ATELIER PRESENTATION • NO. 01 — A STUDY OF HER
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight mt-2">
              HER — THE ONLY ORIGINAL
            </h1>
          </div>
          <p className="font-serif italic text-lg text-[#755B50]">
            “If you were an entire couture fashion collection.”
          </p>
        </div>

        {/* Section 1: Lookbook Editorial Grid + Technical Sketch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Editorial Photograph */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#542B40]/20 bg-[#F5EBE1] flex flex-col justify-between">
            <div className="aspect-[3/4]">
              <SmartMediaImage
                src={galleryPhoto9}
                customUpload={customUploads["photo-03"]}
                id="LOOKBOOK 01"
                title={`Muse: ${config.herName}`}
                palette={["#542B40", "#D8BC91"]}
              />
            </div>
            <div className="p-4 bg-white border-t border-[#542B40]/10 flex items-center justify-between font-mono text-xs">
              <span>MUSE: {config.herName}</span>
              <span className="text-[#B83A4B]">HAUTE COUTURE 1/1</span>
            </div>
          </div>

          {/* Fashion Design Croquis Sketch & Moodboard */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#542B40]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#542B40]/10 pb-4">
              <span className="font-mono text-xs tracking-widest uppercase text-[#755B50] flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#B83A4B]" /> THE SILHOUETTE OF HER
              </span>
              <span className="font-mono text-xs text-[#B83A4B]">SPEC SHEET // 07</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-6 items-center">
              {/* Custom SVG Fashion Sketch */}
              <div className="sm:col-span-5 bg-[#FFF8F0] rounded-xl p-4 border border-[#D8BC91]/50">
                <svg viewBox="0 0 200 320" className="w-full h-56">
                  {/* Dressmaker Mannequin & Flowing Gown Lines */}
                  <line x1="100" y1="20" x2="100" y2="300" stroke="#D8BC91" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="100" cy="45" r="14" fill="none" stroke="#542B40" strokeWidth="1.5" />
                  <path d="M80,75 L120,75 L112,135 L88,135 Z" fill="#E9BFC5" fillOpacity="0.4" stroke="#542B40" strokeWidth="1.5" />
                  <path d="M88,135 C65,190 50,250 45,285 L155,285 C150,250 135,190 112,135 Z" fill="#B83A4B" fillOpacity="0.18" stroke="#542B40" strokeWidth="1.5" />
                  <path d="M75,80 Q55,130 65,170" fill="none" stroke="#542B40" strokeWidth="1.2" />
                  <path d="M125,80 Q145,130 135,170" fill="none" stroke="#542B40" strokeWidth="1.2" />
                  <text x="100" y="308" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#755B50">
                    FIG. 07 — DRAPE STUDY
                  </text>
                </svg>
              </div>

              {/* Silhouette Descriptions */}
              <div className="sm:col-span-7 space-y-4">
                {silhouettes.map((s, i) => (
                  <div key={i} className="border-l-2 border-[#B83A4B] pl-4">
                    <p className="font-mono text-[10px] text-[#B83A4B] tracking-widest uppercase">
                      {s.look}
                    </p>
                    <h4 className="font-serif text-lg text-[#542B40] font-medium">
                      {s.drape}
                    </h4>
                    <p className="text-xs text-[#755B50] mt-0.5 leading-relaxed">
                      {s.metaphor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FDF2F4] border border-[#E9BFC5] flex items-center justify-between">
              <span className="font-handwriting text-xl text-[#542B40]">
                “Trends fade every season, but your presence is timeless.”
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B83A4B]">
                1 OF 1
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: THE COLOUR OF YOU */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-[#B83A4B]">
                CHROMATIC ARCHIVE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-1">
                THE COLOUR OF YOU
              </h2>
            </div>
            <p className="text-xs font-mono text-[#755B50]">
              CLICK A SWATCH TO INSPECT FABRIC & PERSONALITY NOTES
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {colorPaletteCards.map((swatch, idx) => (
              <button
                key={swatch.hex}
                onClick={() => setSelectedSwatch(idx)}
                className={`text-left bg-white p-3 rounded-xl border transition-all ${selectedSwatch === idx
                  ? "border-[#542B40] ring-2 ring-[#B83A4B]/30 shadow-lg -translate-y-1"
                  : "border-[#542B40]/15 hover:border-[#542B40]/40"
                  }`}
              >
                <div
                  className="h-24 rounded-lg border border-black/10 mb-3"
                  style={{ backgroundColor: swatch.hex }}
                />
                <p className="font-mono text-[10px] text-[#755B50]">{swatch.pantone}</p>
                <p className="font-serif text-base font-medium text-[#542B40]">{swatch.name}</p>
              </button>
            ))}
          </div>

          {/* Active Swatch Detail Banner */}
          <div className="p-6 rounded-2xl bg-white border border-[#542B40]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl border border-black/15 shrink-0"
                style={{ backgroundColor: colorPaletteCards[selectedSwatch].hex }}
              />
              <div>
                <span className="font-mono text-xs text-[#B83A4B] uppercase">
                  {colorPaletteCards[selectedSwatch].fabric}
                </span>
                <h4 className="font-serif text-2xl text-[#542B40]">
                  {colorPaletteCards[selectedSwatch].trait}
                </h4>
              </div>
            </div>
            <span className="font-mono text-xs text-[#755B50]">
              HEX {colorPaletteCards[selectedSwatch].hex}
            </span>
          </div>
        </div>

        {/* Next Page CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#542B40] text-[#FFF8F0] hover:bg-[#B83A4B] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-md"
          >
            <span>CONTINUE TO PAGE 08: OUR ANIME UNIVERSE</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 08 — OUR ANIME UNIVERSE ("In another universe, I'd still find you.")
 * --------------------------------------------------------------------------*/
const Page08AnimeUniverse = ({ config, customUploads, onNextPage }) => {
  const [activeScene, setActiveScene] = useState(0);

  const scenes = [
  {
    id: 1,
    title: "Scene 01: The Kharghar Meet-Up",
    jp: "The day you came to see me",
    dialogue: "I'll always remember you coming all the way to Kharghar to meet me. Something as simple as spending time together felt so special. And honestly, seeing you walk towards me is a memory I'll keep replaying.",
    skyGradient: "from-[#FFE5EC] via-[#E9BFC5] to-[#C9DFF0]",
    accent: "#B83A4B"
  },
  {
    id: 2,
    title: "Scene 02: Our Little Food Dates",
    jp: "You, me, and something delicious",
    dialogue: "You and your love for dosa, and me just being happy watching you enjoy your food. I think one of my favourite things is going out with you, deciding what to eat, and somehow making even an ordinary food date feel like a whole event. And yes, I'll always let you have the last bite hehe.",
    skyGradient: "from-[#542B40] via-[#B83A4B]/70 to-[#D8BC91]",
    accent: "#D8BC91"
  },
  {
    id: 3,
    title: "Scene 03: Our Cooking Dates",
    jp: "A little kitchen, a lot of memories",
    dialogue: "Cooking together, figuring things out, tasting everything in between, and probably making a bigger mess than necessary. I don't think it matters what we cook. I just love the idea of making something together with you.",
    skyGradient: "from-[#3A1E3D] via-[#B83A4B] to-[#F4A261]",
    accent: "#FFF8F0"
  },
  {
    id: 4,
    title: "Scene 04: Just Another Day With You",
    jp: "My favourite kind of plans",
    dialogue: "From our little dates to random walks and those conversations that somehow never end, I love spending time with you. We don't always need a big plan. Sometimes just being together, laughing at absolutely nothing, is enough to make my day.",
    skyGradient: "from-[#0F1026] via-[#241E4E] to-[#542B40]",
    accent: "#DCD4F2"
  },
  {
    id: 5,
    title: "Scene 05: My Favourite Girl",
    jp: "In every version of my life",
    dialogue: `Out of all the people I could have met, I'm so glad I met you. You're so cute, sometimes without even realising it, and you make my ordinary days so much better. If I could go back to 28th March and do it all over again, I'd still swipe right. Happy Birthday, ${config.herName}. ❤️`,
    skyGradient: "from-[#2A1B3D] via-[#542B40] to-[#E9BFC5]",
    accent: "#D8BC91"
  }
];

  const current = scenes[activeScene];

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#181224] text-[#FFF8F0]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FFF8F0]/15 pb-5">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#DCD4F2] uppercase">
              PAGE 08 // ORIGINAL VISUAL NOVEL ARCHIVE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-1">
              In Another Universe, I’d Still Find You
            </h1>
          </div>
          <p className="font-serif italic text-[#E9BFC5] text-lg mt-2 md:mt-0">
            5 Illustrated Scenes • Click Through the Chapters
          </p>
        </div>

        {/* Visual Novel Widescreen Stage */}
        <div className={`relative rounded-3xl overflow-hidden border-2 border-[#FFF8F0]/20 shadow-2xl aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b ${current.skyGradient} transition-all duration-1000 flex flex-col justify-between p-6 sm:p-10`}>
          {/* Original Illustrated Anime Scenery SVG */}
          <svg viewBox="0 0 800 450" className="absolute inset-0 w-full h-full object-cover pointer-events-none">
            {/* Stars & Glowing Particles */}
            <circle cx="120" cy="70" r="2" fill="#FFF8F0" opacity="0.8" />
            <circle cx="280" cy="50" r="1.5" fill="#FFF8F0" opacity="0.6" />
            <circle cx="640" cy="80" r="2.5" fill="#FFF8F0" opacity="0.9" />
            <circle cx="520" cy="40" r="1.5" fill="#FFF8F0" opacity="0.7" />
            <circle cx="710" cy="140" r="2" fill="#FFF8F0" opacity="0.7" />

            {/* Shooting Star */}
            <line x1="580" y1="50" x2="460" y2="110" stroke="#FFF8F0" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Dreamy Sun / Moon */}
            <circle cx="400" cy="175" r="75" fill="#FFF8F0" fillOpacity="0.22" />

            {/* Distant Mountain / City Silhouette */}
            <path d="M0,360 Q180,290 360,340 T800,320 L800,450 L0,450 Z" fill="#181224" fillOpacity="0.55" />

            {/* Power Lines / Train Station Overhead Wires (Anime Signature Detail) */}
            <line x1="80" y1="180" x2="80" y2="390" stroke="#181224" strokeWidth="4" strokeOpacity="0.5" />
            <line x1="720" y1="200" x2="720" y2="390" stroke="#181224" strokeWidth="4" strokeOpacity="0.5" />
            <path d="M0,210 Q400,260 800,220" fill="none" stroke="#181224" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M0,225 Q400,275 800,235" fill="none" stroke="#181224" strokeWidth="1" strokeOpacity="0.3" />

            {/* Two Original Illustrated Characters Standing Together */}
            <g transform="translate(365, 275)">
              {/* Him Silhouette */}
              <circle cx="20" cy="18" r="11" fill="#181224" />
              <path d="M6,32 L34,32 L38,88 L2,88 Z" fill="#181224" />
              {/* Her Silhouette */}
              <circle cx="54" cy="24" r="10.5" fill="#2A1B3D" />
              <path d="M40,37 L68,37 L74,88 L34,88 Z" fill="#2A1B3D" />
              {/* Glowing Red String of Fate Between Hands */}
              <path d="M35,62 Q42,68 44,62" fill="none" stroke="#B83A4B" strokeWidth="2" />
            </g>

            {/* Foreground Hill */}
            <path d="M0,360 L800,360 L800,450 L0,450 Z" fill="#120D1B" />
          </svg>

          {/* Top Bar: Scene Title & Visual Reference Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="bg-[#181224]/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#FFF8F0]/20">
              <span className="font-mono text-xs text-[#DCD4F2]">{current.title}</span>
              <span className="mx-2 text-[#FFF8F0]/40">•</span>
              <span className="text-xs text-[#E9BFC5]">{current.jp}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-[#181224]/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#FFF8F0]/20 text-xs font-mono">
              <span>{config.myName} & {config.herName}</span>
            </div>
          </div>

          {/* Bottom Visual Novel Dialogue Box */}
          <div className="relative z-10 bg-[#181224]/85 backdrop-blur-md border border-[#DCD4F2]/30 rounded-2xl p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-0.5 rounded bg-[#B83A4B] text-white font-mono text-[10px] tracking-widest uppercase">
                PARALLEL WORLD LOG // 0{current.id}
              </span>
              <span className="font-mono text-xs text-[#DCD4F2]">
                SCENE {activeScene + 1} OF {scenes.length}
              </span>
            </div>

            <p className="font-serif text-lg sm:text-2xl text-[#FFF8F0] leading-relaxed">
              {current.dialogue}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#FFF8F0]/10">
              <div className="flex gap-1.5">
                {scenes.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScene(idx)}
                    className={`h-2 rounded-full transition-all ${activeScene === idx ? "w-8 bg-[#D8BC91]" : "w-2 bg-[#FFF8F0]/30 hover:bg-[#FFF8F0]/60"
                      }`}
                    aria-label={`Scene ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveScene(Math.max(0, activeScene - 1))}
                  disabled={activeScene === 0}
                  className="px-3 py-1.5 rounded-full border border-[#FFF8F0]/20 text-xs font-mono disabled:opacity-30 hover:bg-white/10"
                >
                  Prev Scene
                </button>
                <button
                  onClick={() => setActiveScene((activeScene + 1) % scenes.length)}
                  className="px-4 py-1.5 rounded-full bg-[#D8BC91] text-[#181224] font-mono text-xs font-semibold hover:bg-[#E9BFC5] transition"
                >
                  {activeScene === scenes.length - 1 ? "Replay Journey" : "Next Scene ▸"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Quote Banner */}
        <div className="text-center py-6 px-4 rounded-2xl bg-[#FFF8F0]/5 border border-[#FFF8F0]/10">
          <p className="font-serif italic text-xl sm:text-2xl text-[#E9BFC5]">
            “Different timelines, different worlds, different stories. Somehow, I'd still choose you.”
          </p>
        </div>

        {/* Next Page CTA */}
        <div className="text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#D8BC91] text-[#181224] hover:bg-[#E9BFC5] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 font-semibold"
          >
            <span>CONTINUE TO PAGE 09: OPEN WHEN...</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 09 — OPEN WHEN... ("Little letters for different versions of you.")
 * --------------------------------------------------------------------------*/
const Page09OpenWhen = ({ config, onNextPage }) => {
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);
  const [sfxMuted, setSfxMuted] = useState(false);

  const handleOpenEnvelope = (env) => {
    if (!sfxMuted) soundEngine.playPaperRustle();
    setSelectedEnvelope(env);
  };

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 sm:px-8 bg-[#FFF8F0] text-[#542B40]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#542B40]/15 pb-6 mb-10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#B83A4B] uppercase">
              PAGE 09 // SEALED TIME CAPSULES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-1">
              Open When...
            </h1>
            <p className="font-serif italic text-lg text-[#755B50] mt-1">
              “Little letters for different versions of you.”
            </p>
          </div>
          <button
            onClick={() => setSfxMuted(!sfxMuted)}
            className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-[#542B40]/20 font-mono text-xs flex items-center gap-2 hover:bg-white transition self-start"
          >
            {sfxMuted ? <VolumeX className="w-3.5 h-3.5 text-[#B83A4B]" /> : <Volume2 className="w-3.5 h-3.5 text-[#542B40]" />}
            <span>Paper Sound Effects: {sfxMuted ? "Muted" : "On"}</span>
          </button>
        </div>

        {/* Envelopes Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.openWhenEnvelopes.map((env) => (
            <div
              key={env.id}
              onClick={() => handleOpenEnvelope(env)}
              className="cursor-pointer group bg-[#FBF3E8] rounded-2xl border border-[#D8BC91] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden flex flex-col justify-between min-h-[210px]"
            >
              {/* Envelope Flap Lines */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#755B50]">
                <span>{env.code}</span>
                <span className="text-base">{env.sticker}</span>
              </div>

              <div className="my-6 text-center">
                <p className="font-handwriting text-2xl sm:text-3xl text-[#542B40] group-hover:text-[#B83A4B] transition-colors">
                  “{env.label}”
                </p>
              </div>

              {/* Wax Seal Bottom */}
              <div className="flex items-center justify-between pt-3 border-t border-[#542B40]/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#755B50]">
                  CLICK TO BREAK WAX SEAL
                </span>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: env.sealColor }}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opened Envelope Modal */}
        {selectedEnvelope && (
          <div className="fixed inset-0 z-50 bg-[#542B40]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[#FFF8F0] max-w-xl w-full rounded-2xl p-8 sm:p-10 border-2 border-[#D8BC91] shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#542B40]/15 pb-4">
                <span className="font-mono text-xs text-[#B83A4B] uppercase tracking-widest">
                  {selectedEnvelope.code} • {selectedEnvelope.sticker}
                </span>
                <button
                  onClick={() => setSelectedEnvelope(null)}
                  className="p-1.5 rounded-full hover:bg-[#E9BFC5]/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-handwriting text-3xl sm:text-4xl text-[#542B40]">
                {selectedEnvelope.label}
              </h3>

              <div className="p-6 rounded-xl bg-white border border-[#542B40]/10 space-y-4">
                <p className="font-serif text-lg leading-relaxed text-[#542B40]">
                  {selectedEnvelope.message}
                </p>
                <div className="pt-3 border-t border-[#542B40]/10 flex items-center gap-2 text-xs font-mono text-[#755B50]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8BC91]" />
                  <span>Illustration Note: {selectedEnvelope.illustrationCaption}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-handwriting text-2xl text-[#B83A4B]">
                  With all my love, {config.myName}
                </span>
                <button
                  onClick={() => setSelectedEnvelope(null)}
                  className="px-6 py-2.5 rounded-full bg-[#542B40] text-[#FFF8F0] font-mono text-xs uppercase tracking-widest hover:bg-[#B83A4B] transition"
                >
                  Seal & Return
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Next Page CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onNextPage}
            className="px-7 py-3.5 rounded-full bg-[#B83A4B] text-[#FFF8F0] hover:bg-[#542B40] transition font-mono text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 shadow-lg"
          >
            <span>ENTER PAGE 10: THE FINAL SURPRISE</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------------
 * PAGE 10 — THE FINAL SURPRISE ("And if I could wish for one thing...")
 * --------------------------------------------------------------------------*/
const Page10FinalSurprise = ({ config, customUploads, onRestart }) => {
  const [revealedClimax, setRevealedClimax] = useState(false);

  const handleReveal = () => {
    soundEngine.playChime();
    setRevealedClimax(true);
  };

  return (
    <section className="min-h-screen pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-[#0E0B16] via-[#1D152B] to-[#341C30] text-[#FFF8F0] relative overflow-hidden flex flex-col justify-center">
      {/* Starry Night & Animated Constellation Background */}
      <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-65">
        <g stroke="#D8BC91" strokeWidth="0.6" strokeOpacity="0.4" fill="#FFF8F0">
          <circle cx="150" cy="140" r="2.5" />
          <circle cx="240" cy="110" r="2" />
          <circle cx="320" cy="160" r="3" />
          <circle cx="420" cy="130" r="2" />
          <line x1="150" y1="140" x2="240" y2="110" />
          <line x1="240" y1="110" x2="320" y2="160" />
          <line x1="320" y1="160" x2="420" y2="130" />

          <circle cx="680" cy="120" r="2.5" />
          <circle cx="760" cy="170" r="2" />
          <circle cx="850" cy="130" r="3" />
          <line x1="680" y1="120" x2="760" y2="170" />
          <line x1="760" y1="170" x2="850" y2="130" />
        </g>
      </svg>

      <div className="max-w-4xl mx-auto w-full relative z-20 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8F0]/10 border border-[#D8BC91]/40 font-mono text-xs tracking-[0.25em] text-[#D8BC91] uppercase">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>PAGE 10 // AND IF I COULD WISH FOR ONE THING...</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#FFF8F0] leading-tight">
          HAPPY BIRTHDAY, MY FAVOURITE HUMAN.
        </h1>

        <p className="font-handwriting text-3xl text-[#E9BFC5]">
          For {config.herName}, on {config.birthdayDate}
        </p>

        {/* Personal Letter Box */}
        <div className="bg-[#FFF8F0]/10 backdrop-blur-md border border-[#FFF8F0]/20 rounded-3xl p-6 sm:p-10 text-left space-y-4 max-w-2xl mx-auto shadow-2xl">
          <p className="font-serif text-lg sm:text-xl text-[#FFF8F0]/90 leading-relaxed">
            Every page in this archive is just a small attempt to translate how much light you bring into my life. Thank you for being my favourite conversation, my calmest place, and the person I always look forward to seeing.
          </p>
          <p className="font-serif italic text-base text-[#E9BFC5]">
            {config.personalMessage !== "[PERSONAL_MESSAGE]"
              ? config.personalMessage
              : "May this next chapter of your life bring you every quiet joy and wild dream your heart has ever wished for."}
          </p>
        </div>

        {!revealedClimax ? (
          <div className="pt-4">
            <button
              onClick={handleReveal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B83A4B] to-[#D8BC91] text-[#FFF8F0] font-mono text-xs sm:text-sm tracking-[0.25em] uppercase shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              <span>ONE LAST LITTLE SURPRISE</span>
              <Heart className="w-4 h-4 fill-current" />
            </button>
          </div>
        ) : (
          /* Grand Finale Reveal */
          <div className="mt-10 bg-[#FFF8F0] text-[#542B40] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-[#D8BC91] animate-fadeIn space-y-8">
            <div className="flex justify-center gap-3 text-[#B83A4B]">
              <Heart className="w-5 h-5 fill-current animate-bounce" />
              <Sparkles className="w-5 h-5 text-[#D8BC91]" />
              <Heart className="w-5 h-5 fill-current animate-bounce" />
            </div>

            {/* Large Featured Birthday Photograph */}
            <div className="max-w-md mx-auto bg-white p-4 pb-8 rounded-2xl shadow-xl border border-[#542B40]/15 -rotate-1">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <SmartMediaImage
                  src={galleryPhoto10}
                  customUpload={customUploads["cover"]}
                  id="FINALE PORTRAIT"
                  title={`Happy Birthday, ${config.herName}`}
                  palette={["#E9BFC5", "#D8BC91"]}
                />
              </div>
              <p className="font-handwriting text-2xl text-[#B83A4B] mt-4">
                My favourite universe, forever & always.
              </p>
            </div>

            {/* Final Personal Message */}
            <div className="max-w-2xl mx-auto space-y-4 font-serif text-lg sm:text-xl leading-relaxed text-[#542B40]">
              <p>
                “If I could collect every beautiful thing in this world and put it into one place, it still wouldn't be enough to show you how special you are to me.
              </p>
              <p>
                So here's a little universe I made for you.
              </p>
              <p className="text-[#B83A4B] font-medium">
                Happy birthday, my favourite person.
              </p>
              <p>
                Here's to more memories, more laughter, more adventures, and more versions of us.”
              </p>
            </div>

            <div className="pt-6 border-t border-[#542B40]/15 space-y-2">
              <p className="font-handwriting text-3xl text-[#B83A4B]">
                Made with all my heart, just for you.
              </p>
              <p className="font-mono text-xs tracking-widest uppercase text-[#755B50]">
                — {config.myName} • {config.birthdayDate}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onRestart}
                className="px-6 py-2.5 rounded-full border border-[#542B40]/30 hover:bg-[#542B40] hover:text-[#FFF8F0] transition font-mono text-xs uppercase tracking-widest"
              >
                Revisit From Page 01
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * ============================================================================
 * 7. PERSONALIZATION & MEDIA STRUCTURE DRAWER
 * ============================================================================
 * Allows live editing of [HER_NAME], [MY_NAME], [BIRTHDAY_DATE], etc., and 
 * documents the exact local Vite folder structure requested.
 */
const PersonalizationModal = ({ isOpen, onClose, config, setConfig, customUploads, onUploadCustomPhoto }) => {
  if (!isOpen) return null;

  const handleHeroUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onUploadCustomPhoto("cover", reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#542B40]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FFF8F0] text-[#542B40] max-w-3xl w-full rounded-2xl p-6 sm:p-8 border-2 border-[#D8BC91] shadow-2xl my-8 max-h-[90vh] overflow-y-auto space-y-6">
        <div className="flex items-center justify-between border-b border-[#542B40]/15 pb-4">
          <div>
            <span className="font-mono text-xs text-[#B83A4B] uppercase tracking-widest">
              src/data/siteConfig.js • LIVE EDITOR & MEDIA GUIDE
            </span>
            <h3 className="font-serif text-2xl mt-0.5">
              Personalize Your Universe
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-[#E9BFC5]/40">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Placeholder Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-[#755B50] mb-1">
              Her Name ([HER_NAME])
            </label>
            <input
              type="text"
              value={config.herName}
              onChange={(e) => setConfig({ ...config, herName: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#542B40]/20 bg-white text-sm"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-[#755B50] mb-1">
              Your Name ([MY_NAME])
            </label>
            <input
              type="text"
              value={config.myName}
              onChange={(e) => setConfig({ ...config, myName: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#542B40]/20 bg-white text-sm"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-[#755B50] mb-1">
              Birthday Date ([BIRTHDAY_DATE])
            </label>
            <input
              type="text"
              value={config.birthdayDate}
              onChange={(e) => setConfig({ ...config, birthdayDate: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#542B40]/20 bg-white text-sm"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-[#755B50] mb-1">
              First Meeting ([FIRST_MEETING])
            </label>
            <input
              type="text"
              value={config.firstMeeting}
              onChange={(e) => setConfig({ ...config, firstMeeting: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#542B40]/20 bg-white text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block font-mono text-[10px] uppercase tracking-wider text-[#755B50] mb-1">
              Main Cover & Finale Portrait (public/media/photos/cover.jpg)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleHeroUpload}
              className="w-full text-xs font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:bg-[#B83A4B] file:text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Folder Architecture Documentation */}
        <div className="bg-[#23161E] text-[#FFF8F0] p-5 rounded-xl font-mono text-xs space-y-2 overflow-x-auto">
          <p className="text-[#D8BC91] uppercase tracking-wider">
            Local Vite Project Media Structure:
          </p>
          <pre className="text-[11px] leading-relaxed text-[#E9BFC5]">
            {`public/
  media/
    photos/        -> cover.jpg, photo-01.jpg ... photo-08.jpg
    videos/        -> memory-01.mp4, memory-02.mp4 ...
    music/         -> background.mp3
    illustrations/ -> scene-01.png, scene-02.png ...
    textures/      -> paper.png, grain.png
src/
  data/            -> siteConfig.js, memories.js, photos.js, videos.js, letters.js`}
          </pre>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#542B40] text-[#FFF8F0] font-mono text-xs uppercase tracking-widest hover:bg-[#B83A4B]"
          >
            Save & Return to Experience
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * 8. MAIN APPLICATION CONTROLLER (App.jsx)
 * ============================================================================
 */
export default function App() {
  const [config, setConfig] = useState(INITIAL_SITE_CONFIG);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [customUploads, setCustomUploads] = useState({});
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Audio State
  const [isPlayingClip] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);

  // Easter Egg Secret Star State
  const [secretModalOpen, setSecretModalOpen] = useState(false);
  const [unlockedEasterEggs, setUnlockedEasterEggs] = useState(0);

  // Initial Custom Animated Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard Left/Right Arrow Page Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (customizerOpen || secretModalOpen) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") {
        setCurrentPage((p) => Math.min(10, p + 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        setCurrentPage((p) => Math.max(1, p - 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [customizerOpen, secretModalOpen]);

  const navigateToPage = (pageNum) => {
    soundEngine.playPaperRustle();
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundEngine.stopMusicBox();
      setIsPlaying(false);
    } else {
      soundEngine.startMusicBox();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEngine.setMuted(next);
  };

  const handleVolumeChange = (val) => {
    setVolume(val);
    soundEngine.setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
      soundEngine.setMuted(false);
    }
  };

  const handleUploadCustomPhoto = (id, dataUrl) => {
    setCustomUploads((prev) => ({ ...prev, [id]: dataUrl }));
  };

  const handleSecretStarClick = () => {
    soundEngine.playChime();
    setUnlockedEasterEggs((prev) => Math.min(3, prev + 1));
    setSecretModalOpen(true);
  };

  // Custom Animated Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FFF8F0] text-[#542B40] flex flex-col items-center justify-center p-6 z-50">
        <div className="space-y-4 text-center max-w-md">
          <p className="font-mono text-xs tracking-[0.3em] text-[#B83A4B] uppercase animate-pulse">
            INITIALIZING PRIVATE ARCHIVE // 01 — 10
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl italic">
            A Little Universe Made For MY BABYGURL
          </h1>
          <div className="w-48 h-1 bg-[#E9BFC5]/50 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-[#B83A4B] w-full animate-pulse" />
          </div>
          <p className="font-mono text-[11px] text-[#755B50]">
            Curating photographs, letters & constellations...
          </p>
        </div>
      </div>
    );
  }

  const isDarkThemePage = currentPage === 4 || currentPage === 8 || currentPage === 10;

  return (
    <div className="min-h-screen relative selection:bg-[#E9BFC5] selection:text-[#542B40]">
      {/* Google Fonts Injection & Keyframe Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans { font-family: 'DM Sans', -apple-system, sans-serif; }
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes petalFall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.65; }
          85% { opacity: 0.65; }
          100% { transform: translateY(105vh) translateX(45px) rotate(320deg); opacity: 0; }
        }
        .animate-petal-fall {
          animation-name: petalFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Ambient Floating Petals, Grain & Hidden Star */}
      <FloatingAmbientCanvas
        theme={isDarkThemePage ? "dark" : "light"}
        onSecretStarClick={handleSecretStarClick}
      />

      {/* Custom Desktop Cursor Follower */}
      <CustomDesktopCursor />

      {/* Consistent Global Navigation */}
      <GlobalNavigation
        currentPage={currentPage}
        onSelectPage={navigateToPage}
        config={config}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        unlockedEasterEggs={unlockedEasterEggs}
      />

      {/* Active Page Router */}
      <main key={currentPage} className="animate-fadeIn">
        {currentPage === 1 && (
          <Page01Entrance
            config={config}
            customUploads={customUploads}
            onEnterUniverse={() => {
              if (!isPlaying) handleTogglePlay();
              navigateToPage(2);
            }}
            onToggleMusic={handleTogglePlay}
            isPlaying={isPlaying}
          />
        )}
        {currentPage === 2 && (
          <Page02BirthdayCover
            config={config}
            customUploads={customUploads}
            onNextPage={() => navigateToPage(3)}
          />
        )}
        {currentPage === 3 && (
          <Page03Gallery
            config={config}
            customUploads={customUploads}
            onUploadCustomPhoto={handleUploadCustomPhoto}
            onNextPage={() => navigateToPage(4)}
          />
        )}
        {currentPage === 4 && (
          <Page04Cinema
            config={config}
            onNextPage={() => navigateToPage(5)}
          />
        )}
        {currentPage === 5 && (
          <Page05Timeline
            config={config}
            onNextPage={() => navigateToPage(6)}
          />
        )}
        {currentPage === 6 && (
          <Page06Letters
            config={config}
            onNextPage={() => navigateToPage(7)}
          />
        )}
        {currentPage === 7 && (
          <Page07FashionMuse
            config={config}
            customUploads={customUploads}
            onNextPage={() => navigateToPage(8)}
          />
        )}
        {currentPage === 8 && (
          <Page08AnimeUniverse
            config={config}
            customUploads={customUploads}
            onNextPage={() => navigateToPage(9)}
          />
        )}
        {currentPage === 9 && (
          <Page09OpenWhen
            config={config}
            onNextPage={() => navigateToPage(10)}
          />
        )}
        {currentPage === 10 && (
          <Page10FinalSurprise
            config={config}
            customUploads={customUploads}
            onRestart={() => navigateToPage(1)}
          />
        )}
      </main>

      {/* Persistent Floating Music Player */}
      <FloatingMusicPlayer
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        onTogglePlay={handleTogglePlay}
        onToggleMute={handleToggleMute}
        onVolumeChange={handleVolumeChange}
        trackTitle={config.musicTrackTitle}
      />

      {/* Secret Easter Egg Star Modal */}
      {secretModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#542B40]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FFF8F0] text-[#542B40] max-w-md w-full rounded-2xl p-8 border-2 border-[#D8BC91] shadow-2xl text-center space-y-4">
            <Sparkles className="w-8 h-8 text-[#B83A4B] mx-auto" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B83A4B]">
              HIDDEN STAR DISCOVERED ✨
            </span>
            <h3 className="font-serif text-2xl">
              A Secret Whisper in the Margin
            </h3>
            <p className="font-handwriting text-2xl text-[#755B50]">
              “You noticed the tiniest star in the corner—just like you always notice the little things in life. I love that about you, {config.herName}.”
            </p>
            <button
              onClick={() => setSecretModalOpen(false)}
              className="px-6 py-2 rounded-full bg-[#542B40] text-[#FFF8F0] font-mono text-xs uppercase tracking-widest hover:bg-[#B83A4B]"
            >
              Keep Exploring
            </button>
          </div>
        </div>
      )}

      {/* Personalization & Media Guide Modal */}
      <PersonalizationModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={config}
        setConfig={setConfig}
        customUploads={customUploads}
        onUploadCustomPhoto={handleUploadCustomPhoto}
      />
    </div>
  );
}