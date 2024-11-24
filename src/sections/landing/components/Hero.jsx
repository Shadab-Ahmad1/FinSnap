import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#52bc52',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 16,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            width: { xs: '100%', sm: '70%' },
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={(theme) => ({
              fontSize: '2rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#ffffff',
              ...theme.applyStyles('dark', {
                color: 'primary.light',
              }),
              textAlign: 'center',
              whiteSpace: 'nowrap',
            })}
          >
            We Help Businesses Showcase their{' '}
            <span style={{ color: 'hsl(210, 100%, 16%)' }}> Financial Strength</span>
          </Typography>

          <Typography
            variant="h5"
            sx={(theme) => ({
              mt: '26px !important',
              fontSize: '1rem',
              color: '#ffffff',
              ...theme.applyStyles('dark', {
                color: '#ffffff',
              }),
              textAlign: 'center',
              whiteSpace: 'nowrap',
            })}
          >
            by allowing <span style={{ color: 'hsl(210, 100%, 16%)' }}>unified</span> and{' '}
            <span style={{ color: 'hsl(210, 100%, 16%)' }}>real-time</span> access to their own
            financial data
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              mt: '26px !important',
              fontSize: '1rem',
            }}
          >
            Request Demo
          </Button>
        </Stack>

        <Box
          component="img"
          src="https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/65cb27d92f4c6f34c87220f6_A-1.0.0-Home.avif" // Replace with the correct path to your image
          alt="Hero Illustration"
          sx={{
            mt: { xs: 4, sm: 5 },
            width: {
              xs: '100%',
              sm: '95%',
              borderRadius: '12px',
              marginBottom: '-134px',
              boxShadow: '21px 21px 80px #0000001a',
            },
          }}
        />
      </Container>
    </Box>
  );
}
