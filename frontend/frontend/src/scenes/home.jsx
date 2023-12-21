import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1" component="h1">
        Bienvenidos a Cementos Polpaico
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <img 
          src="https://www.concur.cl/sites/default/files/co/logo_polpaico.jpg"
          alt="Logotipo Cementos Polpaico"
          width="200px"
        />
      </Box>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Somos una empresa que  vende cemento.
        </Typography>
      <Typography variant="body1">
      Nuestra función, es vender cemento.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        ¿Quiere comprar cemento?
      </Typography>
    </Box>
  );
}

export default Home;