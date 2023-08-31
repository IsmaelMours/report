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
            <ListItemStyled>
              <ListItemText primary="Data Modeling" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Creating Visualizations" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Interactive Reports and Dashboards" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Sharing and Collaboration" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="DAX Expressions" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Mastering Power BI allows you to turn data into meaningful insights and drive informed
            business decisions.
          </Typography>
        </Container>
      );
}

export default PowerBIContent