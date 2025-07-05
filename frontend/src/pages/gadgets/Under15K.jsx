import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  useColorModeValue,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MotionBox = motion(Box);

const phoneData = [
  {
    name: 'CMF Phone 1',
    image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740667980/Croma%20Assets/Communication/Mobiles/Images/308333_0_rflzvo.png?tr=w-600',
    specs: {
      display: '6.67-inch AMOLED, 120Hz',
      processor: 'MediaTek Dimensity 7300',
      cameras: '50MP + 2MP rear, 16MP front',
      battery: '5000mAh, 33W charging (no charger included)',
      other: 'In-display fingerprint scanner, hybrid SIM slot (supports microSD), Nothing OS',
    },
    pros: [
      'Smooth and bloatware-free Nothing OS with timely updates',
      'Vibrant AMOLED display with deep blacks and bright colors',
      'Decent performance for gaming (supports 60fps in BGMI)',
      'Unique back panel design (customizable with accessories)',
    ],
    cons: [
      'Mono speaker (not as immersive as stereo)',
      'No charger in the box',
      'Average camera performance out of the box (improved with updates)',
      'Low-quality back panel when swapped',
      'Charging speed is slower compared to competitors (33W vs. 45W)',
    ],
    price: '₹14,250 (with offers on Flipkart)',
    whyChoose: 'Perfect for Nothing fans or those who want a clean, ad-free software experience.',
  },
  {
    name: 'Realme P3',
    image: 'https://m.media-amazon.com/images/I/712C64bIIEL.jpg',
    specs: {
      display: '6.7-inch AMOLED, 120Hz',
      processor: 'Qualcomm Snapdragon 6 Gen 1',
      cameras: '50MP dual rear, 16MP front',
      battery: '6000mAh, 45W charging (charger included)',
      other: 'Dual stereo speakers, IP69 rating, hybrid SIM slot',
    },
    pros: [
      'Large 6000mAh battery lasts up to 1.5 days',
      'Fast 45W charging with charger included',
      'Good gaming performance (up to 90fps in BGMI)',
      'IP69 rating for water and dust resistance',
      'Stylish gaming-inspired design',
    ],
    cons: [
      'No ultra-wide camera',
      'No 4K video stabilization',
      'Some bloatware (can be removed during setup)',
      'Noticeable bezels around the display',
    ],
    price: '₹14,000 (with discounts on Flipkart)',
    whyChoose: 'Ideal for gamers and those who prioritize battery life.',
  },
  {
    name: 'Samsung Galaxy M35',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-m356bzabins/gallery/in-galaxy-m35-5g-sm-m356-sm-m356bzabins-542682616?$684_547_PNG$',
    specs: {
      display: '6.6-inch Super AMOLED, 120Hz',
      processor: 'Exynos 1380',
      cameras: '50MP + 5MP ultra-wide + 2MP macro, 13MP front',
      battery: '6000mAh, 25W charging (no charger included)',
      other: 'Dual stereo speakers with Dolby Atmos, Gorilla Glass Victus Plus, hybrid SIM slot',
    },
    pros: [
      'Stunning Super AMOLED display with vibrant colors',
      '5MP ultra-wide camera (rare in this segment)',
      'Four years of Android updates (up to Android 18)',
      'Stable 4K video recording',
      'Secure Folder and NFC support',
    ],
    cons: [
      'Slow 25W charging takes around 2 hours',
      'No charger in the box',
      'Heavy (225g) with thick bezels',
      'Not ideal for heavy gaming due to Exynos chipset',
      'Bloatware-heavy software',
    ],
    price: '₹13,799 (on Flipkart)',
    whyChoose: 'Great for Samsung fans and those who want a reliable phone with a great display and long software support.',
  },
  {
    name: 'Infinix Note 50S',
    image: 'https://infinixmobiles.in/cdn/shop/files/1_55bc3c82-0ce5-49a2-b01f-a9bf58cd0b22.png?v=1744868942',
    specs: {
      display: '6.7-inch AMOLED, up to 144Hz',
      processor: 'MediaTek Dimensity 7300',
      cameras: '64MP dual rear, 13MP front',
      battery: '5500mAh, 45W charging (charger included)',
      other: 'JBL-tuned stereo speakers, IP64 rating, Gorilla Glass 4',
    },
    pros: [
      'Sleek curved AMOLED display with minimal bezels',
      'Fast 45W charging with charger included',
      'Decent camera performance with stable 4K video',
      'Slim and lightweight design',
      'JBL-tuned stereo speakers',
    ],
    cons: [
      'No microSD card slot',
      '144Hz refresh rate limited to specific apps',
      'Poor track record for software updates',
      'No headphone jack',
    ],
    price: '₹14,999 (with offers on Flipkart)',
    whyChoose: 'Perfect for those who want a premium-looking phone with a curved display.',
  },
  {
    name: 'Vivo V44X / iQOO Z12H',
    image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1744364008774/0402571cebf4f9ce68f8f10cb8c0c227.png',
    specs: {
      display: '6.7-inch IPS LCD',
      processor: 'MediaTek Dimensity 7300',
      cameras: '50MP dual rear, 8MP front',
      battery: '6500mAh, 44W charging',
      other: 'Stereo speakers, IP64 rating, UFS 3 storage',
    },
    pros: [
      'Massive 6500mAh battery lasts up to 2 days',
      'Great gaming performance (60fps in BGMI with good gyro)',
      'UFS 3 storage for faster app loading',
      'Minimalist design with dynamic notification light',
      'Affordable at ₹13,500 on Amazon (iQOO branding)',
    ],
    cons: [
      'IPS LCD display (not AMOLED like others)',
      'No ultra-wide camera',
      'No microSD card slot',
      'Side-mounted fingerprint scanner',
    ],
    price: '₹13,500 (on Amazon)',
    whyChoose: 'Choose for unbeatable battery life and gaming performance.',
  },
];

