import React from 'react';
import { Typography, Paper, Container, Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';

const AboutMeContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px',
});

const AboutMeContent = styled(Paper)({
  padding: '16px',
  maxWidth: '600px',
  textAlign: 'center',
});

const ContactMeContent = styled(Paper)({
  padding: '16px',
  maxWidth: '600px',
  marginTop: '24px',
  textAlign: 'center',
});

const AboutContent = () => {
    return (
        <AboutMeContainer>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <AboutMeContent elevation={3}>
            <Typography variant="body1">
              Hello, I'm [Your Name]. I am passionate about [your passions/interests]. I have been
              learning and working in the field of [your field] for [years] years. During this time, I
              have gained experience in [mention some of your experiences/skills].
            </Typography>
            <Typography variant="body1" marginTop="16px">
              When I'm not [what you do], I enjoy [hobbies/activities]. I'm excited to share my
              knowledge and experiences with you through this platform. Feel free to reach out to me
              for any questions or discussions.
            </Typography>
          </AboutMeContent>
          <ContactMeContent elevation={3}>
            <Typography variant="h5" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" marginBottom="16px">
              Have a question or want to get in touch? Feel free to use the contact form below.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Send Message
            </Button>
          </ContactMeContent>
        </AboutMeContainer>
      );
}

export default AboutContent