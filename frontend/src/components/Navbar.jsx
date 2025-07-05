import React from 'react';
import { 
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Show,
  Hide,
  Heading,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const Links = [
  { name: 'Lottery Results', href: '/lottery-result' },
  { name: 'Movies', href: '/movies' },
  { name: 'Gadgets', href: '/gadgets' },
];

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const NavLink = ({ children, href }) => {
  const hoverBg = useColorModeValue('blue.100', 'cyan.900');
  const textColor = useColorModeValue('blue.700', 'cyan.100');
  
  return (
    <MotionBox
      as="a"
      px={3}
      py={2}
      rounded="md"
      fontSize="lg"
      fontWeight="medium"
      color={textColor}
      href={href}
      whileHover={{
        scale: 1.1,
        backgroundColor: hoverBg,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      cursor="pointer"
      _hover={{ textDecoration: 'none' }}
    >
      {children}
    </MotionBox>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bg = useColorModeValue('blue.50', 'gray.900');
  const textColor = useColorModeValue('blue.700', 'cyan.100');
  const accent = useColorModeValue('blue.600', 'cyan.200');
  const gradientBg = useColorModeValue(
    'linear(to-b, green.100, cyan.50)',
    'linear(to-b, blue.900, gray.800)'
  );
  const hoverBg = useColorModeValue('blue.100', 'cyan.900');

  return (
    <Box bgGradient={gradientBg} px={4} boxShadow="md" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl" p={{ base: 3, md: 4 }}>
        <Flex h={{ base: 14, md: 16 }} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <MotionBox
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              cursor="pointer"
              onClick={() => (window.location.href = '/')}
            >
              <Image
                src="logo.png"
                boxSize={{ base: '36px', md: '40px' }}
                borderRadius="full"
                objectFit="cover"
                alt="IhaLokam Logo"
                mr={{ base: 2, md: 3 }}
                border="2px solid"
                borderColor={accent}
              />
            </MotionBox>
            <Heading
            onClick={() => (window.location.href = '/')}
              as="h1"
              size={{ base: 'md', md: 'lg' }}
              color={accent}
              fontWeight="extrabold"
              display={{ base: 'none', md: 'block' }}
            >
              IhaLokam
            </Heading>
          </Flex>

          <Flex alignItems="center">
            <Stack direction="row" spacing={{ base: 3, md: 6 }} alignItems="center">
              {/* Desktop Links */}
              <Hide below="md">
                <Stack direction="row" spacing={4}>
                  {Links.map((link) => (
                    <NavLink key={link.name} href={link.href}>
                      {link.name}
                    </NavLink>
                  ))}
                </Stack>
              </Hide>

              {/* Mobile Menu */}
              <Show below="md">
                <Menu>
                  <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <MenuButton
                      as={IconButton}
                      aria-label="Menu"
                      icon={<HamburgerIcon boxSize={6} />}
                      variant="outline"
                      borderColor={accent}
                      _hover={{ bg: hoverBg }}
                      cursor="pointer"
                    />
                  </MotionBox>
                  <MenuList
                    bg={useColorModeValue('white', 'gray.800')}
                    borderColor={accent}
                    borderRadius="lg"
                    boxShadow="lg"
                    p={2}
                  >
                    {Links.map((link) => (
                      <MotionBox 
                        key={link.name} 
                        whileHover={{ 
                          backgroundColor: hoverBg,
                          scale: 1.05,
                          transition: { duration: 0.2, ease: 'easeOut' }
                        }}
                      >
                        <MenuItem
                          as="a"
                          href={link.href}
                          fontSize="md"
                          color={textColor}
                          _hover={{ textDecoration: 'none' }}
                          borderRadius="md"
                          px={3}
                          py={2}
                        >
                          {link.name}
                        </MenuItem>
                      </MotionBox>
                    ))}
                  </MenuList>
                </Menu>
              </Show>

              {/* Theme Toggle Button */}
              <MotionButton
                onClick={toggleColorMode}
                variant="outline"
                borderColor={accent}
                color={accent}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                cursor="pointer"
                borderRadius="full"
                p={{ base: 2, md: 3 }}
              >
                {colorMode === 'light' ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
              </MotionButton>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}