
import { useState, useEffect } from 'react';
import { Box, Container, SimpleGrid, Heading, Text, Link, VStack, Card, CardBody, CardHeader, useColorModeValue, Spinner, Alert, AlertIcon, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';


// Motion component for animations
const MotionCard = motion(Card);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const hoverEffect = {
  scale: 1.1,
  boxShadow: '0 14px 22px -4px rgba(0, 0, 0, 0.15), 0 6px 8px -2px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3, ease: 'easeOut' },
};

const LotteryHome = () => {
  const [lotteries, setLotteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bgColor = useColorModeValue('blue.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('blue.800', 'cyan.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const linkColor = useColorModeValue('blue.600', 'cyan.200');
  const badgeColor = useColorModeValue('cyan.600', 'cyan.400');
  const gradientBg = useColorModeValue(
    'linear(to-b, blue.100, cyan.50)',
    'linear(to-b, blue.900, gray.900)'
  );

  // Fetch data from API
  useEffect(() => {
    const fetchLotteries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/result/');
        if (response.data.success) {
          setLotteries(response.data.data.results);
        } else {
          setError('Failed to fetch lottery results.');
        }
      } catch (err) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchLotteries();
  }, []);

  // Format date to a readable string
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Format prize amount to Indian Rupees
  const formatPrize = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Format lottery number for URL (e.g., "KR-710" -> "kr710")
  const formatLotteryNumberForUrl = (lotteryNumber) => {
    return lotteryNumber.replace('-', '').toLowerCase();
  };

  return (
    <><Helmet>
      <title>Kerala Lottery Results Today – Winning Numbers & Prize Details</title>
      <meta
        name="description"
        content="Get the latest Kerala lottery result today, including Karunya Plus, Sthree Sakthi, Bhagyathara & bumper draws. Check winning numbers, prize details and next draw dates."
      />
      <meta
        name="keywords"
        content="Kerala lottery result today, Kerala lottery results, Kerala lottery winning numbers, Karunya Plus result, Kerala bumper lottery result"
      />

    </Helmet>

      <Box bgGradient={gradientBg} py={{ base: 12, md: 16 }} minH="100vh">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl' }}
                color={headingColor}
                fontWeight="extrabold"
                lineHeight="1.2"
              >
                Your Gateway to Lottery Results
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="3xl"
                mt={4}
                mx="auto"
              >
                Welcome to IhaLokam’s lottery hub! Check the latest results, find your numbers, and see if today’s your lucky day—all in one place.
              </Text>
            </motion.div>

            {loading ? (
              <VStack py={12} spacing={4}>
                <Spinner size="xl" color={linkColor} thickness="4px" speed="0.65s" />
                <Text color={textColor} fontSize="lg">
                  Loading the latest lottery results...
                </Text>
              </VStack>
            ) : error ? (
              <Alert status="error" borderRadius="lg" maxW="2xl" mx="auto" p={4}>
                <AlertIcon />
                {error}
              </Alert>
            ) : lotteries.length === 0 ? (
              <Text color={textColor} fontSize="lg" textAlign="center">
                No lottery results available right now. Come back soon for updates!
              </Text>
            ) : (
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 5, md: 7 }}>
                {lotteries.map((lottery, index) => (
                  <Link
                    as={RouterLink}
                    to={`/lottery-result/${formatLotteryNumberForUrl(lottery.lotteryNumber)}`}
                    key={lottery._id}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <MotionCard
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      whileHover={hoverEffect}
                      bg={cardBg}
                      borderRadius="2xl"
                      overflow="hidden"
                      boxShadow="xl"
                      _hover={{ borderColor: linkColor, borderWidth: '2px' }}
                      transition="all 0.3s ease"
                      style={{ transition: 'all 0.3s ease' }}
                      position="relative"
                      minH="200px"
                    >
                      <CardHeader pb={3}>
                        <Heading
                          as="h3"
                          size={{ base: 'md', md: 'lg' }}
                          color={headingColor}
                          fontWeight="bold"
                          noOfLines={2}
                        >
                          {lottery.lotteryName}
                        </Heading>
                        <Badge
                          colorScheme="cyan"
                          fontSize={{ base: 'sm', md: 'md' }}
                          borderRadius="full"
                          px={4}
                          py={1}
                          mt={3}
                          bg={badgeColor}
                          color="white"
                        >
                          {lottery.lotteryNumber}
                        </Badge>
                      </CardHeader>
                      <CardBody pt={2}>
                        <VStack align="start" spacing={3}>
                          <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                            <strong>Draw Date:</strong> {formatDate(lottery.drawDate)}
                          </Text>
                          <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                            <strong>First Prize:</strong> {formatPrize(lottery.firstPrizeAmount)}
                          </Text>
                        </VStack>
                      </CardBody>
                    </MotionCard>
                  </Link>
                ))}
              </SimpleGrid>
            )}
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default LotteryHome;
