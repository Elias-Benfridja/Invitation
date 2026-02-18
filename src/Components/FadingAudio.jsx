import React, { useEffect, useRef, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
function FadingAudio({ src }) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const fadeTimer = useRef(null);

  // Function to handle smooth Fade In
  function handleFadeIn() {
    const audio = audioRef.current;
    clearInterval(fadeTimer.current); // Clear any active fades
    
    audio.volume = 0;
    audio.play().catch(() => console.log("Interaction required to play"));
    setIsPlaying(true);

    fadeTimer.current = setInterval(function() {
      if (audio.volume < 0.9) {
        audio.volume += 0.1;
      } else {
        audio.volume = 1;
        clearInterval(fadeTimer.current);
      }
    }, 100);
  }

  // Function to handle smooth Fade Out
  function handleFadeOut() {
    const audio = audioRef.current;
    clearInterval(fadeTimer.current);

    fadeTimer.current = setInterval(function() {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        audio.volume = 0;
        audio.pause();
        setIsPlaying(false);
        clearInterval(fadeTimer.current);
      }
    }, 100);
  }

  useEffect(function() {
    const audio = audioRef.current;
    audio.loop = true;

    // Listener to start audio on the very first user click
    function handleInitialClick() {
      handleFadeIn();
      window.removeEventListener('click', handleInitialClick);
    }

    window.addEventListener('click', handleInitialClick);

    // Cleanup: Stop audio immediately if user leaves the page
    return function cleanup() {
      window.removeEventListener('click', handleInitialClick);
      clearInterval(fadeTimer.current);
      audio.pause();
    };
  }, []);

  return (
    <Zoom in={true}>
      <Fab 
        color="primary" 
        size="medium"
        onClick={isPlaying ? handleFadeOut : handleFadeIn}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </Fab>
    </Zoom>
  );
}

export default FadingAudio;