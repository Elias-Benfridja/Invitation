import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Location = forwardRef(function Location(props, ref) {
  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <Box
        sx={{
          width: "65vw",
          height: "fit-content",
          background: "#FFFFFF",
          padding: "50px",
          paddingTop: "1px",
          margin: "20px 0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Grenze, cursive",
            fontSize: "36px",
            color: "#0C2B4E",
          }}
        >
          Location:
          <br /> "salle blanc blanc mohcine 1" - jijel
          <br /> A partir de 18:30
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3194.1245768293584!2d5.7441286!3d36.8155346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f25fece22f14e3%3A0xf81cf416a279a5c1!2sSalle%20des%20f%C3%AAtes%20la%20Reine%20blanc%20blanc!5e0!3m2!1sen!2sdz!4v1781462948702!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
});

export default Location;