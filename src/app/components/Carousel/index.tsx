'use client';
import React, { ReactNode, useCallback, useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideCount = React.Children.count(children);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [isTransitioning, slideCount]); 

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [isTransitioning, slideCount]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning]);

  return (
    <Box sx={{ 
      position: 'relative', 
      height: '15rem', 
      width: '100%',
      minHeight: '15rem',
          '@media (max-width: 600px)': {
            minHeight: '35rem',
          },
      }}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0,
            }}
            key={index}
          >
            {child}
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 2, transform: 'translateY(-50%)' }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: 0, zIndex: 2, transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