const considerations = [
  {
    title: 'Display Quality',
    whyMatters: 'A good display makes videos, games, and scrolling more enjoyable. Most phones in this range offer AMOLED or IPS LCD displays.',
    whatToLookFor: 'Prefer AMOLED for vibrant colors and deep blacks. Check for at least a 120Hz refresh rate for smooth scrolling. Look at bezel size—smaller bezels give a modern look. Ensure the display is bright enough for outdoor use (at least 500 nits).',
    tip: 'If you watch a lot of videos or play games, prioritize AMOLED displays like those on the CMF Phone 1 or Samsung Galaxy M35.',
  },
  {
    title: 'Performance and Processor',
    whyMatters: 'The processor determines how fast the phone runs apps and games.',
    whatToLookFor: 'Choose chipsets like MediaTek Dimensity 7300 or Qualcomm Snapdragon 6 Gen 1 for smooth performance. For gaming, ensure the phone supports high frame rates (e.g., 60fps or 90fps in BGMI). Check for UFS storage (faster than eMMC) for quick app loading.',
    tip: 'Gamers should consider the Realme P3 or Vivo V44X/iQOO Z12H for their powerful chipsets.',
  },
  {
    title: 'Camera Performance',
    whyMatters: 'A good camera captures clear photos and videos for social media or memories.',
    whatToLookFor: 'Look for a 50MP main camera for decent photos. An ultra-wide camera (like on the Samsung Galaxy M35) is great for group shots or landscapes. Check if the phone supports stable video recording (at least 1080p). A good selfie camera (8MP or higher) is a bonus.',
    tip: 'If photography is key, the Samsung Galaxy M35 offers an ultra-wide camera, which is rare in this segment.',
  },
  {
    title: 'Battery Life and Charging',
    whyMatters: 'A large battery ensures the phone lasts longer, and fast charging saves time.',
    whatToLookFor: 'Aim for at least a 5000mAh battery for all-day use. Fast charging (33W or higher) is ideal. Check if the charger is included in the box, as some brands (e.g., Samsung, Nothing) skip it.',
    tip: 'The Vivo V44X/iQOO Z12H’s 6500mAh battery is perfect for heavy users needing 1.5–2 days of backup.',
  },
  {
    title: 'Software Experience',
    whyMatters: 'Clean software with fewer pre-installed apps (bloatware) is smoother and easier to use.',
    whatToLookFor: 'Prefer phones with minimal bloatware, like the CMF Phone 1’s Nothing OS. Check for promised software updates (e.g., Samsung offers 4 years). Look for a user-friendly interface with smooth animations.',
    tip: 'If you hate ads and bloatware, go for the CMF Phone 1. If you want long-term updates, choose the Samsung Galaxy M35.',
  },
  {
    title: 'Build Quality and Design',
    whyMatters: 'A sturdy and stylish phone feels premium and lasts longer.',
    whatToLookFor: 'Check for Gorilla Glass protection and IP ratings (e.g., IP64 or IP69) for water and dust resistance. Lightweight and slim designs (like the Infinix Note 50S) are easier to hold. Avoid phones with poor-quality materials.',
    tip: 'The Realme P3’s gaming-inspired design and IP69 rating make it durable and stylish.',
  },
  {
    title: 'Additional Features',
    whyMatters: 'Extra features can enhance your experience and add value.',
    whatToLookFor: 'Look for dual stereo speakers for better audio, an in-display fingerprint scanner for convenience, and a microSD slot for extra storage. A headphone jack is rare but useful. Features like NFC or notification lights (e.g., Infinix Note 50S) are bonuses.',
    tip: 'If you love music, choose phones with stereo speakers like the Realme P3 or Infinix Note 50S.',
  },
  {
    title: 'Brand Reliability and After-Sales Service',
    whyMatters: 'Good after-sales support ensures quick repairs and updates.',
    whatToLookFor: 'Brands like Samsung and Vivo have widespread service centers. Check the brand’s update track record—avoid brands like Infinix if long-term updates are a priority.',
    tip: 'Samsung’s 4-year update promise makes the Galaxy M35 a safe long-term choice.',
  },
  {
    title: 'Price and Offers',
    whyMatters: 'Discounts can help you get more features within your budget.',
    whatToLookFor: 'Check platforms like Flipkart and Amazon for bank offers (e.g., ₹750–₹1000 off). Compare prices across platforms, as some phones (e.g., Samsung Galaxy M35) may be cheaper on Flipkart.',
    tip: 'Always check for seasonal sales or festive offers to maximize savings.',
  },
];

