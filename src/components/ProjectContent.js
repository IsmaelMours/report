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

const ProjectContent = () => {
    return (
        <Container>
          <SectionTitle variant="h5">Project Plan</SectionTitle>
          <Typography variant="body1">
            A well-structured project plan is essential for successful project management. Here are some
            key components of a project plan:
          </Typography>
          <List>
            <ListItemStyled>
              <ListItemText primary="Project Objectives" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Scope and Deliverables" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Timeline and Milestones" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Resource Allocation" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Risk Assessment" />
            </ListItemStyled>
            <ListItemStyled>
              <ListItemText primary="Communication Plan" />
            </ListItemStyled>
          </List>
          <Typography variant="body1">
            Creating a thorough project plan helps ensure that all team members are aligned and aware of
            project goals and expectations.
          </Typography>
          <a href="https://clickup.com/" target="_blank" rel="noopener noreferrer">
            <button>Go to ClickUp</button>
          </a>
        </Container>
      );
}

export default ProjectContent;
