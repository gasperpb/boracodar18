import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const CardReySkywalker = () => {
  return (

    // alinhar a div no centro da tela
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Box
        sx={{
          width: 436,
          height: 608,
          background: 'linear-gradient( #0E1765 , #0E1765 , #121214)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#FFFFFF',
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',

        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/Character.png'}
          alt="Imagem"
          style={{ width: '30%', height: '100%', objectFit: 'cover' }}
        />
        <Typography variant="h4" component="h2" gutterBottom>
          Rey Skywalker
        </Typography>
        <Typography variant="body1" gutterBottom>
          Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.
        </Typography>
      </Box>
    </Container>

  );
};

export default CardReySkywalker;
