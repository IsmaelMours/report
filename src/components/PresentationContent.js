import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')({
  width: 800,
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
  marginTop: '24px',
});

const SectionTitle = styled(Typography)({
  marginBottom: '16px',
});

const PresentationContent = () => {
  const redirectToLink = () => {
    window.open('https://1drv.ms/p/s!AkP4TLWpu4xnhwb_-gnhdJ3tdyCD?e=BRe3ge', '_blank');
  };

  return (
    <Container>
      <SectionTitle variant="h5">Presentation Skills</SectionTitle>
      <button onClick={redirectToLink}>Click Me</button>
      <Typography variant="body1">
        Effective presentation skills are crucial for delivering impactful messages and engaging audiences.
        Apply these tips and keep refining your skills to become a confident and effective presenter.
      </Typography>
    </Container>
  );
};

export default PresentationContent;
