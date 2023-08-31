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
            <ListItemStyled>
              <ListItemText primary="Measures of Central Tendency" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Measures of Dispersion" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Probability Distributions" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Hypothesis Testing" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Correlation and Regression" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Understanding statistics is essential for making informed decisions and drawing meaningful
            conclusions from data.
          </Typography>
        </Container>
      );
}

export default StatisticsContent