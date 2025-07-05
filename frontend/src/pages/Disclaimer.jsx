
import React from 'react';
import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon, Button, Link, useColorModeValue, Fade, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const Disclaimer = () => {
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
              Our Disclaimer
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="3xl"
              mt={4}
              mx="auto"
              textAlign="center"
            >
              At IhaLokam, we’re here to inform and inspire you with the best content we can offer. Our Disclaimer helps you understand the scope of our services so you can explore with confidence. Let’s keep things clear and friendly!
            </Text>
          </SlideFade>

          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <VStack spacing={8} align="start" textAlign="left" maxW="3xl" mx="auto">
              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  1. General Information
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  The content on IhaLokam, including movie updates, how-to guides, gadget reviews, blogs, and lottery results, is provided for general informational purposes only. We aim to be helpful, but our content is not professional advice.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  2. TMDb Data and Images
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Our movie data and images are sourced from{' '}
                  <Link href="https://www.themoviedb.org/" isExternal color={headingColor} fontWeight="semibold">
                    The Movie Database (TMDb)
                  </Link>
                  . We use this data in compliance with TMDb’s terms to bring you the latest movie updates. IhaLokam does not claim ownership of this content and relies on TMDb’s accuracy.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  3. Accuracy of Information
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    We strive to provide accurate and up-to-date content, but we cannot guarantee the completeness or accuracy of all information.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Lottery results and other time-sensitive data are sourced from official or reliable sources, but errors may occur.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Always verify critical information (e.g., lottery results) with official sources before taking action.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  4. Third-Party Links and Ads
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  IhaLokam may include links to third-party websites or advertisements (e.g., via Google AdSense). We are not responsible for the content, accuracy, or practices of these external sites. Engaging with them is at your own risk.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  5. No Liability
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  IhaLokam is not liable for any losses or damages arising from your use of our website or reliance on our content. Our services are provided on an "as-is" basis without warranties of any kind.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  6. User Responsibility
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  You agree to use IhaLokam’s content responsibly. Any decisions or actions you take based on our information are your own responsibility.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  7. Contact Us
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Have questions about our Disclaimer? Reach out to us at{' '}
                  <Link href="mailto:ihalokamofficial@gmail.com" color={headingColor} fontWeight="semibold">
                    ihalokamofficial@gmail.com
                  </Link>
                  . We’re here to help you feel confident and informed!
                </Text>
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
                Thank you for being part of IhaLokam’s community! We’re here to share knowledge and joy with you, every step of the way.
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

export default Disclaimer;
