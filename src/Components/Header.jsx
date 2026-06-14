import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Header() {
  const videoRef = useRef(null);

  const [firstLine, setFirstLine] = useState("Là où commence notre plus belle histoire commence");
  const [secondLine, setSecondLine] = useState("Alaeddin\n");
  const [thirdLine, setThirdLine] = useState("&\n");
  const [fourthLine, setFourthLine] = useState("Sana");
  const [fontToggle, setFontToggle] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });

    // 🔹 Triggers exactly at 12 seconds
    const timeout = setTimeout(() => {
      setFirstLine("Entourés de notre famille et de nos amis");
      setSecondLine("nous allons nous dire Oui\n");
      setThirdLine("Soyez témoins de notre bonheur\n");
      setFourthLine("Le 20-06-2026");
      setFontToggle(true);
    }, 11000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        background: "#0C2B4E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        playsInline
        disablePictureInPicture
        loop
        muted
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <source src="/Videos/output.mp4" type="video/mp4" />
      </video>
      <Box
        component={"img"}
        src="/Pictures/Screenshot from 2026-01-27 17-18-13.png"
        alt="Poster"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          key={firstLine}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }} // Starts at 2s, ends at 4s
        >
          <Typography
            sx={{
              color: "#2B2B2B",
              textAlign: "center",
              whiteSpace: "pre-line",
              fontFamily: fontToggle ? "Great Vibes, cursive" : "Grenze, serif",
              fontSize: fontToggle ? "24px" : "24px",
              mb: 2,
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
          transition={{ duration: 2, delay: 4 }} // Starts at 4s, ends at 6s
        >
          <Typography
            sx={{
              color: "#2B2B2B",
              textAlign: "center",
              whiteSpace: "pre-line",
              fontFamily: fontToggle ? "Grenze, serif" : "Great Vibes, cursive",
              fontSize: fontToggle ? "24px" : "64px",
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
          transition={{ duration: 2, delay: 6 }} // Starts at 6s, ends at 8s
        >
          <Typography
            sx={{
              color: "#2B2B2B",
              textAlign: "center",
              whiteSpace: "pre-line",
              fontFamily: fontToggle ? "Grenze, serif" : "Great Vibes, cursive",
              fontSize: fontToggle ? "34px" : "64px",
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
          transition={{ duration: 2, delay: 8 }} // Starts at 8s, ends at 10s
        >
          <Typography
            sx={{
              color: "#2B2B2B",
              textAlign: "center",
              whiteSpace: "pre-line",
              fontFamily: "Great Vibes, cursive",
              fontSize: "64px",
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