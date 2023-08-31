import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')({
  width: 600,
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

const ListItemStyled = styled(ListItem)({
  marginBottom: '8px',
});


const PresentationContent = () => {
    

    return (
        <Container>
          <SectionTitle variant="h5">Presentation Skills</SectionTitle>
          <Typography variant="body1">
            Effective presentation skills are crucial for delivering impactful messages and engaging
            audiences. Here are some tips to improve your presentation skills:
          </Typography>
          <List>
            <ListItemStyled>
              <ListItemText primary="Practice, Practice, Practice!" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Know Your Audience" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Engaging Opening" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Clear Structure" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Visual Aids" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Confident Body Language" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Remember, practice makes perfect. Apply these tips and keep refining your skills to become a
            confident and effective presenter.
          </Typography>
        </Container>
      );
}

export default PresentationContent