const Under15K = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const cardBg = useColorModeValue('white', 'gray.800');
  const buttonBg = useColorModeValue('teal.500', 'teal.300');
  const buttonHoverBg = useColorModeValue('teal.600', 'teal.400');
  const accordionBg = useColorModeValue('gray.50', 'gray.700');

  // Auto-scroll for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % phoneData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + phoneData.length) % phoneData.length);
  };

  const goToNext = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % phoneData.length);
  };

  const visibleImages = [
    phoneData[carouselIndex].image,
    phoneData[(carouselIndex + 1) % phoneData.length].image,
    phoneData[(carouselIndex + 2) % phoneData.length].image,
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

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

  return (<> 
  <Helmet>
    <title>Best Phones Under ₹15,000 in India (July 2025) | AMOLED, Gaming & Battery Champs</title>
    <meta
      name="description"
      content="Explore the top smartphones under ₹15,000 in India for July 2025. Compare features like AMOLED display, gaming performance, camera, and battery life. Learn key factors to consider before buying. Best Flipkart & Amazon deals included!"
    />
    <meta
      name="keywords"
      content="best phones under 15000, gaming phones under 15000, AMOLED phones under 15000, budget smartphones July 2025, flipkart amazon mobile deals, phone buying guide"
    />
  </Helmet>

    <Box maxW="1200px" mx="auto" py={10} px={{ base: 4, md: 0 }}>

      {/* Header */}
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        mb={8}
        color={textColor}
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
      >
        Best Phones Under ₹15,000 in India (2025)
      </Heading>
      <Text fontSize="lg" textAlign="center" color={textColor} mb={12} maxW="800px" mx="auto">
        Looking for a great smartphone under ₹15,000? This budget range offers excellent options with impressive features like AMOLED displays, powerful chipsets, and good cameras. Explore our top picks below, complete with specs, pros, cons, and the best deals on Flipkart and Amazon.
      </Text>

      {/* Carousel */}
      <Flex alignItems="center" justifyContent="space-between" mb={12}>
        <IconButton
          aria-label="Previous Phone"
          icon={<ChevronLeftIcon />}
          onClick={goToPrevious}
          size="lg"
          variant="ghost"
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
          transition="all 0.3s ease"
        />
        <Flex overflow="hidden" w="100%" justifyContent="center" gap={4}>
          {visibleImages.map((src, index) => (
            <MotionBox
              key={`carousel-${src}-${index}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05, boxShadow: shadowStyles.hover }}
              transition={{ duration: 0.3 }}
              style={{ boxShadow: shadowStyles.base }}
              cursor="pointer"
            >
              <Image
                src={src}
                alt={`Phone Slide ${index + 1}`}
                objectFit="contain"
                w={{ base: '100%', md: '33%' }}
                h="auto"
                maxH="300px"
                borderRadius="md"
                fallbackSrc="https://placehold.co/300x300?text=Phone+Image"
              />
            </MotionBox>
          ))}
        </Flex>
        <IconButton
          aria-label="Next Phone"
          icon={<ChevronRightIcon />}
          onClick={goToNext}
          size="lg"
          variant="ghost"
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700'), transform: 'scale(1.1)' }}
          transition="all 0.3s ease"
        />
      </Flex>

      {/* Phone Cards */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
        mb={12}
      >
        {phoneData.map((phone, index) => (
          <MotionBox
            key={phone.name}
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
              src={phone.image}
              alt={phone.name}
              objectFit="contain"
              w="100%"
              h="auto"
              maxH="200px"
              borderRadius="md"
              mb={4}
              fallbackSrc="https://placehold.co/300x200?text=Phone+Image"
            />
            <Heading as="h3" size="lg" mb={3} color={textColor}>
              {phone.name}
            </Heading>
            <Text fontSize="md" fontWeight="bold" mb={2} color={textColor}>
              Price: {phone.price}
            </Text>
            <Box mb={4}>
              <Text fontSize="md" fontWeight="semibold" mb={1} color={textColor}>
                Specifications:
              </Text>
              {Object.entries(phone.specs).map(([key, value]) => (
                <Text key={key} fontSize="sm" color={textColor}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </Text>
              ))}
            </Box>
            <Box mb={4}>
              <Text fontSize="md" fontWeight="semibold" mb={1} color={textColor}>
                Pros:
              </Text>
              <ul>
                {phone.pros.map((pro, i) => (
                  <Text as="li" key={i} fontSize="sm" color={textColor}>
                    {pro}
                  </Text>
                ))}
              </ul>
            </Box>
            <Box mb={4}>
              <Text fontSize="md" fontWeight="semibold" mb={1} color={textColor}>
                Cons:
              </Text>
              <ul>
                {phone.cons.map((con, i) => (
                  <Text as="li" key={i} fontSize="sm" color={textColor}>
                    {con}
                  </Text>
                ))}
              </ul>
            </Box>
            <Text fontSize="md" mb={4} color={textColor}>
              <strong>Why Choose It?</strong> {phone.whyChoose}
            </Text>
            <Button
              bg={buttonBg}
              color="white"
              _hover={{ bg: buttonHoverBg }}
              size="md"
              w="full"
              onClick={() => navigate('/buy-now')}
            >
              Check Deals
            </Button>
          </MotionBox>
        ))}
      </Grid>

      {/* Final Thoughts */}
      <Box textAlign="center" mb={12}>
        <Heading as="h2" size="xl" mb={6} color={textColor}>
          Final Thoughts
        </Heading>
        <Text fontSize="lg" color={textColor} maxW="800px" mx="auto">
          Each phone in this list has unique strengths. The CMF Phone 1 offers a clean software experience, the Realme P3 excels in battery life, the Samsung Galaxy M35 provides a premium display and long updates, the Infinix Note 50S has a stylish curved display, and the Vivo V44X/iQOO Z12H is a gaming and battery champion. Consider your priorities—display, battery, camera, or software—and check Flipkart or Amazon for the latest offers to get these phones under ₹15,000.
        </Text>
      </Box>

      {/* What to Consider Before Buying */}
      <Box textAlign="left" mb={12}>
        <Heading as="h2" size="xl" mb={6} color={textColor}>
          What to Consider Before Buying a Phone Under ₹15,000
        </Heading>
        <Text fontSize="lg" color={textColor} mb={8} maxW="800px">
          Choosing the right phone in the ₹15,000 range can be tricky with so many options. Here are the key factors to ensure you get the best value for your money.
        </Text>
        <VStack spacing={4} align="start" maxW="800px">
          <Accordion allowToggle>
            {considerations.map((item, index) => (
              <MotionBox
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <AccordionItem
                  border="none"
                  bg={accordionBg}
                  borderRadius="lg"
                  mb={4}
                  boxShadow={shadowStyles.base}
                  _hover={{ boxShadow: shadowStyles.hover, transform: 'translateY(-5px)' }}
                  transition="all 0.3s ease"
                >
                  <AccordionButton p={4}>
                    <Box flex="1" textAlign="left">
                      <Heading as="h3" size="md" color={textColor}>
                        {index + 1}. {item.title}
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} px={6} textAlign="left">
                    <Text fontSize="md" color={textColor} mb={2}>
                      <strong>Why It Matters:</strong> {item.whyMatters}
                    </Text>
                    <Text fontSize="md" color={textColor} mb={2}>
                      <strong>What to Look For:</strong> {item.whatToLookFor}
                    </Text>
                    <Text fontSize="md" color={textColor}>
                      <strong>Tip:</strong> {item.tip}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </MotionBox>
            ))}
          </Accordion>
        </VStack>
      </Box>
    </Box>
  </>
  );
};

export default Under15K;