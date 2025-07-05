import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  Box,
  Heading,
  Text,
  VStack,
  Spinner,
  Divider,
  Badge,
  SimpleGrid,
  Stack,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react';

const Ss400 = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Define color mode values for background, text, and borders at top level
  const bgColor = useColorModeValue('transparent', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const cardBgColor = useColorModeValue('gray.50', 'gray.700');
  const secondaryTextColor = useColorModeValue('gray.500', 'gray.400');
  const errorColor = useColorModeValue('red.500', 'red.300');
  // Define ticket and ending box colors at top level
  const ticketBgColor = useColorModeValue('gray.100', 'gray.600');
  const ticketHoverBgColor = useColorModeValue('gray.200', 'gray.500');

  // Get shadow token for consistent elevation
  const [shadow] = useToken('shadows', ['md']);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get('/result/SS-400');
        if (res.data.success) {
          setResult(res.data.data);
        } else {
          setError(res.data.message || 'Failed to load result.');
        }
      } catch (err) {
        setError('Failed to fetch result.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);

  if (loading) {
    return (
      <Box
        p={10}
        textAlign="center"
        bg={bgColor}
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Spinner size="xl" color={textColor} />
        <Text mt={4} color={textColor}>
          Loading result...
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        p={10}
        textAlign="center"
        bg={bgColor}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={errorColor} fontSize="lg" fontWeight="medium">
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box
      p={{ base: 4, md: 6 }}
      maxW="1200px"
      mx="auto"
      bg={bgColor}
      minH="100vh"
      borderRadius="xl"
      boxShadow={shadow}
      my={{ base: 4, md: 8 }}
    >
      <VStack spacing={6} align="start">
        <Heading size="lg" color={textColor}>
          {result.lotteryName} Result
        </Heading>
        <Text fontSize="md" color={secondaryTextColor}>
          <strong>Lottery No:</strong> {result.lotteryNumber}
        </Text>
        <Text fontSize="md" color={secondaryTextColor}>
          <strong>Draw Date:</strong>{' '}
          {new Date(result.drawDate).toLocaleDateString()}
        </Text>

        <Divider borderColor={borderColor} my={6} />

        {result.prizes.map((prize, index) => (
          <Box
            key={index}
            w="100%"
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            p={{ base: 4, md: 6 }}
            bg={cardBgColor}
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
            }}
          >
            <Heading size="md" mb={3} color={textColor}>
              {prize.label} Prize - ₹{prize.amount.toLocaleString()}
              <Badge
                colorScheme={prize.type === 'full' ? 'green' : 'teal'}
                ml={2}
                fontSize="0.8em"
                px={2}
                py={1}
                borderRadius="full"
              >
                {prize.type}
              </Badge>
            </Heading>

            {prize.type === 'full' && prize.tickets && prize.tickets.length > 0 && (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={3}
                mt={3}
              >
                {prize.tickets.map((ticket, idx) => (
                  <Box
                    key={idx}
                    p={3}
                    bg={ticketBgColor}
                    borderRadius="md"
                    color={textColor}
                    transition="background-color 0.2s"
                    _hover={{ bg: ticketHoverBgColor }}
                  >
                    <Text fontSize="sm">
                      <strong>Number:</strong> {ticket.number}
                    </Text>
                    {ticket.location && (
                      <Text fontSize="sm">
                        <strong>Location:</strong> {ticket.location}
                      </Text>
                    )}
                  </Box>
                ))}
              </SimpleGrid>
            )}

            {prize.type === 'ending' && prize.ticketEndings && prize.ticketEndings.length > 0 && (
              <Stack spacing={2} mt={3}>
                <Text fontSize="sm" color={secondaryTextColor}>
                  <strong>Ending Numbers:</strong>
                </Text>
                <SimpleGrid
                  columns={{ base: 2, sm: 3, md: 5 }}
                  spacing={2}
                >
                  {prize.ticketEndings.map((end, idx) => (
                    <Box
                      key={idx}
                      p={2}
                      bg={ticketBgColor}
                      borderRadius="md"
                      textAlign="center"
                      color={textColor}
                      fontSize="sm"
                      transition="background-color 0.2s"
                      _hover={{ bg: ticketHoverBgColor }}
                    >
                      {end}
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Ss400;