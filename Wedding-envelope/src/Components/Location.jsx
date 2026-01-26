import Box from "@mui/material/Box";
import { motion } from "framer-motion";

function Location() {
  return (
    <div>
     <Box component = {motion.div} initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 2}}>
      <Box sx={{width: '65vw' , height: 'fit-content', background: '#FFFFFF', padding: '50px', paddingTop:'1px', margin: '50px 0', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '20px'}}>
        <h2 style={{textAlign: 'center', fontFamily: 'Grenze, cursive', fontSize: '36px', color: '#0C2B4E'}}>
            Location:<br /> "salle les palmiers" - taher<br />A partir de 18:30
        </h2>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.1282375869887!2d5.886086275144297!3d36.767490972256496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f25dc97520184f%3A0x3837d42bd59c23e9!2z2YLYp9i52Kkg2KfZhNit2YHZhNin2Kog2KfZhNmG2K7ZitmE!5e0!3m2!1sfr!2sdz!4v1769201950876!5m2!1sfr!2sdz"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
    </div>
  );
}
export default Location; 