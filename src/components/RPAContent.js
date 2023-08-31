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

const RPAContent = () => {
    return (
        <Container>
          <SectionTitle variant="h5">Introduction to Robotic Process Automation (RPA)</SectionTitle>
          <Typography variant="body1">
            Robotic Process Automation (RPA) is the use of software robots to automate repetitive and
            rule-based tasks. Here are some key concepts to understand about RPA:
          </Typography>
          <List>
            <ListItemStyled>
              <ListItemText primary="Benefits and Use Cases of RPA" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="RPA Tools and Platforms" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Building RPA Bots" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Process Automation and Orchestration" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Deployment and Monitoring" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Future of RPA" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Learning about RPA can help streamline business processes and improve efficiency across
            various industries.
          </Typography>
        </Container>
      );
}

export default RPAContent