
import React from 'react';
import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, Link, useColorModeValue, Fade, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFilm } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const Contact = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('teal.600', 'teal.300');
  const gradientBg = useColorModeValue(
    'linear(to-b, teal.50, white)',
    'linear(to-b, teal.900, gray.900)'
  );
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

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
              Get in Touch with IhaLokam
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="3xl"
              mt={4}
              mx="auto"
              textAlign="center"
            >
              We love hearing from you! Whether you have a question, feedback, or just want to say hello, reach out to us. Your thoughts help us make IhaLokam even better.
            </Text>
          </SlideFade>

          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <VStack spacing={8} maxW="3xl" mx="auto">
              <Box w="full" textAlign="left">
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Contact Information
                </Heading>
                <VStack spacing={4} align="start">
                  <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                    <FaEnvelope style={{ display: 'inline', marginRight: '8px' }} />
                    Email us at:{' '}
                    <Link href="mailto:ihalokamofficial@gmail.com" color={headingColor} fontWeight="semibold">
                      ihalokamofficial@gmail.com
                    </Link>
                  </Text>
                  
                  <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                    <FaFilm style={{ display: 'inline', marginRight: '8px' }} />
                    For inquiries about movie data or images, please contact{' '}
                    <Link href="https://www.themoviedb.org/" isExternal color={headingColor} fontWeight="semibold">
                      The Movie Database (TMDb)
                    </Link>{' '}
                    directly, as our movie content is sourced from them.
                  </Text>
                </VStack>
              </Box>

              <Box w="full" bg={useColorModeValue('white', 'gray.800')} p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="md">
                <Heading as="h2" size="lg" color={headingColor} mb={6} textAlign="center">
                  Send Us a Message
                </Heading>
                <VStack spacing={4} as="form">
                  <FormControl id="name">
                    <FormLabel color={textColor}>Your Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={headingColor}
                      _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                    />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel color={textColor}>Your Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={headingColor}
                      _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                    />
                  </FormControl>
                  <FormControl id="message">
                    <FormLabel color={textColor}>Your Message</FormLabel>
                    <Textarea
                      placeholder="Tell us what’s on your mind!"
                      bg={useColorModeValue('gray.50', 'gray.700')}
                      borderColor={headingColor}
                      _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                      rows={5}
                    />
                  </FormControl>
                  <Button
                    colorScheme="teal"
                    size={{ base: 'md', md: 'lg' }}
                    w={{ base: 'full', md: 'auto' }}
                    borderRadius="full"
                    _hover={{ transform: 'scale(1.08)', boxShadow: 'lg' }}
                    transition="all 0.3s ease"
                    px={8}
                    fontWeight="medium"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>

          <SlideFade in={true} offsetY="30px" transition={{ enter: { duration: 0.8, delay: 0.6 } }}>
            <VStack spacing={6}>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={textColor}
                maxW="3xl"
                mx="auto"
                textAlign="center"
              >
                We’re excited to connect with you! Thank you for being part of the IhaLokam community. Let’s keep the conversation going!
              </Text>
              <Button
                onClick={() => window.location.href = '/'}
                colorScheme="teal"
                size={{ base: 'md', md: 'lg' }}
                mt={6}
                borderRadius="full"
                _hover={{ transform: 'scale(1.08)', boxShadow: 'lg' }}
                transition="all 0.3s ease"
                px={8}
                fontWeight="medium"
              >
                Back to Home
              </Button>
            </VStack>
          </SlideFade>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
