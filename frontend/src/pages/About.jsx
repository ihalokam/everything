import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Button, useColorModeValue, Fade, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFilm, FaLightbulb, FaMobileAlt, FaBlog, FaTicketAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const About = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('teal.600', 'teal.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientBg = useColorModeValue(
    'linear(to-b, teal.50, white)',
    'linear(to-b, teal.900, gray.900)'
  );
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const features = [
    {
      icon: FaFilm,
      title: 'Your Guide to OTT Magic',
      description:
        'Love binge-watching? We’ve got you covered with the latest on Netflix, Amazon Prime, Disney+ Hotstar, and more. From release dates to cast details and curated watchlists, we help you find your next favorite show or movie!',
    },
    {
      icon: FaLightbulb,
      title: 'How-To Hacks for Everyday Life',
      description:
        'Whether it’s fixing a tech glitch or mastering a life hack, our step-by-step guides are designed to make your life easier. We break things down so you can tackle tasks with confidence.',
    },
    {
      icon: FaMobileAlt,
      title: 'Gadget Reviews You Can Trust',
      description:
        'Shopping for a new phone, smartwatch, or gadget? Our honest, real-world reviews and comparisons help you pick the perfect device without the guesswork.',
    },
    {
      icon: FaBlog,
      title: 'Stories, Insights & Trends',
      description:
        'Dive into our blogs for a mix of pop culture, tech tips, lifestyle ideas, and thought-provoking reads. We write to spark curiosity and keep you inspired.',
    },
    {
      icon: FaTicketAlt,
      title: 'Lottery Updates, Made Simple',
      description:
        'Stay in the loop with fast, accurate updates on Kerala and other Indian lottery results. We make checking your luck as easy as a tap!',
    },
  ];

  return (
    <Box bgGradient={gradientBg} py={{ base: 12, md: 20 }} minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={{ base: 10, md: 12 }} textAlign="center">
          <SlideFade in={true} offsetY="30px" transition={{ enter: { duration: 1 } }}>
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl' }}
              color={headingColor}
              fontWeight="extrabold"
              lineHeight="1.2"
            >
              Hello, Curious Soul! Welcome to IhaLokam!
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="3xl"
              mt={4}
              mx="auto" // Ensures the text is centered horizontally
              textAlign="center" // Explicitly center-aligns the text
            >
              We’re here to open a window to the world just for you. At IhaLokam, we’re all about sparking your curiosity with fun, helpful, and trustworthy content. Whether you’re a movie buff, a tech enthusiast, or just someone looking for a little inspiration, we’ve got something special for you.
            </Text>
          </SlideFade>

          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Heading
              as="h2"
              size={{ base: 'lg', md: 'xl' }}
              color={headingColor}
              mb={{ base: 8, md: 10 }}
              fontWeight="bold"
            >
              What’s in Store for You?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
              {features.map((feature, index) => (
                <Fade
                  key={index}
                  in={inView}
                  transition={{ enter: { delay: index * 0.2, duration: 0.7 } }}
                >
                  <Box
                    bg={cardBg}
                    p={{ base: 6, md: 8 }}
                    borderRadius="xl"
                    boxShadow="md"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '2xl',
                      borderColor: headingColor,
                      borderWidth: '1px',
                    }}
                    transition="all 0.3s ease"
                    minH="250px"
                  >
                    <Icon as={feature.icon} boxSize={{ base: 10, md: 12 }} color={headingColor} mb={4} />
                    <Heading as="h3" size="md" mb={3} color={textColor} fontWeight="semibold">
                      {feature.title}
                    </Heading>
                    <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                      {feature.description}
                    </Text>
                  </Box>
                </Fade>
              ))}
            </SimpleGrid>
          </MotionBox>

          <SlideFade in={true} offsetY="30px" transition={{ enter: { duration: 0.8, delay: 0.6 } }}>
            <VStack spacing={6}>
              <Heading
                as="h2"
                size={{ base: 'lg', md: 'xl' }}
                color={headingColor}
                fontWeight="bold"
              >
                Why We’re Different
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={textColor}
                maxW="3xl"
                mx="auto"
                textAlign="center"
              >
                At IhaLokam, we believe the internet should feel like a friendly guide, not a maze. We’re passionate about creating content that’s real, reliable, and resonates with you. From families to tech geeks, we’re here to inform, entertain, and make your day a little brighter with fresh, heartfelt updates.
              </Text>
              <Button
                colorScheme="teal"
                size={{ base: 'md', md: 'lg' }}
                mt={6}
                borderRadius="full"
                _hover={{ transform: 'scale(1.08)', boxShadow: 'lg' }}
                transition="all 0.3s ease"
                px={8}
                fontWeight="medium"
              >
                Start Exploring
              </Button>
            </VStack>
          </SlideFade>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;