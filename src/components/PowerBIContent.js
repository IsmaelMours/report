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

const PowerBIContent = () => {
  // URL to the Power BI file on Google Drive
  const powerBiUrl = 'https://drive.google.com/file/d/1myUsj1_m3LwIWn-LqjAuhxawuaPNn95-/view?usp=sharing';

  return (
    <Container>
      <SectionTitle variant="h5">Introduction to Power BI</SectionTitle>
      <Typography variant="body1">
        Power BI is a powerful business analytics tool by Microsoft. Here are some key concepts to
        get started with Power BI:
      </Typography>
      <List>
        <ListItemStyled>
          <ListItemText primary="Data Sources and Data Transformation" />
        </ListItemStyled>
        {/* Add other list items as needed */}
      </List>
      <Typography variant="body1">
        Mastering Power BI allows you to turn data into meaningful insights and drive informed
        business decisions.
      </Typography>
      <a href={powerBiUrl} target="_blank" rel="noopener noreferrer">
        View Power BI File
      </a>
    </Container>
  );
};

export default PowerBIContent;
