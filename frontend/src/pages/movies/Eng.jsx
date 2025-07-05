import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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



const scaleAnimation = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.03); }
`;

const Eng = () => {
  const [engMovies, setEngMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Move all useColorModeValue hooks here:
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  const pageBg = useColorModeValue('gray.50', 'gray.900');
  const titleColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/eng.json')
      .then((res) => res.json())
      .then((data) => {
        setEngMovies(data.movies || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      });
  }, []);

  return (<>
    <Helmet>
      <title>Latest English OTT Movies 2025 – Watch Now</title>
      <meta name="description" content="Explore latest and best English OTT movie releases for 2025. Updated weekly with new English OTT releases." />
      <meta name="keywords" content="
    latest english ott movies,
    new english ott movies 2025,
    best english ott movies,
    english ott release this week,
    latest english ott releases" />
    </Helmet>
    <Box bg={pageBg} minH="100vh" py={8}>
      <Container maxW="container.xl" py={{ base: 6, md: 12 }}>
        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          mb={{ base: 6, md: 10 }}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Latest English Movies
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
            {engMovies.map((movie, idx) => (
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
                      loading='lazy'
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
                      color={titleColor} // Use variable here
                    >
                      {movie.title}
                    </Text>

                    <Flex wrap="wrap" gap={2} my={2}>
                      <Badge colorScheme="blue" variant="outline">
                        {movie.releaseDate.split('-')[0]}
                      </Badge>
                      <Badge colorScheme="teal" variant="outline">
                        {movie.genre}
                      </Badge>
                    </Flex>

                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color={textColor} // Use variable here
                      mb={3}
                    >
                      {movie.plot}
                    </Text>

                    <Box>
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color={textColor} // Use variable here
                        fontWeight="medium"
                      >
                        <Text as="span" fontWeight="bold">
                          Cast:{' '}
                        </Text>
                        {movie.cast}
                      </Text>
                      <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color={textColor} // Use variable here
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
      <MovieFooter />
    </Box>
    </>
  );
};

export default Eng;