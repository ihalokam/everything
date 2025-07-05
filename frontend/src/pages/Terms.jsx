
import React from 'react';
import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon, Button, Link, useColorModeValue, Fade, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const Terms = () => {
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
              Terms and Conditions
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="3xl"
              mt={4}
              mx="auto"
              textAlign="center"
            >
              Welcome to IhaLokam! We’re excited to share our world with you. Please read our Terms and Conditions to ensure a seamless and enjoyable experience on our platform.
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
                  1. Acceptance of Terms
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  By using IhaLokam, you agree to these Terms and Conditions. If you don’t agree, we kindly ask that you refrain from using our website or services.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  2. Content Usage
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Our content, including articles, guides, reviews, and lottery updates, is provided for informational purposes only.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    You may not reproduce, distribute, or modify our content without our written permission.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    While we aim for accuracy, we cannot guarantee the completeness or reliability of all information.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  3. TMDb Attribution
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Our movie data and images are provided by{' '}
                  <Link href="https://www.themoviedb.org/" isExternal color={headingColor} fontWeight="semibold">
                    The Movie Database (TMDb)
                  </Link>
                  . We use this data in accordance with TMDb’s terms of use. Any movie-related content, including release dates, cast information, and images, is sourced from TMDb and should not be reproduced without proper attribution to them.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  4. User Conduct
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Use IhaLokam responsibly and avoid posting or sharing unlawful, harmful, or inappropriate content.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Treat others with respect and refrain from any form of harassment or offensive behavior.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  5. Third-Party Links and Ads
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  IhaLokam may feature links to third-party websites or advertisements. We are not responsible for their content, accuracy, or practices. Engaging with these links or ads is at your own discretion and risk.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  6. Intellectual Property
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  All content, logos, and designs on IhaLokam, except where noted (e.g., TMDb data), are owned by or licensed to us. Unauthorized use is prohibited.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  7. Limitation of Liability
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  IhaLokam is not liable for any damages resulting from your use of our website or reliance on our content. Our services are provided on an "as-is" basis.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  8. Changes to Terms
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  We may update these Terms and Conditions periodically. Changes will be posted here, and your continued use of IhaLokam signifies acceptance of the updated terms.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  9. Contact Us
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Questions about our Terms? Reach out to us at{' '}
                  <Link href="mailto:ihalokamofficial@gmail.com" color={headingColor} fontWeight="semibold">
                    ihalokamofficial@gmail.com
                  </Link>
                  . We’re here to assist you!
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
                Thank you for joining the IhaLokam community! Let’s explore, learn, and enjoy together.
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

export default Terms;
