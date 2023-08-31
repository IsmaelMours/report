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

const PythonContent = () => {
    return (
        <Container>
          <SectionTitle variant="h5">Introduction to Python</SectionTitle>
          <Typography variant="body1">
            Python is a versatile and widely-used programming language. Here are some key concepts to
            get started with Python:
          </Typography>
          <List>
            <ListItemStyled>
              <ListItemText primary="Variables and Data Types" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Control Flow (if statements, loops)" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Functions and Modules" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Data Structures (lists, dictionaries)" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="File Handling" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Exception Handling" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Learning Python provides a strong foundation for various programming tasks and applications.
          </Typography>
        </Container>
      );
}

export default PythonContent