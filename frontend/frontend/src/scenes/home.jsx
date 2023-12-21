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
        Somos una empresa líder en la producción y comercialización de cementos en Chile. Con más de 50 años de experiencia, nos enfocamos en brindar productos y servicios de la más alta calidad a nuestros clientes.
      </Typography>

      <Typography variant="body1">
        Nuestras modernas plantas de producción y nuestro equipo de profesionales garantizan la excelencia de todos nuestros productos. Usamos las más avanzadas tecnologías y seguimos rigurosos controles de calidad.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        Agradecemos su preferencia por nuestros cementos. Estamos para servirle.
      </Typography>
    </Box>
  );
}

export default Home;