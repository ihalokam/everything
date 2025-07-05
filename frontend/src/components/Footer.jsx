
import { Box, Container, SimpleGrid, Heading, Text, Link, VStack, HStack, Icon, Divider, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// Motion component for animations
const MotionBox = motion(Box);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const hoverEffect = {
  scale: 1.1,
  transition: { duration: 0.3, ease: 'easeOut' },
};

const socialHover = {
  scale: 1.2,
  rotate: 5,
  transition: { duration: 0.3, ease: 'easeOut' },
};

const Footer = () => {
  const bgColor = useColorModeValue('blue.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'cyan.100');
  const headingColor = useColorModeValue('blue.800', 'cyan.200');
  const linkColor = useColorModeValue('blue.600', 'cyan.200');
  const borderColor = useColorModeValue('blue.100', 'gray.700');
  const gradientBg = useColorModeValue(
    'linear(to-b, blue.100, cyan.50)',
    'linear(to-b, blue.900, gray.800)'
  );

  return (
    <Box
      as="footer"
      role="contentinfo"
      bgGradient={gradientBg}
      py={{ base: 10, md: 12 }}
      borderTopWidth={1}
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={{ base: 6, md: 8 }} mb={8}>
          {/* About Section */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h4"
                size={{ base: 'sm', md: 'md' }}
                color={headingColor}
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.500, cyan.400)"
                bgClip="text"
              >
                About IhaLokam
              </Heading>
              <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                IhaLokam helps you track the latest OTT releases across languages — Malayalam, Tamil, Telugu, Hindi, English, and more.
              </Text>
            </VStack>
          </MotionBox>

          {/* Quick Links */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h4"
                size={{ base: 'sm', md: 'md' }}
                color={headingColor}
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.500, cyan.400)"
                bgClip="text"
              >
                Quick Links
              </Heading>
              <VStack as="ul" align="start" spacing={2}>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/movies', label: 'Movies' },
                  { href: '/lottery', label: 'Lottery Results' },
                ].map((link) => (
                  <MotionBox as="li" key={link.href} whileHover={hoverEffect}>
                    <Link
                      href={link.href}
                      color={linkColor}
                      fontSize={{ base: 'sm', md: 'md' }}
                      _hover={{ textDecoration: 'underline', color: useColorModeValue('blue.700', 'cyan.100') }}
                      cursor="pointer"
                    >
                      {link.label}
                    </Link>
                  </MotionBox>
                ))}
              </VStack>
            </VStack>
          </MotionBox>

          {/* Social Media */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h4"
                size={{ base: 'sm', md: 'md' }}
                color={headingColor}
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.500, cyan.400)"
                bgClip="text"
              >
                Follow Us
              </Heading>
              <HStack spacing={4}>
                {[
                  {
                    href: 'https://www.facebook.com/ihalokamail/',
                    icon: FaFacebookF,
                    label: 'Facebook',
                  },
                  {
                    href: 'https://www.instagram.com/ihalokam_off/',
                    icon: FaInstagram,
                    label: 'Instagram',
                  },
                  {
                    href: 'https://www.youtube.com/channel/UCHkXfUaeaxVhlilkGD9WX2Q',
                    icon: FaYoutube,
                    label: 'YouTube',
                  },
                ].map((social) => (
                  <MotionBox key={social.href} whileHover={socialHover} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="nofollow"
                      aria-label={`Follow IhaLokam on ${social.label}`}
                      color={linkColor}
                      _hover={{ color: useColorModeValue('blue.700', 'cyan.100') }}
                      cursor="pointer"
                    >
                      <Icon as={social.icon} boxSize={{ base: 5, md: 6 }} />
                    </Link>
                  </MotionBox>
                ))}
              </HStack>
            </VStack>
          </MotionBox>

          {/* Contact Info */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h4"
                size={{ base: 'sm', md: 'md' }}
                color={headingColor}
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.500, cyan.400)"
                bgClip="text"
              >
                Contact Us
              </Heading>
              <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                Email:{' '}
                <Link
                  href="mailto:ihalokamofficial@gmail.com"
                  color={linkColor}
                  _hover={{ textDecoration: 'underline', color: useColorModeValue('blue.700', 'cyan.100') }}
                  cursor="pointer"
                >
                  ihalokamofficial@gmail.com
                </Link>
              </Text>
            </VStack>
          </MotionBox>
        </SimpleGrid>

        {/* Attribution and Legal */}
        <Divider borderColor={borderColor} mb={8} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
          {/* Attribution */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
              Movie data & images provided by{' '}
              <Link
                href="https://www.themoviedb.org/"
                target="_blank"
                color={linkColor}
                _hover={{ textDecoration: 'underline', color: useColorModeValue('blue.700', 'cyan.100') }}
                cursor="pointer"
              >
                TMDb
              </Link>
            </Text>
          </MotionBox>

          {/* Legal Links */}
          <MotionBox variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <HStack
              as="ul"
              spacing={{ base: 3, md: 4 }}
              justify={{ base: 'start', md: 'end' }}
              flexWrap="wrap"
            >
              {[
                { href: '/terms-of-service', label: 'Terms of Service' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/disclaimer', label: 'Disclaimer' },
                { href: '/about-us', label: 'About Us' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <MotionBox as="li" key={link.href} whileHover={hoverEffect}>
                  <Link
                    href={link.href}
                    color={linkColor}
                    fontSize={{ base: 'sm', md: 'md' }}
                    _hover={{ textDecoration: 'underline', color: useColorModeValue('blue.700', 'cyan.100') }}
                    cursor="pointer"
                  >
                    {link.label}
                  </Link>
                </MotionBox>
              ))}
            </HStack>
            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }} mt={3}>
              We do not host or stream any content. We only provide information and streaming availability.
            </Text>
          </MotionBox>
        </SimpleGrid>

        {/* Copyright */}
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          textAlign="center"
          mt={8}
        >
          <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
            © 2025 IhaLokam. All rights reserved.
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Footer;