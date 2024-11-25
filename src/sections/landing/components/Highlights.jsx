import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

const Section = ({ section, index }) => (
  <Grid
    container
    spacing={6}
    sx={{
      mb: 6,
      pt: 6,
      alignItems: 'center',
    }}
  >
    <Grid xs={12} sm={5}>
      {index % 2 === 0 ? (
        <img
          src={section.image}
          alt={section.title}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ) : (
        <>
          <Typography variant="h3" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.700', mb: 2 }}>
            {section.description}
          </Typography>
          {section.buttonText && (
            <Button variant="contained" color="primary">
              {section.buttonText}
            </Button>
          )}
        </>
      )}
    </Grid>

    <Grid sm={2} display={{ xs: 'none', sm: 'block' }}>
      .
    </Grid>

    <Grid xs={12} sm={5}>
      {index % 2 !== 0 ? (
        <img
          src={section.image}
          alt={section.title}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ) : (
        <>
          <Typography variant="h3" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.700', mb: 2 }}>
            {section.description}
          </Typography>
          {section.buttonText && (
            <Button variant="contained" color="primary">
              {section.buttonText}
            </Button>
          )}
        </>
      )}
    </Grid>
  </Grid>
);

Section.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function Highlights() {
  const sections = [
    {
      title: 'Regulatory Compliance',
      description:
        'Our product is complaint with the European Regulation Payment Services Directive 2-PSD2',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/6151c69237d7f91269a42904_progress-3-2.svg',
    },
    {
      title: 'Great Coverage',
      description:
        'Experience unmatched coverage with connections from EU and the UK. We are always bringing in new connections',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/614a00919e2dcac89eddbfb7_Group%2020product_visual.svg',
    },
    {
      title: 'Superb user experience',
      description:
        'Integrate our product into your routine with an intuitive and easy-to-use interface.',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/6151e962902a0a7a258d3ef4_progress-3-2.svg',
      buttonText: 'Learn more',
    },
    {
      title: 'Rapid Innovation',
      description:
        'Have a great idea for FinSnap? Share it with us, and we’ll quickly bring it to life, ensuring continuous improvement and innovation.',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/6151e962902a0a7a258d3ef4_progress-3-2.svg',
      buttonText: 'Learn more',
    },
    {
      title: 'Reliable support',
      description:
        'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/614a00919e2dcac89eddbfb7_Group%2020product_visual.svg',
    },
    {
      title: 'Precision in every detail',
      description:
        'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
      image:
        'https://cdn.prod.website-files.com/6148bc4a5e43352687f2ecb8/6151c69237d7f91269a42904_progress-3-2.svg',
    },
  ];

  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const containerTop = containerRect.top;
        const containerBottom = containerRect.bottom;
        const containerHeight = containerRect.height;

        const startPosition = viewportHeight / 2;
        const endPosition = startPosition + containerHeight;

        if (containerTop <= startPosition && containerBottom >= startPosition) {
          const rangeProgress =
            ((startPosition - containerTop) / (endPosition - startPosition)) * 100;
          setProgress(Math.min(Math.max(rangeProgress, 0), 100));
        } else if (containerBottom < startPosition) {
          setProgress(100);
        } else {
          setProgress(0);
        }
      }
    };

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const checkmarkPositions = [6.5, 24, 39.5, 55.9, 73, 90.3]; // Represent percentages of the container height

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: 'white',
        color: 'black',
        py: { xs: 4, sm: 6 },
      }}
    >
      <Container id="highlights" sx={{ position: 'relative' }}>
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{ color: 'info.dark', fontSize: '2.5rem', textAlign: 'center' }}
        >
          Highlights
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: { xs: 1, sm: 2 },
            maxWidth: '650px',
            textAlign: 'center',
            margin: '0 auto',
            fontSize: '1rem',
          }}
        >
          Explore why our product stands out: regulatory compliance, great coverage, user-friendly
          design, and innovation. Enjoy reliable customer support and precision in every detail.
        </Typography>
        <Grid container spacing={8} sx={{ marginTop: '3rem' }}>
          {sections.map((section, index) => (
            <Section key={index} section={section} index={index} />
          ))}
        </Grid>

        {/* Line and Checkmarks */}
        <Box
          sx={{
            position: 'absolute',
            top: 180,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '92%',
            width: '2px',
            backgroundColor: 'lightgrey',
            zIndex: 1,
          }}
        >
          {/* Progress Line */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              height: `${progress}%`,
              backgroundColor: '#52bc52',
              transition: 'height 0.1s ease-out',
            }}
          />

          {/* Checkmarks */}
          {checkmarkPositions.map((position, index) => {
            const isReached = progress >= position;

            return (
              <Box
                key={index}
                sx={{
                  width: isReached ? '24px' : '16px',
                  height: isReached ? '24px' : '16px',
                  borderRadius: '50%',
                  backgroundColor: isReached ? '#52bc52' : 'white',
                  border: '2px solid #52bc52',
                  position: 'absolute',
                  top: `${position}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.3s ease-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Checkmark Icon */}
                <img
                  src="/assets/icons/checkmark.svg"
                  alt="Checkmark"
                  style={{
                    width: '10px',
                    height: '10px',
                    opacity: isReached ? 1 : 0,
                    transition: 'opacity 0.3s ease-out',
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
