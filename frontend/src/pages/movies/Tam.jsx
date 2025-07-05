import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Container,
  Flex,
  Badge,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import MovieFooter from '../../components/MovieFooter';
import { Helmet } from 'react-helmet-async';



const scaleAnimation = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.03); }
`;

const Tam = () => {
  const [tamMovies, setTamMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const titleColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/tam.json')
      .then((res) => res.json())
      .then((data) => {
        setTamMovies(data.movies || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <><Helmet>
  <title>Latest Tamil OTT Releases 2025 – New Tamil Movies Online</title>
  <meta
    name="description"
    content="Discover the latest Tamil OTT releases of 2025 on Netflix, ZEE5, Sun NXT, Prime Video and more. Updated weekly with new and best Tamil movies streaming online."
  />
  <meta
    name="keywords"
    content="latest Tamil OTT releases, new Tamil OTT movies 2025, best Tamil OTT movies, Tamil OTT movies this week, Tamil OTT movies on Netflix"
  />
  
</Helmet>
    <Box bg={pageBg} minH="100vh" py={8}>
      <Container maxW="container.xl" py={{ base: 6, md: 12 }}>
        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          mb={{ base: 6, md: 10 }}
          textAlign="center"
          bgGradient="linear(to-r, pink.400, purple.500)"
          bgClip="text"
        >
          Latest Tamil Movies
        </Heading>

        {isLoading ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 4, md: 6 }}>
            {[...Array(8)].map((_, idx) => (
              <Skeleton key={idx} height={{ base: '400px', md: '450px' }} borderRadius="lg" />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: 4, md: 6 }}
          >
            {tamMovies.map((movie, idx) => (
              <Card
                key={idx}
                bg={bgColor}
                boxShadow={cardShadow}
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{
                  animation: `${scaleAnimation} 0.2s ease-in-out forwards`,
                  boxShadow: 'xl',
                }}
              >
                <CardBody p={{ base: 3, md: 5 }}>
                  <Box position="relative">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      objectFit="cover"
                      w="100%"
                      h={{ base: '200px', md: '250px' }}
                      borderRadius="md"
                      fallback={<Skeleton height={{ base: '200px', md: '250px' }} />}
                    />
                    <Badge
                      position="absolute"
                      top={2}
                      right={2}
                      colorScheme="purple"
                      variant="solid"
                      px={2}
                      py={1}
                    >
                      {movie.platform}
                    </Badge>
                  </Box>

                  <Flex direction="column" mt={4}>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      noOfLines={1}
                      color={titleColor}
                    >
                      {movie.title}
                    </Text>

                    <Flex wrap="wrap" gap={2} my={2}>
                      <Badge colorScheme="blue" variant="outline">
                        {movie.releaseDate?.split('-')[0] || movie.releaseDate}
                      </Badge>
                      {movie.genre && (
                        <Badge colorScheme="teal" variant="outline">
                          {movie.genre}
                        </Badge>
                      )}
                    </Flex>

                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color={textColor}
                      mb={3}
                    >
                      {movie.plot}
                    </Text>

                    <Box>
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color={textColor}
                        fontWeight="medium"
                      >
                        <Text as="span" fontWeight="bold">
                          Cast:{' '}
                        </Text>
                        {movie.cast}
                      </Text>
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color={textColor}
                        fontWeight="medium"
                        mt={1}
                      >
                        <Text as="span" fontWeight="bold">
                          Crew:{' '}
                        </Text>
                        {movie.crew}
                      </Text>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        )}
      </Container>
     
        <MovieFooter /> {/* Footer component for consistent styling across pages */}
    </Box>
    </>
  );
};

export default Tam;