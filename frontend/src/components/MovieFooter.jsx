import React from 'react';
import { Box, Text, Heading, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const MovieFooter = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('teal.600', 'teal.400');
  const panelBg = useColorModeValue('white', 'gray.700');

  // Animation variants for smooth transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Define animatable boxShadow values (approximating Chakra UI's shadow tokens)
  const shadowStyles = {
    base: useColorModeValue(
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // Approx. 'md' in light mode
      '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)' // Approx. 'md' in dark mode
    ),
    hover: useColorModeValue(
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Approx. 'lg' in light mode
      '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' // Approx. 'lg' in dark mode
    ),
  };

  const sections = [
    {
      title: 'Evolution of Indian Cinema',
      content:
        'Indian cinema began over a century ago with a silent film in 1913, laying the foundation for a vibrant industry. The 1930s introduced sound, and by the 1950s, a Golden Age emerged with iconic actors like Raj Kapoor and Dilip Kumar. The 1970s brought parallel cinema, focusing on real issues, while Bollywood’s action-packed films won hearts. Today, producing over 1,500 films yearly in multiple languages, Indian cinema blends tradition with modern storytelling. Streaming platforms have taken regional stories global, earning international awards and captivating audiences with diverse narratives that reflect India’s soul.',
    },
    {
      title: 'Evolution of Malayalam Industry',
      content:
        'Malayalam cinema, or Mollywood, started in 1938 and gained prominence in the 1970s with directors like Adoor Gopalakrishnan crafting realistic stories. The 1980s saw stars like Mohanlal shine in films exploring human emotions. Known for its depth, Mollywood tackles social issues with finesse, as seen in a thriller about a family secret. Recent films have earned global praise, proving small budgets can tell big stories. With streaming platforms, Mollywood’s heartfelt narratives reach the world, showing cinema’s power to connect and inspire.',
    },
    {
      title: 'Evolution of Telugu Industry',
      content:
        'Telugu cinema, Tollywood, began in 1921 and flourished in the 1950s with mythological epics. The 2000s brought a new era with grand films that blended action and drama, captivating millions. Hyderabad’s film city became a hub for innovation, producing blockbusters that broke box-office records worldwide. Stars like Prabhas became global names, and Tollywood’s larger-than-life stories now reach audiences far beyond India, thanks to streaming platforms, making it a powerhouse of entertainment.',
    },
    {
      title: 'Evolution of Tamil Industry',
      content:
        'Tamil cinema, Kollywood, started in 1918 and grew with stars like M.G. Ramachandran, who became a cultural icon. The 1980s brought gritty dramas, while the 2000s saw technological leaps in action films. Legends like Rajinikanth made Tamil cinema a global brand, with fans across Asia. Today, Kollywood’s mix of social themes and high-octane action thrives on streaming platforms, connecting Tamil stories to a worldwide audience, proving its storytelling prowess.',
    },
    {
      title: 'Evolution of Hindi Industry',
      content:
        'Bollywood, born in 1913, became a cultural giant by the 1950s with emotional dramas. The 1970s introduced action-packed films with stars like Amitabh Bachchan. The 1990s romantics like Shah Rukh Khan ruled, and today, Bollywood’s diverse stories, from biopics to comedies, dominate. Streaming platforms have boosted its global reach, though it competes with regional films, keeping India’s cinematic heart beating strong.',
    },
    {
      title: 'Evolution of Kannada Industry',
      content:
        'Kannada cinema, Sandalwood, began in 1934 and gained depth in the 1970s with socially conscious films. Rajkumar’s classics defined the industry, while recent blockbusters have taken it global. Despite smaller budgets, Sandalwood’s heartfelt stories and innovative filmmaking shine on streaming platforms, earning Karnataka a proud place in Indian cinema.',
    },
    {
      title: 'The Brilliant Dangal and Its Success in China',
      content:
        'A 2016 film starring Aamir Khan tells the true story of a wrestler training his daughters for Olympic glory. Its emotional depth and inspiring message of gender equality struck a chord in China, where it earned over 1,300 crore rupees in 2017. The universal story and Aamir’s fame made it a phenomenon, running for months and touching millions.',
    },
    {
      title: 'Rajamouli’s Tollywood',
      content:
        'S.S. Rajamouli transformed Telugu cinema with epic films, creating global sensations. His blockbusters, with massive visuals and gripping stories, earned billions and an Oscar for a song. Rajamouli’s vision in Hyderabad’s film city has made stars like Prabhas iconic, pushing Tollywood to new heights with universal appeal.',
    },
    {
      title: 'How Mollywood Shows How a Cinema Should Be',
      content:
        'Mollywood’s Malayalam films, like a gripping psychological drama or a family thriller, show cinema’s true potential. With modest budgets, directors like Jeethu Joseph and stars like Fahadh Faasil create authentic, impactful stories. Mollywood’s focus on real issues and universal emotions sets a standard for meaningful filmmaking in India.',
    },
    {
      title: 'Mollywood as a Torchbearer of Indian Cinema',
      content:
        'Malayalam cinema leads with bold, relatable stories tackling social taboos, earning global acclaim. Its innovative directors and talented actors, like Fahadh Faasil, create films that resonate universally, inspiring other Indian industries to prioritize depth and authenticity over commercial flash.',
    },
    {
      title: 'OTT Platforms’ Rise in Indian Cinema',
      content:
        'Streaming platforms have changed Indian cinema forever, bringing regional films to millions worldwide. With massive subscriber bases, they’ve given bold stories and niche content a global stage, breaking language barriers and creating a new era of diverse, accessible filmmaking.',
    },
  ];

  const lastSection = {
    title: 'Popular Movies Across Languages',
    content: (
      <>
        <Text as="span" fontWeight="bold">Malayalam</Text> captivates with emotional thrillers and romantic hits.{' '}
        <Text as="span" fontWeight="bold">Hindi</Text> inspires with biopics and heartfelt dramas.{' '}
        <Text as="span" fontWeight="bold">Tamil</Text> thrills with action and depth.{' '}
        <Text as="span" fontWeight="bold">Telugu</Text> stuns with epic visuals.{' '}
        <Text as="span" fontWeight="bold">Kannada</Text> shines with grand and touching tales.{' '}
        <Text as="span" fontWeight="bold">English</Text> diaspora films tell India’s global stories, earning international acclaim.
      </>
    ),
  };

  return (
    <Box as="footer" bg={bgColor} py={12} px={{ base: 4, md: 8 }}>
      <Box maxW="1200px" mx="auto">
        <Accordion allowToggle>
          {[...sections, lastSection].map((section, index) => (
            <AccordionItem key={index}>
              <MotionBox
                bg={panelBg}
                p={6}
                borderRadius="md"
                boxShadow={shadowStyles.base} // Initial shadow
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ boxShadow: shadowStyles.hover, scale: 1.02 }} // Animate directly
                transition={{ duration: 0.3 }}
              >

                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h2" size="lg" color={headingColor}>
                      {section.title}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text fontSize="md" color={textColor}>
                    {section.content}
                  </Text>
                </AccordionPanel>
              </MotionBox>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default MovieFooter;