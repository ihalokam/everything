import React from 'react';
import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon, Button, Link, useColorModeValue, Fade, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const Privacy = () => {
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
              Your Privacy Matters to Us
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="3xl"
              mt={4}
              mx="auto"
              textAlign="center"
            >
              At IhaLokam, we’re committed to keeping your trust. Our Privacy Policy explains how we handle your information with care, so you can explore our content worry-free. Let’s dive in!
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
                  1. Information We Collect
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  We value your privacy and only collect minimal information to improve your experience:
                </Text>
                <List spacing={3} mt={2}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    <strong>Non-Personal Data:</strong> We may collect anonymized data like browsing behavior or device information via cookies and analytics tools to enhance our website.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    <strong>Voluntary Information:</strong> If you contact us (e.g., via email), we collect only the information you provide, like your name or email address.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  2. How We Use Your Information
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Your information helps us make IhaLokam better for you:
                </Text>
                <List spacing={3} mt={2}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    To improve our website’s functionality and content based on usage patterns.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    To respond to your inquiries or feedback when you reach out to us.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    To serve relevant ads through third-party partners like Google AdSense.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  3. TMDb Data Usage
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Our movie data and images are sourced from{' '}
                  <Link href="https://www.themoviedb.org/" isExternal color={headingColor} fontWeight="semibold">
                    The Movie Database (TMDb)
                  </Link>
                  . We use this data in compliance with TMDb’s terms to provide you with movie updates and images. We do not collect personal information through this data.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  4. Cookies and Analytics
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  We use cookies and analytics tools (e.g., Google Analytics) to understand how you interact with IhaLokam. These tools collect anonymized data to help us improve our content and user experience. You can manage cookie preferences through your browser settings.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  5. Third-Party Services
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  IhaLokam may include third-party ads or links (e.g., via Google AdSense or TMDb). These third parties may collect data as per their own privacy policies, which we do not control. We encourage you to review their policies before interacting.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  6. Data Security
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  We take reasonable steps to protect your information, but no online platform is 100% secure. We strive to keep your data safe and only store what’s necessary.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  7. Your Rights
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  You have the right to:
                </Text>
                <List spacing={3} mt={2}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Request information about the data we hold about you.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Opt out of non-essential cookies via your browser.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color={headingColor} />
                    Contact us to address any privacy concerns.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  8. Changes to This Policy
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  We may update this Privacy Policy from time to time. Changes will be posted here, and your continued use of IhaLokam indicates acceptance of the updated policy.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  9. Contact Us
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Got questions about your privacy? Reach out to us at{' '}
                  <Link href="mailto:ihalokamofficial@gmail.com" color={headingColor} fontWeight="semibold">
                    ihalokamofficial@gmail.com
                  </Link>
                  . We’re here to make sure you feel safe and valued!
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
                Thank you for trusting IhaLokam. We’re here to bring you joy, knowledge, and peace of mind. Let’s keep exploring together!
              </Text>
              <Button
              onClick={
                () => window.location.href = '/'
              }
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

export default Privacy;
