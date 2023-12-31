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

const SQLContent = () => {
  // URL to the SQL file on Google Drive
  const sqlUrl = 'https://drive.google.com/file/d/1-beOZtdLwBMLUPkeVSwBeHeQzyTxnvSk/view?usp=sharing';

  return (
    <Container>
      <SectionTitle variant="h5">SQL Fundamentals</SectionTitle>
      <Typography variant="body1">
        Structured Query Language (SQL) is a powerful tool for managing and querying databases.
        Here are some key SQL concepts to understand:
      </Typography>
      <List>
        <ListItemStyled>
          <ListItemText primary="SELECT Statements" />
        </ListItemStyled>
        {/* Add other list items as needed */}
      </List>
      <Typography variant="body1">
        Mastering SQL fundamentals is essential for working with databases and data manipulation.
      </Typography>
      <a href={sqlUrl} target="_blank" rel="noopener noreferrer">
        View SQL File
      </a>
    </Container>
  );
};

export default SQLContent;
