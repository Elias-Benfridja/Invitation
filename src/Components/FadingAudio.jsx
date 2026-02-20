import { useEffect, useRef } from 'react';

// Added fadeDuration (default is 5000ms, or 5 seconds)
function FadingAudio({ src, delay = 2000, fadeDuration = 5000 }) {
  const audioRef = useRef(new Audio(src));
  const fadeTimer = useRef(null);
  const delayTimer = useRef(null); 
  const hasStarted = useRef(false);

  useEffect(function() {
    const audio = audioRef.current;
    audio.loop = true;

    function playAndFade() {
      if (hasStarted.current) return;
      
      audio.volume = 0;
      audio.play().then(() => {
        hasStarted.current = true;
        
        // Calculate the exact volume increase needed every 50ms
        // Example: 50ms / 5000ms = 0.01 volume increase per tick
        const volumeStep = 50 / fadeDuration;
        
        fadeTimer.current = setInterval(function() {
          // Check if adding the next step will push volume over 1.0
          if (audio.volume < 1 - volumeStep) {
            audio.volume += volumeStep;
          } else {
            audio.volume = 1; // Cap it exactly at 1.0
            clearInterval(fadeTimer.current);
          }
        }, 50); // Runs every 50ms for a smoother audio curve

      }).catch(() => {
        console.log("Autoplay paused by browser. Waiting for interaction.");
      });
    }

    function startCountdown() {
      if (hasStarted.current) return;
      clearTimeout(delayTimer.current); 
      
      delayTimer.current = setTimeout(() => {
        playAndFade();
      }, delay);
    }

    startCountdown();

    function handleInteraction() {
      if (!hasStarted.current) {
        startCountdown();
      }
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    }

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return function cleanup() {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      
      clearTimeout(delayTimer.current); 
      clearInterval(fadeTimer.current);
      audio.pause();
    };
  }, [delay, fadeDuration]); // Re-run if props change

  return null;
}

export default FadingAudio;