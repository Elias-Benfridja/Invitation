import Box from "@mui/material/Box"
import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"

function EnvelopePage() {
  const [started, setStarted] = useState(false)
  const controls = useAnimation()
  const navigate = useNavigate()

  useEffect(() => {
    if (started) {
      controls.start({
        transform: "translate(-50%, -50%) translateY(-10px)",
        transition: { duration: 2 },
      })
    }
  }, [started, controls])

  const handleFadeComplete = () => {
    navigate("/info")
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        background: "#ffffffff",
        overflow: "hidden",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent"
      }}
      onClick={() => setStarted(true)}
    >
      {/* White fade overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ duration: 2 }}
        onAnimationComplete={() => {
          if (started) handleFadeComplete()
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Top image filling viewport */}
      <Box
        component={motion.img}
        src="/Pictures/Subtract.png"
        initial={{ transform: "translate(-50%, -50%) translateY(0)" }}
        animate={controls}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          zIndex: 5,
          userSelect: "none",
          pointerEvents: "none",
          display: "block",
          transformOrigin: "center",
        }}
      />

      {/* Bottom image filling viewport */}
      <Box
        component="img"
        src="/Pictures/SubtractButtom.png"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          userSelect: "none",
          pointerEvents: "none",
          display: "block",
        }}
      />

      {/* Text above bottom image but below top image */}
      <Typography
        sx={{
          position: "absolute",
          top: "65vh", // adjust vertical position as needed
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3, // higher than bottom image (2), lower than top image (5)
          color: "black",
          textAlign: "center",
          width: "100%",
          userSelect: "none",
          pointerEvents: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "Great Vibes, cursive",
        }}
      >
        You're specially invited!
      </Typography>
    </Box>
  )
}

export default EnvelopePage
