import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const videoRef = useRef(null);

  const [firstLine, setFirstLine] = useState("We are getting married");
  const [secondLine, setSecondLine] = useState("Hakim\n");
  const [thirdLine, setThirdLine] = useState("&\n");
  const [fourthLine, setFourthLine] = useState("Maissa");

  useEffect(() => {
    // 🔹 Start video right after first paint (poster shows)
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });

    const timeout = setTimeout(() => {
      setFirstLine("Save the date\n23/05/2026\n");
      setSecondLine("Welcome to our happily ever after");
      setThirdLine("");
      setFourthLine("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        background: "#0C2B4E",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <video
        ref={videoRef}
        playsInline
        disablePictureInPicture
        loop
        muted
        preload="auto"
        poster="/Pictures/Screenshot-from-2026-01-27-17-18-13.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none"
        }}
      >
        <source
          src="/Videos/video6023884163138985617.mp4"
          type="video/mp4"
        />
      </video>

      {/* TEXT LAYER */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box
          key={firstLine}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: 'Grenze, serif',
              fontSize: '24px',
              mb: 2
            }}
          >
            {firstLine}
          </Typography>
        </Box>

        <Box
          key={secondLine}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: "Great Vibes, cursive",
              fontSize: '64px'
            }}
          >
            {secondLine}
          </Typography>
        </Box>

        <Box
          key={thirdLine}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: "Great Vibes, cursive",
              fontSize: '64px'
            }}
          >
            {thirdLine}
          </Typography>
        </Box>

        <Box
          key={fourthLine}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontFamily: "Great Vibes, cursive",
              fontSize: '64px'
            }}
          >
            {fourthLine}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
