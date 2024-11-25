import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, Container } from '@mui/material';
import { Icon } from '@iconify/react';
import chevronLeft from '@iconify/icons-material-symbols/chevron-left';
import chevronRight from '@iconify/icons-material-symbols/chevron-right';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote:
      'With Tacto, we have found a partner for the digitalization of our procurement process. We highly appreciate the collaborative approach, fostering exchange, and smooth implementation.',
    name: 'Mario Koch',
    title: 'Head of Procurement - KNOLL Maschinenbau',
    avatar: '/assets/images/avatars/avatar_1.jpg',
    background:
      'https://cdn.prod.website-files.com/6148bc4a5e4335d638f2eccd/654e4f3312072e2fcf9125ed_6152e2c7f15d4121f9462449_knoll-bad_saulgau-unternehmen-produktion.webp',
  },
  {
    quote:
      'The solutions offered by Tacto exceeded our expectations. Their team’s dedication to understanding our challenges and addressing them with tailored solutions was remarkable.',
    name: 'Sophia Müller',
    title: 'Supply Chain Manager - ABC GmbH',
    avatar: '/assets/images/avatars/avatar_2.jpg',
    background:
      'https://cdn.prod.website-files.com/6148bc4a5e4335d638f2eccd/654e4f3312072e2fcf9125ed_6152e2c7f15d4121f9462449_knoll-bad_saulgau-unternehmen-produktion.webp',
  },
  {
    quote:
      'We didn’t need a tool that we have to invest 100 hours in, we needed plug & play - and that is 100% given with Tacto.',
    name: 'Sophia Müller',
    title: 'Supply Chain Manager - ABC GmbH',
    avatar: '/assets/images/avatars/avatar_3.jpg',
    background:
      'https://cdn.prod.website-files.com/6148bc4a5e4335d638f2eccd/654e4f3312072e2fcf9125ed_6152e2c7f15d4121f9462449_knoll-bad_saulgau-unternehmen-produktion.webp',
  },
  {
    quote:
      'With Tacto, we are significantly advancing the digitalization of our procurement process. Thanks to the user-friendly software accessible to all employees, we are transitioning away from Excel-based processes toward a fully digitalized procurement system. Just a few months after implementation, we have already observed substantial cost-saving potentials.',
    name: 'Sophia Müller',
    title: 'Supply Chain Manager - ABC GmbH',
    avatar: '/assets/images/avatars/avatar_4.jpg',
    background:
      'https://cdn.prod.website-files.com/6148bc4a5e4335d638f2eccd/654e4f3312072e2fcf9125ed_6152e2c7f15d4121f9462449_knoll-bad_saulgau-unternehmen-produktion.webp',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { quote, name, title, avatar, background } = testimonials[currentIndex];

  return (
    <Container
      id="testimonials"
      sx={{
        position: 'relative',
        padding: { xs: '16px', sm: '32px' },
      }}
    >
      <motion.div ref={containerRef} style={{ scale }} initial={{ scale: 0.8 }}>
        <Box
          position="relative"
          sx={{
            height: '550px',
            borderRadius: '16px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              backgroundColor: '#16162980',
              backgroundImage: 'linear-gradient(#16162900, #16162973 80%)',
              position: 'absolute',
              inset: 0,
            }}
          />

          <Box
            textAlign="center"
            sx={{
              position: 'relative',
              zIndex: 1,
              color: 'white',
            }}
          >
            <Avatar
              alt={name}
              src={avatar}
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto',
                marginTop: '4rem',
                marginBottom: 2,
                border: '4px solid white',
              }}
            />
            <Typography
              variant="h4"
              component="p"
              gutterBottom
              sx={{
                maxWidth: '900px',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: 'hsl(210, 100%, 16%)',
              }}
            >
              &ldquo;{quote}&rdquo;
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ opacity: '.75', marginTop: '16px', fontSize: '1rem' }}
            >
              {name}, {title}
            </Typography>
          </Box>

          {/* Chevron Buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 40px',
              zIndex: 1,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: 'white',
                background: 'transparent',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                '&:hover': {
                  background: 'transparent',
                  borderColor: 'white',
                },
              }}
            >
              <Icon icon={chevronLeft} width={36} height={36} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                color: 'white',
                background: 'transparent',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                '&:hover': {
                  background: 'transparent',
                  borderColor: 'white',
                },
              }}
            >
              <Icon icon={chevronRight} width={36} height={36} />
            </IconButton>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Testimonials;
