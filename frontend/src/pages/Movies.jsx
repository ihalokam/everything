
import { Box, Button, VStack, Heading, Text, Container, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';



// Motion components for animations
const MotionBox = motion(Box);
const MotionButton = motion(Button);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.15)',
  transition: { duration: 0.3, ease: 'easeOut' },
};

const Movies = () => {
  const languages = [
    { name: 'Malayalam', link: '/movies/mal' },
    { name: 'Telugu', link: '/movies/tel' },
    { name: 'Tamil', link: '/movies/tam' },
    { name: 'Hindi', link: '/movies/hin' },
    { name: 'Kannada', link: '/movies/kann' },
    { name: 'English', link: '/movies/eng' },
  ];

  const bgColor = useColorModeValue('blue.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'cyan.100');
  const headingColor = useColorModeValue('blue.800', 'cyan.200');
  const buttonBg = useColorModeValue('blue.600', 'cyan.600');
  const buttonHoverBg = useColorModeValue('blue.700', 'cyan.500');
  const gradientBg = useColorModeValue(
    'linear(to-b, blue.100, cyan.50)',
    'linear(to-b, blue.900, gray.800)'
  );

  return (
    <>
      <Helmet>
        <title>Latest OTT Releases India 2025 – Hindi, Tamil, Telugu, Malayalam & More</title>
        <meta
          name="description"
          content="Discover all the latest OTT movie releases in India across languages like Hindi, Tamil, Telugu, Malayalam, Kannada & English. Updated daily with new movies now streaming on Netflix, Prime Video, ZEE5, JioCinema & more."
        />
        <meta
          name="keywords"
          content="latest OTT releases India, new OTT movies 2025, Hindi Tamil Telugu Malayalam movies OTT, OTT movies today, best Indian OTT movies"
        />

      </Helmet>
      <Box bgGradient={gradientBg} minH="100vh" py={{ base: 10, md: 12 }} px={{ base: 4, md: 6 }}>
        <Container maxW="container.xl">
          <VStack spacing={{ base: 8, md: 12 }} align="stretch">
            {/* Introduction Section */}
            <MotionBox
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              textAlign="center"
            >
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl' }}
                color={headingColor}
                fontWeight="extrabold"
                bgGradient="linear(to-r, blue.500, cyan.400)"
                bgClip="text"
              >
                Amalgamation of Languages and Rising of Indian Cinema
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="3xl"
                mt={4}
                mx="auto"
              >
                Indian cinema is a vibrant mosaic of stories, emotions, and cultures, woven together by diverse languages and traditions. From the soul-stirring realism of Malayalam films to the larger-than-life spectacles of Bollywood, each industry tells stories that resonate deeply with audiences. Whether it’s the heart-pounding action of Tollywood or the cultural pride of Sandalwood, Indian cinema captures the heartbeat of a billion dreams. At IhaLokam, we celebrate this diversity, bringing you closer to the films that inspire, entertain, and unite us all in the joy of storytelling.
              </Text>
            </MotionBox>

            {/* Language Selection */}
            <MotionBox
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Heading
                as="h2"
                size={{ base: 'xl', md: '2xl' }}
                color={headingColor}
                textAlign="center"
                mb={6}
              >
                Choose a Language
              </Heading>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
                {languages.map((lang, index) => (
                  <MotionButton
                    key={index}
                    as={RouterLink}
                    to={lang.link}
                    size="lg"
                    bg={buttonBg}
                    color="white"
                    w="full"
                    py={{ base: 6, md: 8 }}
                    fontSize={{ base: 'lg', md: 'xl' }}
                    borderRadius="lg"
                    boxShadow="md"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                    cursor="pointer"
                    _hover={{ bg: buttonHoverBg }}
                    aria-label={`Navigate to ${lang.name} movies page`}
                  >
                    {lang.name}
                  </MotionButton>
                ))}
              </SimpleGrid>
            </MotionBox>

            {/* Regional Cinema Sections */}
            <VStack spacing={{ base: 8, md: 10 }} align="stretch">
              {/* Malayalam */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  India’s Best Regional Industry with Realistic Movies: Malayalam
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Malayalam cinema is a treasure trove of heartfelt stories that feel like a warm embrace. Known for its raw, realistic narratives, it captures the essence of human emotions and societal truths. Films like *Drishyam* weave gripping tales that linger in your heart, while *Premam* celebrates love and youth with unmatched charm. This industry thrives on authenticity, tackling social issues with grace and depth. At IhaLokam, we cherish Malayalam cinema’s ability to tell stories that resonate universally, inviting you to connect with characters and moments that feel like home.
                </Text>
              </MotionBox>

              {/* Kollywood and Tollywood */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Mass Masala Movies of Kollywood and Tollywood
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Kollywood (Tamil) and Tollywood (Telugu) are the beating heart of high-octane entertainment, where every frame bursts with energy and emotion. These industries craft mass masala films that thrill with action, romance, and music that stays with you. Think of *Baahubali*’s epic grandeur or *Jailer*’s electrifying drama—stories that sweep you into a world of larger-than-life heroes. At IhaLokam, we love how Kollywood and Tollywood blend spectacle with soul, uniting fans in shared excitement. Dive into these vibrant films that make every moment a celebration of cinema.
                </Text>
              </MotionBox>

              {/* Sandalwood and KGF */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Sandalwood and KGF
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Sandalwood, the Kannada film industry, has carved a bold legacy with its fearless storytelling and raw passion. *KGF: Chapter 1* and *Chapter 2* redefined Indian cinema with their gritty action and universal appeal, turning local stories into global phenomena. These films capture the dreams and struggles of everyday people, resonating deeply with audiences. Sandalwood’s rise reflects the power of authentic narratives told with heart. At IhaLokam, we’re thrilled to share Sandalwood’s journey, inviting you to experience the cinematic revolution that’s captivating fans worldwide.
                </Text>
              </MotionBox>

              {/* Money Drawing Bollywood */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Money Drawing Bollywood
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Bollywood, India’s cinematic powerhouse, weaves magic with its dazzling mix of romance, drama, and music. Films like *Dilwale Dulhania Le Jayenge* tug at your heartstrings, while *Pathaan* delivers pulse-pounding action. Bollywood’s global allure lies in its ability to tell stories that feel personal yet universal, wrapped in vibrant visuals and soulful songs. It’s where dreams meet reality, captivating millions with its star-studded charm. At IhaLokam, we celebrate Bollywood’s emotional depth and grandeur, inviting you to lose yourself in stories that spark joy and inspiration.
                </Text>
              </MotionBox>

              {/* Rajamouli’s Tollywood */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Rajamouli’s Tollywood
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  SS Rajamouli has redefined Tollywood with his visionary storytelling, turning Telugu cinema into a global sensation. Films like *Baahubali* and *RRR* are not just movies—they’re epic journeys that blend myth, emotion, and breathtaking visuals. Rajamouli’s genius lies in crafting stories that resonate with the heart, from heroic triumphs to tender moments. His work has elevated Tollywood’s pride, inspiring fans worldwide. At IhaLokam, we’re in awe of Rajamouli’s ability to weave cinematic magic, and we invite you to experience the grandeur of his unforgettable tales.
                </Text>
              </MotionBox>

              {/* Prabhas’s Rising Stardom */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Prabhas’s Rising Stardom
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Prabhas has become the heartbeat of Indian cinema, rising from Tollywood to global stardom with his magnetic presence. From the iconic *Baahubali* to *Saaho*, his performances exude raw intensity and warmth, connecting deeply with audiences. Prabhas’s journey reflects the dreams of countless fans, blending humility with larger-than-life roles. His ability to carry epic narratives with emotional depth makes him a true icon. At IhaLokam, we celebrate Prabhas’s stardom, inviting you to explore his films that ignite passion and inspire awe in every frame.
                </Text>
              </MotionBox>

              {/* Emergence of Malayalam, an Expanding Market */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Emergence of Malayalam, an Expanding Market
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Malayalam cinema is blossoming into a global force, captivating audiences with its authentic storytelling and bold creativity. Films like *Lucifer* and *Virus* showcase its knack for blending emotional depth with universal themes. As streaming platforms amplify its reach, Malayalam cinema’s market is expanding, drawing fans worldwide who crave meaningful stories. Its focus on real-life struggles and triumphs feels like a conversation with a friend. At IhaLokam, we’re excited to share Malayalam’s rise, inviting you to discover films that touch your soul and broaden your horizons.
                </Text>
              </MotionBox>

              {/* Complicated Industry: Bollywood */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  as="h3"
                  size={{ base: 'md', md: 'lg' }}
                  color={headingColor}
                  mb={3}
                  fontWeight="bold"
                >
                  Complicated Industry: Bollywood
                </Heading>
                <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                  Bollywood is a dazzling yet complex world, balancing starry glamour with creative challenges. Its lavish productions like *Jawan* captivate millions, but navigating commercial pressures and diverse audiences can be tricky. Still, Bollywood’s heart lies in its ability to tell stories that resonate—tales of love, struggle, and triumph that feel deeply personal. From iconic classics to bold new voices, it’s a rollercoaster of emotions. At IhaLokam, we embrace Bollywood’s vibrant chaos, inviting you to dive into its colorful stories that spark joy and reflection.
                </Text>
              </MotionBox>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Movies;
