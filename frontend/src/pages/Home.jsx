import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, IconButton, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MotionBox = motion(Box);

const movie_images = [
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uOTDBabtxHA6szYKQNQe9Y7rFlv.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yGv62UIUfjrEUlItYPJXb1zU0lB.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9m4lvnqvwppA4BIoxqcWsWna5is.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a47JQFl9L7VDa79tEvnTOJe0rPa.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wT9tGyFol4RBwkjESXUWeBdnLJn.jpg',
];

const gadget_images = [
  'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NlcvVjg4Q2h4WWRjcFAyYlBrM0N1bGlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1Rqb3p6Q2ZyUTlqTERzaHFUOVhnZGR3&traceId=1',
  'https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bztbins-544702947?imbypass=true',
  'https://cdn.shopify.com/s/files/1/0586/3270/0077/files/ArcPro1352x1352-White-Glyphon.png?v=1740649967',
  'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw97c540ef/images/Sonata/Catalog/77134PM06W_1.jpg?sw=360&sh=360',
  'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/AE/AE1/ae-1000w-8av/assets/AE-1000W-8AV.png.transform/product-panel/image.png',
];

const Home = () => {
  console.log('Home component rendering...');

  const [movieIndex, setMovieIndex] = useState(0);
  const [gadgetIndex, setGadgetIndex] = useState(0);
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.700', 'gray.200');

  // Auto-scroll for movie slideshow
  useEffect(() => {
    const movieInterval = setInterval(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % movie_images.length);
    }, 5000);
    return () => clearInterval(movieInterval);
  }, []);

  // Auto-scroll for gadget slideshow
  useEffect(() => {
    const gadgetInterval = setInterval(() => {
      setGadgetIndex((prevIndex) => (prevIndex + 1) % gadget_images.length);
    }, 5000);
    return () => clearInterval(gadgetInterval);
  }, []);

  // Handle movie navigation
  const goToPreviousMovie = () => {
    setMovieIndex((prevIndex) => (prevIndex - 1 + movie_images.length) % movie_images.length);
  };

  const goToNextMovie = () => {
    setMovieIndex((prevIndex) => (prevIndex + 1) % movie_images.length);
  };

  // Handle gadget navigation
  const goToPreviousGadget = () => {
    setGadgetIndex((prevIndex) => (prevIndex - 1 + gadget_images.length) % gadget_images.length);
  };

  const goToNextGadget = () => {
    setGadgetIndex((prevIndex) => (prevIndex + 1) % gadget_images.length);
  };

  // Handle image clicks
  const handleMovieImageClick = () => {
    navigate('/movies');
  };

  const handleGadgetImageClick = () => {
    navigate('/gadgets');
  };

  // Calculate visible images for movies
  const visibleMovieImages = [
    movie_images[movieIndex],
    movie_images[(movieIndex + 1) % movie_images.length],
    movie_images[(movieIndex + 2) % movie_images.length],
  ];

  // Calculate visible images for gadgets
  const visibleGadgetImages = [
    gadget_images[gadgetIndex],
    gadget_images[(gadgetIndex + 1) % gadget_images.length],
    gadget_images[(gadgetIndex + 2) % gadget_images.length],
  ];

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  // Define animatable boxShadow values
  const shadowStyles = {
    base: useColorModeValue(
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
    ),
    hover: useColorModeValue(
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
    ),
  };

  return (
    <>
      <Helmet>
        <title>IhaLokam – Latest Movie Updates, Gadgets & Lottery Results</title>
        <meta name="description" content="Get latest updates on OTT movies, gadgets, blogs and Kerala lottery results – all in one place on IhaLokam." />
      </Helmet>
      <Box maxW="1200px" mx="auto" py={8} px={4}>
        {/* Movie Section */}
        <Heading as="h1" size="xl" textAlign="center" mb={6} color={textColor}>
          Too Bored? Wanna Watch a Movie?
        </Heading>
        <Flex alignItems="center" justifyContent="space-between" mb={12}>
          <IconButton
            aria-label="Previous Movie"
            icon={<ChevronLeftIcon />}
            onClick={goToPreviousMovie}
            size="lg"
            variant="ghost"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
            transition="all 0.3s ease"
          />
          <Flex overflow="hidden" w="100%" justifyContent="center" gap={4}>
            {visibleMovieImages.map((src, index) => (
              <MotionBox
                key={`movie-${src}-${index}`}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05, boxShadow: shadowStyles.hover }}
                transition={{ duration: 0.3 }}
                cursor="pointer"
                onClick={handleMovieImageClick}
                style={{ boxShadow: shadowStyles.base }}
              >
                <Image
                  src={src}
                  alt={`Movie Slide ${index + 1}`}
                  objectFit="cover"
                  w={{ base: '100%', md: '30%' }}
                  h="300px"
                  borderRadius="md"
                  fallbackSrc="https://placehold.co/300x300?text=Movie+Image"
                />
              </MotionBox>
            ))}
          </Flex>
          <IconButton
            aria-label="Next Movie"
            icon={<ChevronRightIcon />}
            onClick={goToNextMovie}
            size="lg"
            variant="ghost"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
            transition="all 0.3s ease"
          />
        </Flex>
        <Text mt={6} textAlign="center" fontSize="md" color={textColor} mb={12}>
          Here in this website, you can catch the latest OTT movie updates in multiple languages like Malayalam, Tamil, Telugu, Kannada, Hindi, and English. Whether you're craving a gripping Malayalam thriller, a colorful Tamil family drama, a high-energy Telugu action flick, a heartfelt Kannada story, a grand Hindi blockbuster, or a sleek English series, we've got it all. We update daily, so you're always in the loop with fresh releases, trending titles, and hidden gems across your favorite streaming platforms. Just browse, pick your language, and find your next binge-worthy movie or show in a snap!
        </Text>

        {/* Gadget Section */}
        <Heading as="h1" size="xl" textAlign="center" mb={6} color={textColor}>
          Are You Confused with Which Gadget is Good?
        </Heading>
        <Flex alignItems="center" justifyContent="space-between" mb={12}>
          <IconButton
            aria-label="Previous Gadget"
            icon={<ChevronLeftIcon />}
            onClick={goToPreviousGadget}
            size="lg"
            variant="ghost"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
            transition="all 0.3s ease"
          />
          <Flex overflow="hidden" w="100%" justifyContent="center" gap={4}>
            {visibleGadgetImages.map((src, index) => (
              <MotionBox
                key={`gadget-${src}-${index}`}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05, boxShadow: shadowStyles.hover }}
                transition={{ duration: 0.3 }}
                cursor="pointer"
                onClick={handleGadgetImageClick}
                style={{ boxShadow: shadowStyles.base }}
              >
                <Image
                  src={src}
                  alt={`Gadget Slide ${index + 1}`}
                  objectFit="cover"
                  w={{ base: '100%', md: '30%' }}
                  h="300px"
                  borderRadius="md"
                  fallbackSrc="https://placehold.co/300x300?text=Gadget+Image"
                />
              </MotionBox>
            ))}
          </Flex>
          <IconButton
            aria-label="Next Gadget"
            icon={<ChevronRightIcon />}
            onClick={goToNextGadget}
            size="lg"
            variant="ghost"
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
            transition="all 0.3s ease"
          />
        </Flex>
        <Text mt={6} textAlign="center" fontSize="md" color={textColor}>
          Here in this website, you can find the best gadget reviews to clear up your confusion and pick the perfect tech for you. We cover the latest releases like foldable phones, smartwatches, gaming handhelds, and more, with honest insights on what's worth your money. Whether you're eyeing a new device in Kerala, across India, or globally, our daily updates in Malayalam and English break down features, performance, and prices, so you can shop smart and stay ahead of the tech curve!
        </Text>
      </Box>
    </>
  );
};

export default Home;