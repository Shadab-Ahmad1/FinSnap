import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';
import closeRoundedIcon from '@iconify/icons-mdi/close';
import { Link as ScrollLink } from 'react-scroll';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  padding: '12px 0', // Remove horizontal padding as Container handles it
}));

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? 'white' : 'transparent',
      transition: 'background-color 0.3s ease-in-out',
      boxShadow: trigger ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
    },
  });
}

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
        }}
      >
        <Container>
          <StyledToolbar>
            {/* Left Section: Logo + Links */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {/* Logo */}
              <img
                src="/assets/logo.png"
                alt="Logo"
                style={{ height: '50px', marginRight: '16px' }}
              />
              {/* Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                <ScrollLink to="features" smooth duration={500} offset={-70}>
                  <Button variant="text" color="info" size="medium" sx={{ fontSize: '1.1rem' }}>
                    Features
                  </Button>
                </ScrollLink>
                <ScrollLink to="testimonials" smooth duration={500} offset={-70}>
                  <Button variant="text" color="info" size="medium" sx={{ fontSize: '1.1rem' }}>
                    Testimonials
                  </Button>
                </ScrollLink>
                <ScrollLink to="highlights" smooth duration={500} offset={-70}>
                  <Button variant="text" color="info" size="medium" sx={{ fontSize: '1.1rem' }}>
                    Highlights
                  </Button>
                </ScrollLink>
                <ScrollLink to="ComingSoon" smooth duration={500} offset={-70}>
                  <Button variant="text" color="info" size="medium" sx={{ fontSize: '1.1rem' }}>
                    Coming Soon
                  </Button>
                </ScrollLink>
                <ScrollLink to="faq" smooth duration={500} offset={-70}>
                  <Button variant="text" color="info" size="medium" sx={{ fontSize: '1.1rem' }}>
                    FAQ
                  </Button>
                </ScrollLink>
              </Box>
            </Box>

            {/* Right Section: Sign in/Sign up */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1.5,
                alignItems: 'center',
              }}
            >
              <Button
                component={Link}
                to="/login"
                color="primary"
                variant="text"
                size="large"
                sx={{ fontSize: '1.1rem' }}
              >
                Sign in
              </Button>
              <Button
                component={Link}
                to="/register"
                color="primary"
                variant="contained"
                size="large"
                sx={{ fontSize: '1.1rem' }}
              >
                Sign up
              </Button>
            </Box>

            {/* Mobile Drawer Menu */}
            <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <Icon icon={menuIcon} width="28" height="28" />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 3, backgroundColor: 'background.default' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <Icon icon={closeRoundedIcon} width="28" height="28" />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <ScrollLink to="features" smooth duration={500} offset={-70}>
                    <MenuItem onClick={toggleDrawer(false)} sx={{ fontSize: '1.1rem' }}>
                      Features
                    </MenuItem>
                  </ScrollLink>
                  <ScrollLink to="testimonials" smooth duration={500} offset={-70}>
                    <MenuItem onClick={toggleDrawer(false)} sx={{ fontSize: '1.1rem' }}>
                      Testimonials
                    </MenuItem>
                  </ScrollLink>
                  <ScrollLink to="highlights" smooth duration={500} offset={-70}>
                    <MenuItem onClick={toggleDrawer(false)} sx={{ fontSize: '1.1rem' }}>
                      Highlights
                    </MenuItem>
                  </ScrollLink>
                  <ScrollLink to="faq" smooth duration={500} offset={-70}>
                    <MenuItem onClick={toggleDrawer(false)} sx={{ fontSize: '1.1rem' }}>
                      FAQ
                    </MenuItem>
                  </ScrollLink>
                  <MenuItem>
                    <Button
                      component={Link}
                      to="/register"
                      color="primary"
                      variant="contained"
                      fullWidth
                      sx={{ fontSize: '1.1rem' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      component={Link}
                      to="/login"
                      color="primary"
                      variant="outlined"
                      fullWidth
                      sx={{ fontSize: '1.1rem' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
