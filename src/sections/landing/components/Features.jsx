import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  {
    icon: (
      <img
        alt="Connections Icon"
        src="/assets/icons/navbar/ic_connections.svg"
        width="24"
        height="24"
      />
    ),
    title: 'Managing suppliers strategically',
    description: 'Simple interface to connect and manage all your bank accounts in one place.',
    videoSrc: 'assets/videos/connections.mp4',
  },
  {
    icon: (
      <img
        alt="Analytics Icon"
        src="/assets/icons/navbar/ic_analytics.svg"
        width="24"
        height="24"
      />
    ),
    title: 'Handling compliance efficiently',
    description:
      'Gain insights with Inflow/Outflow analytics, real-time Cash Flow Statements, and more — all available as downloadable reports.',
    videoSrc: 'assets/videos/connections.mp4',
  },
  {
    icon: (
      <img alt="Chatbot Icon" src="/assets/icons/navbar/ic_chatbot.svg" width="24" height="24" />
    ),
    title: 'Optimize material purchasing',
    description:
      'A conversational chatbot tailored to your financial data, providing specialized insights and assistance.',
    videoSrc: null,
  },
  {
    icon: (
      <img alt="Cashflow Icon" src="/assets/icons/navbar/ic_cashflow.svg" width="24" height="24" />
    ),
    title: 'Realizing cost potential',
    description:
      'Access a real-time cash flow statement, providing continuous insights into your financial health.',
    videoSrc: 'assets/videos/connections.mp4',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState('panel0');
  const videoRef = React.useRef(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    // Reset and play video from the start
    if (videoRef.current) {
      videoRef.current.load(); // Reloads the video with the new source
      videoRef.current.play(); // Starts playback from the beginning
    }
  };

  const selectedFeature = items[selectedItemIndex];

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div ref={containerRef} style={{ scale }} initial={{ scale: 0.8 }}>
      <Box
        id="features"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          py: 6,
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '80%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {/* Title and Description Section */}
          <Box sx={{ width: '100%', mb: 1 }}>
            <Typography
              component="h2"
              variant="h3"
              gutterBottom
              sx={{ color: 'info.dark', fontSize: '3rem', textAlign: 'center' }}
            >
              Features
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: { xs: 1, sm: 2 },
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              With just a few clicks, simply grant FinSnap your consent and we will handle the rest!
            </Typography>
          </Box>

          {/* Video and Feature List Container */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
            }}
          >
            {/* Video Display on the Left */}
            <Box sx={{ flex: 2, maxWidth: { md: '55%' }, position: 'relative' }}>
              <Card variant="outlined" sx={{ height: '420px', p: 0 }}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                  <video
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ cursor: 'pointer' }}
                  >
                    <source src={selectedFeature.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Card>
            </Box>

            {/* Feature List on the Right */}
            <Box sx={{ flex: 1 }}>
              {items.map(({ icon, title, description }, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  onClick={() => handleItemClick(index)}
                  defaultExpanded={index === 0}
                  sx={{
                    mb: 2,
                    '&:before': { display: 'none' },
                    borderRadius: '8px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown size={24} />}
                    aria-controls={`panel${index}bh-content`}
                    id={`panel${index}bh-header`}
                    sx={{
                      backgroundColor:
                        expanded === `panel${index}` ? 'action.selected' : 'background.paper',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {icon}
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {description}
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn more
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
