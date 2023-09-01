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

const StatisticsContent = () => {
  // URL to the certificate on Google Drive
  const certificateUrl = 'https://drive.google.com/file/d/1J0vyK4gaPm4bHyTXFq3nJ4PbINAsb85X/view?usp=sharing';

  return (
    <Container>
      <SectionTitle variant="h5">Statistics Basics</SectionTitle>
      <Typography variant="body1">
        Statistics is the study of data collection, analysis, interpretation, and presentation.
        Here are some key concepts in statistics:
      </Typography>
      <List>
        <ListItemStyled>
          <ListItemText primary="Descriptive vs. Inferential Statistics" />
        </ListItemStyled>
        {/* Add other list items as needed */}
      </List>
      <Typography variant="body1">
        Understanding statistics is essential for making informed decisions and drawing meaningful
        conclusions from data.
      </Typography>
      <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </Container>
  );
};

export default StatisticsContent;
