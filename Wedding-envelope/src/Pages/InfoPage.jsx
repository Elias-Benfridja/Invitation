import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import { motion } from 'framer-motion';
import Header from '../Components/Header.jsx';
import Location from '../Components/Location.jsx';

function InfoPage() {
  return (
    <div>
      <Box sx={{width: '100vw', height: 'fit-content', background: "#0C2B4E", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Header />
        <Location />
      </Box>
    </div>
  );
}

export default InfoPage;