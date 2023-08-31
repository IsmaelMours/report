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

const TestingContent = () => {
    return (
        <Container>
          <SectionTitle variant="h5">Introduction to Software Testing</SectionTitle>
          <Typography variant="body1">
            Software testing is a critical part of software development to ensure quality and
            functionality. Here are some key concepts to understand about software testing:
          </Typography>
          <List>
            <ListItemStyled>
              <ListItemText primary="Testing Types (Unit, Integration, Functional, etc.)" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Test Planning and Strategy" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Test Cases and Test Execution" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Bug Tracking and Reporting" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Automation Testing" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Performance Testing" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Mastering software testing methodologies and techniques is crucial for delivering reliable
            and high-quality software products.
          </Typography>
        </Container>
      );
}

export default TestingContent