import Under15K from './gadgets/Under15K';
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MotionBox = motion(Box);

const gadgetData = [
  {
    title: 'Best Phones Under ₹15,000',
    description:
      'Explore top smartphones with AMOLED displays, powerful chipsets, and great cameras, all under ₹15,000. Find the best deals on Flipkart and Amazon.',
    image:
      'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740667980/Croma%20Assets/Communication/Mobiles/Images/308333_0_rflzvo.png?tr=w-600',
    route: '/gadgets/under-15k',
  },
  
];

const Gadget = () => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const cardBg = useColorModeValue('white', 'gray.800');
  const buttonBg = useColorModeValue('teal.500', 'teal.300');
  const buttonHoverBg = useColorModeValue('teal.600', 'teal.400');

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

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
    <Box maxW="1200px" mx="auto" py={10} px={{ base: 4, md: 0 }}>
      <Helmet>
        <title>Best Gadgets in India (July 2025) | Phones, Earbuds, Smartwatches & More</title>
        <meta
          name="description"
          content="Discover the best gadgets in India for July 2025, including smartphones under ₹15,000, wireless earbuds, smartwatches, and laptops. Compare features and find top deals!"
        />
        <meta
          name="keywords"
          content="best gadgets 2025, phones under 15000, wireless earbuds, smartwatches, budget laptops, flipkart amazon deals"
        />
        <link rel="canonical" href="https://yourdomain.com/gadgets" />
      </Helmet>

      {/* Header */}
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        mb={8}
        color={textColor}
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
      >
        Best Gadgets in India (2025)
      </Heading>
      <Text fontSize="lg" textAlign="center" color={textColor} mb={12} maxW="800px" mx="auto">
        Explore our curated selection of top gadgets, from budget smartphones to wireless earbuds and smartwatches. Find the perfect device for your needs with our detailed guides and the best deals available.
      </Text>

      {/* Gadget Cards */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {gadgetData.map((gadget, index) => (
          <MotionBox
            key={gadget.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
            boxShadow={shadowStyles.base}
            _hover={{ boxShadow: shadowStyles.hover, transform: 'translateY(-5px)' }}
            p={6}
          >
            <Image
              src={gadget.image}
              alt={gadget.title}
              objectFit="contain"
              w="100%"
              h="auto"
              maxH="200px"
              borderRadius="md"
              mb={4}
              fallbackSrc="https://placehold.co/300x200?text=Gadget+Image"
            />
            <Heading as="h3" size="lg" mb={3} color={textColor}>
              {gadget.title}
            </Heading>
            <Text fontSize="md" color={textColor} mb={4}>
              {gadget.description}
            </Text>
            <Button
              bg={buttonBg}
              color="white"
              _hover={{ bg: buttonHoverBg }}
              size="md"
              w="full"
              onClick={() => navigate(gadget.route)}
            >
              View Details
            </Button>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};

export default Gadget;