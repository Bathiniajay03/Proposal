import React, { useState, useEffect, useRef } from 'react';
import { Heart, Stars, Music, ChevronRight, Camera, Sparkles } from 'lucide-react';
import './styles.css';
import love1 from "./assets/love1.jpg";
import love2 from "./assets/love2.jpg";
import loveimg3 from "./assets/loveimg3.png";

// --- Login Screen Component ---
const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'shivvuajju' && password === '030816') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="screen login-screen">
      <h1 className="screen-title">Welcome</h1>
      <p className="screen-subtitle">Please login to continue</p>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="primary-button">Login</button>
      </div>
    </div>
  );
};

// --- Background Floating Hearts Component ---
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 20,
        delay: Math.random() * 10,
        size: 10 + Math.random() * 20,
      }));
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const audioRef = useRef(null);

  // You can replace this URL with your partner's favorite romantic song
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-guitar-background-music-111056.mp3";

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextStep = () => setStep(step + 1);

  return (
    <div className="app-container">
      <FloatingHearts />
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioUrl} loop />

      {/* Content Container */}
      <div className="content-container">
        {!isLoggedIn ? (
          <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <>
            {/* Music Toggle */}
            <button 
              onClick={toggleMusic}
              className="music-toggle"
            >
              <Music className={`music-icon ${isPlaying ? 'playing' : ''}`} />
            </button>

            {step === 0 && <WelcomeScreen onNext={nextStep} />}
            {step === 1 && <MemoryScreen onNext={nextStep} />}
            {step === 2 && <LoveLetterScreen onNext={nextStep} />}
            {step === 3 && <ProposalScreen onNext={nextStep} />}
            {step === 4 && <SuccessScreen />}
          </>
        )}
      </div>
    </div>
  );
}

const WelcomeScreen = ({ onNext }) => (
  <div className="screen welcome-screen">
    <div className="heart-container">
      <Heart className="main-heart" />
    </div>
    <h1 className="screen-title">
      Hy  Shiv Nikosm okati chesa chuduu...
    </h1>
    <p className="screen-subtitle">
      We've built such a beautiful life together, but I have one more surprise for you.
    </p>
    <button 
      onClick={onNext}
      className="primary-button"
    >
      Relive Our Magic
      <ChevronRight className="button-icon" />
    </button>
  </div>
);

const MemoryScreen = ({ onNext }) => (
  <div className="screen memory-screen">
    <h2 className="screen-heading">
      <Camera className="section-icon" />
      Our Beautiful Journey 
    </h2>
    <div className="photo-grid">
      <div className="photo-card">
      <div className="photo-wrapper">
  <img src={love1} alt="romantic" className="photo-image" />
</div>

<div className="photo-wrapper">
  <img src={love2} alt="holding hands" className="photo-image" />
</div>
      </div>
    </div>
    <p className="quote-text">
      "Shivani, every day with you is a dream I never want to wake up from. You've made my world infinitely more beautiful since the day you became mine."
    </p>
    <button 
      onClick={onNext}
      className="secondary-button"
    >
      Enka kavala
    </button>
  </div>
);

const LoveLetterScreen = ({ onNext }) => (
  <div className="screen love-letter-screen">
    <Stars className="stars-icon" />
    <h2 className="screen-title">Why You Are My Everything</h2>
    <ul className="love-list">
      <li className="love-item">
        <Heart className="list-icon" />
        <span>Andukante nuvvante naku chachentha Estam and e kinda chaduvu </span>
      </li>
      <li className="love-item">
        <Heart className="list-icon" />
        <span>Niku kopm akko but danni control chesentha naku ledu but aaa kopm lo nu chupinche prema chaluu and aa kopanni feture control cheseantha naku access estv ani anukuntunna. i hope we are the fighters and lovers and husband and wife etc.elane kalsi vundam jaldi pelli cheskondm shivvu .</span>
      </li>
      <li className="love-item">
        <Heart className="list-icon" />
        <span>And gurthupetko manam chala kastalu edurkonnm alane mundu enka chala vunnay danni face cheddm ni venuka nen vunta so asal bayapadaddu asal taggedele  e madyla adho ni time na time baleka chala godavalu misunderstandings anni set cheddm manchiga vundam ree chittyluu.</span>
      </li>
    </ul>
    <button 
      onClick={onNext}
      className="gradient-button"
    >
      I have one question...
    </button>
  </div>
);

const ProposalScreen = ({ onNext }) => {
  const [noStyle, setNoStyle] = useState({});
  const [yesScale, setYesScale] = useState(1);

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    
    setNoStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'all 0.2s ease-out'
    });
    
    setYesScale(prev => Math.min(prev + 0.2, 2.5)); 
  };

  return (
    <div className="screen proposal-screen">
      <div className="ring-image-container">
       <img 
  src={loveimg3}
  alt="Rings" 
  className="ring-image"
/>
      </div>
      <h1 className="proposal-title">
        Shiv, will you marry me? 💍
      </h1>
      
      <div className="button-group">
        <button 
          onClick={onNext}
          style={{ transform: `scale(${yesScale})` }}
          className="yes-button"
        >
          YES! ❤️
        </button>
        
        <button 
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={noStyle}
          className="no-button"
        >
          No
        </button>
      </div>
    </div>
  );
};

const SuccessScreen = () => {
  return (
    <div className="screen success-screen">
      <Sparkles className="success-sparkles" />
      <h1 className="success-title">
        YAHOOO SHIV 🎉
      </h1>
      <p className="success-message">
     Mari appudu cheskondm pellii im waiting for u mummy jaldi chesko nannu pleseee.
      </p>
      <div className="success-heart-container">
        <Heart className="success-heart" />
      </div>
    </div>
  );
};
