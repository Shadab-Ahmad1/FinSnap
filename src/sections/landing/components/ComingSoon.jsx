import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Share2, MessageSquare, Mic } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  borderRadius: theme.spacing(2),
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
}));

// FeatureCard component defined inside the ComingSoon component
const FeatureCard = ({ icon, title, date, description, status, progress, color }) => {
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledCard ref={cardRef}>
      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ mr: 2, color: 'primary.main' }}>{icon}</Box>
          <Typography variant="h5" component="h2" sx={{ color: 'white' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'grey.500' }}>
          {date}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'grey.400', flex: 1 }}>
          {description}
        </Typography>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: 'black',
                backgroundColor: color,
                borderRadius: '50px',
                padding: '.25rem .5rem',
                fontWeight: 'medium',
              }}
            >
              {status}
            </Typography>
            <Typography variant="caption" sx={{ color: 'grey.500' }}>
              {date}
            </Typography>
          </Box>
          <StyledLinearProgress
            variant="determinate"
            value={animate ? progress : 0}
            sx={{
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
                transition: 'transform 1.5s ease-in-out',
                height: '5px',
              },
              height: '5px',
            }}
          />
        </Box>
      </CardContent>
    </StyledCard>
  );
};

// PropTypes validation for FeatureCard
FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

// ComingSoon component
export default function ComingSoon() {
  const features = [
    {
      icon: <Share2 size={24} />,
      title: 'X and Reddit Insights',
      date: 'Q4 2024',
      description:
        "Never miss important market discussions from your favorite communities again. We'll filter out the noise and deliver only the most relevant insights directly to you.",
      status: 'Coming Soon',
      progress: 100,
      color: '#4ade80',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Telegram & Discord Feeds',
      date: 'Q4 2024',
      description:
        'Your favorite Telegram and Discord channels, summarized just for you. Save hours of scrolling while staying on top of crucial market discussions.',
      status: 'In Progress',
      progress: 60,
      color: '#3b82f6',
    },
    {
      icon: <Mic size={24} />,
      title: 'AI Audio Briefings',
      date: 'Q1 2025',
      description:
        'Start your day with personalized audio briefings tailored to your trading interests. Get market-ready in minutes while getting ready for your day.',
      status: 'In Planning',
      progress: 30,
      color: '#a855f7',
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div ref={containerRef} style={{ scale }} initial={{ scale: 0.8 }}>
      <Box sx={{ bgcolor: 'rgb(0, 41, 82)', pt: 8, pb: '90px', marginTop: '50px' }} id="ComingSoon">
        <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 3 }}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              mb: 2,
              color: '#52bc52',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
            }}
          >
            Coming Soon
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{
              color: '#fff',
              maxWidth: 'md',
              mx: 'auto',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            We&apos;re constantly innovating to bring you better market insights.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 8, color: '#fff', fontSize: '1rem', fontWeight: '400' }}
          >
            Here&apos;s what&apos;s on our roadmap.
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
}
