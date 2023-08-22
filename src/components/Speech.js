import { useState, useEffect } from 'react';

const Speech = ({ content }) => {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  const toggleSpeech = () => {
    if (!playing) {
      playSpeech();
    } else {
      togglePause();
    }
  };

  const playSpeech = () => {
    const speech = new SpeechSynthesisUtterance(content);
    speech.onstart = () => setPlaying(true);
    speech.onend = () => {
      setPlaying(false);
      setStopped(true);
    };
    if (paused) {
      speech.rate = 1; // Reset rate in case it was paused
      setPaused(false);
    }
    speechSynthesis.speak(speech);
    setStopped(false);
  };

  const togglePause = () => {
    if (paused) {
      resumeSpeech();
    } else {
      pauseSpeech();
    }
  };

  const pauseSpeech = () => {
    speechSynthesis.pause();
    setPaused(true);
  };

  const resumeSpeech = () => {
    speechSynthesis.resume();
    setPaused(false);
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
    setStopped(true);
  };

  return (
    <div>
      <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
        <button className="btn" onClick={toggleSpeech}>
          {playing ? (paused ? 'Resume' : 'Pause') : 'Play'}
        </button>
        <button className="btn" onClick={stopSpeech} disabled={stopped}>
          Stop
        </button>
      </div>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '4px',
          fontFamily: 'Crimson Text, serif',
          fontSize: '16pt',
          lineHeight: '1.5',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Speech;
