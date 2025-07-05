import LotteryFooter from '../../components/LotteryFooter';
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
  Icon,
  Divider,
  Badge,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTicketAlt } from 'react-icons/fa';
import axios from '../../api/axios';

// Motion component for animations
const MotionBox = motion(Box);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3, ease: 'easeOut' },
};

const Kr710 = () => {
  const [lottery, setLottery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Color themes
  const bg = useColorModeValue('blue.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800'); // Darker card background for dark mode
  const textColor = useColorModeValue('gray.700', 'cyan.100'); // Brighter cyan text for dark mode
  const accent = useColorModeValue('blue.700', 'cyan.200');
  const border = useColorModeValue('blue.100', 'gray.700');
  const badgeBg = useColorModeValue('blue.600', 'blue.500'); // Adjusted badge color for dark mode contrast
  const gradientBg = useColorModeValue(
    'linear(to-b, blue.100, cyan.50)',
    'linear(to-b, blue.900, gray.800)' // Darker, cohesive gradient
  );

  useEffect(() => {
    const fetchLottery = async () => {
      try {
        const res = await axios.get('/result/KR-710');
        console.log('KR-710 API Response:', res);
        
        if (res.data && res.data.success) {
          setLottery(res.data.data);
        } else {
          setError('Failed to fetch lottery details.');
        }
      } catch (err) {
        console.error('KR-710 API Error:', err);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };
    fetchLottery();
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const formatPrize = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);

  const formatTickets = (tickets = [], ticketEndings = []) => {
    return (
      <Wrap spacing={2} align="center">
        {tickets.map((t, index) => (
          <WrapItem key={`ticket-${index}`}>
            <Badge
              fontSize={{ base: 'sm', md: 'md' }}
              borderRadius="full"
              px={3}
              py={1}
              bg={badgeBg}
              color="white"
            >
              {t.number}{t.location ? ` (${t.location})` : ''}
            </Badge>
          </WrapItem>
        ))}
        {ticketEndings.map((ending, index) => (
          <WrapItem key={`ending-${index}`}>
            <Badge
              fontSize={{ base: 'sm', md: 'md' }}
              borderRadius="full"
              px={3}
              py={1}
              bg={badgeBg}
              color="white"
            >
              {ending}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    );
  };

  return (
    <Box bgGradient={gradientBg} py={{ base: 12, md: 16 }} minH="100vh">
      <Container maxW="container.lg">
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl' }}
              color={accent}
              fontWeight="extrabold"
              textAlign="center"
            >
              {lottery ? `${lottery.lotteryName} (${lottery.lotteryNumber})` : 'KR-710 Lottery Results'}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              maxW="2xl"
              mt={4}
              mx="auto"
              textAlign="center"
            >
              Explore the latest results for the KR-710 lottery draw. See if today’s your lucky day!
            </Text>
          </motion.div>

          {loading ? (
            <VStack py={12} spacing={4}>
              <Spinner size="xl" color={accent} thickness="4px" speed="0.65s" />
              <Text color={textColor} fontSize="lg" fontWeight="medium">
                Loading lottery details...
              </Text>
            </VStack>
          ) : error ? (
            <Alert status="error" borderRadius="lg" maxW="lg" mx="auto" p={4}>
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
              {/* Lottery Info */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                p={{ base: 5, md: 6 }}
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={border}
                textAlign="center"
                _hover={hoverEffect}
              >
                <Icon as={FaTicketAlt} boxSize={{ base: 8, md: 10 }} color={accent} mb={4} />
                <Badge
                  fontSize={{ base: 'md', md: 'lg' }}
                  borderRadius="full"
                  px={4}
                  py={1}
                  mb={3}
                  bg={accent}
                  color="white"
                >
                  {lottery.lotteryNumber}
                </Badge>
                <Heading
                  size={{ base: 'lg', md: 'xl' }}
                  bgGradient="linear(to-r, blue.500, cyan.400)"
                  bgClip="text"
                  fontWeight="extrabold"
                >
                  {lottery.lotteryName}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} mt={3}>
                  <b>Draw Date:</b> {formatDate(lottery.drawDate)}
                </Text>
              </MotionBox>

              {/* Prize Announcements */}
              <MotionBox
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={border}
                px={{ base: 5, md: 6 }}
                py={{ base: 6, md: 8 }}
              >
                <Heading size={{ base: 'md', md: 'lg' }} color={accent} mb={6} textAlign="center">
                  Prize Results
                </Heading>
                <Stack spacing={{ base: 5, md: 6 }}>
                  {lottery.prizes.map((prize, idx) => (
                    <Box key={idx} textAlign="left">
                      <Heading
                        size={{ base: 'sm', md: 'md' }}
                        color={textColor}
                        fontWeight="semibold"
                        mb={2}
                      >
                        🏆 {prize.label} Prize
                      </Heading>
                      <Text fontSize={{ base: 'lg', md: 'xl' }} color={accent} fontWeight="bold">
                        {formatPrize(prize.amount)}
                      </Text>
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        color={textColor}
                        mt={1}
                        fontStyle="italic"
                      >
                        {prize.type === 'full' ? 'Full Ticket Winner' : 'Winning Ticket Ending'}
                      </Text>
                      <Box mt={2}>
                        {formatTickets(prize.tickets, prize.ticketEndings)}
                      </Box>
                      {idx < lottery.prizes.length - 1 && (
                        <Divider my={{ base: 4, md: 5 }} borderColor={border} />
                      )}
                      
                    </Box>
                    
                  ))}
                </Stack>
                <LotteryFooter />
              </MotionBox>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Kr710;
