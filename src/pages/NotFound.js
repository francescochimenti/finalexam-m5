import { Container, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

//try to use styled components

const notFoundContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const notFoundContent = {
  textAlign: 'center',
};

const notFoundTitle = {
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#1976D2', 
};

const notFoundSubtitle = {
  fontSize: '2rem',
  color: '#1976D2', 
};

const notFoundMessage = {
  fontSize: '1.5rem',
  margin: '16px',
};

const notFoundPath = {
  fontSize: '1rem',
  color: '#757575',
};

const notFoundPathText = {
  color: 'inherit',
};

const NotFound = () => {
  const currentPath = window.location.pathname;

  return (
    <Container style={notFoundContainer}>
      <div style={notFoundContent}>
        <Typography variant="h1" style={notFoundTitle}>
          Oops!
        </Typography>
        <Typography variant="h2" style={notFoundSubtitle}>
          Errore 404
        </Typography>
        <Typography variant="body1" style={notFoundMessage}>
          La pagina che stai cercando non è stata trovata.
        </Typography>
        <Typography variant="body2" style={notFoundPath}>
          L'URL richiesto:
          <span style={notFoundPathText}> {currentPath}</span> non è stato trovato.
        </Typography>
        <Button className='mt-4' variant="contained" color="error" component={Link} to={"/"}>
          Torna alla Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
