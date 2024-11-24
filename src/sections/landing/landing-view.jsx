import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ComingSoon from './components/ComingSoon';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getMPTheme from './theme/getMPTheme';

export default function LandingView() {
  const MPTheme = createTheme(getMPTheme());

  return (
    <ThemeProvider theme={MPTheme}>
      <CssBaseline enableColorScheme />
      {/* App Bar */}
      <AppAppBar />

      {/* Main Content */}
      <Hero />
      <div>
        <LogoCollection />
        <Testimonials />
        <Highlights />
        <Features />
        {/* <Pricing /> */}
        <ComingSoon />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
