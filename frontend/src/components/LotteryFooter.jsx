import React from 'react';
import { Box, Text, Heading, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const LotteryFooter = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('yellow.600', 'yellow.400');
  const disclaimerColor = 'red.500';

  // Animation variants for smooth transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Box as="footer" bg={bgColor} py={12} px={{ base: 4, md: 8 }}>
      <Box maxW="1200px" mx="auto" className="space-y-6">
        <Accordion allowToggle>
          {/* Section 1: What is Kerala Lotteries */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    What is Kerala Lotteries?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Kerala Lotteries is a government-run lottery program established in 1967 by the Government of Kerala, making it the first of its kind in India. Initiated by then Finance Minister P.K. Kunju Sahib, the program aims to generate revenue for the state while providing employment opportunities, particularly for the underprivileged. It operates under the Lotteries (Regulation) Act 1998 and offers seven weekly lotteries—Pournami, Win-Win, Sthree Sakthi, Akshaya, Karunya Plus, Nirmal, and Karunya—along with six seasonal bumper lotteries, such as Vishu and Thiruvonam. These lotteries distribute prizes through random draws, offering participants a chance to win substantial cash rewards. The system supports welfare initiatives like the Karunya scheme, which aids those with serious medical conditions. Its transparency and reliability have made it a trusted avenue for financial hope, contributing significantly to Kerala's economy and social welfare programs.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 2: Who is Running Kerala Lotteries */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    Who is Running Kerala Lotteries?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  The Kerala State Lotteries is managed by the Directorate of Kerala State Lotteries, a department under the Government of Kerala's Taxes Department. Established in 1967, it was initially under the Finance Department but later shifted to Taxes. The directorate, headquartered at Vikas Bhavan in Thiruvananthapuram, is led by a Director, with Abraham Renn S. currently holding the position. The department employs over 500 staff across 14 district offices, 21 sub-offices, and a Regional Deputy Directorate in Ernakulam. The Secretary to the Government, Taxes Department, oversees lottery sales regulation. The initiative was pioneered by P.K. Kunju Sahib, with P.K. Seydu Mohammed as the first Director. The current leadership includes Chief Minister Pinarayi Vijayan and Finance Minister K.N. Balagopal, ensuring the program's alignment with state welfare goals and financial stability.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 3: How is Kerala Lotteries Declaring Results */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    How is Kerala Lotteries Declaring Results?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Kerala Lotteries declares results through a transparent process conducted daily at 3:00 PM at Gorky Bhavan, near Bakery Junction, Thiruvananthapuram. The draw uses a lottis machine for random selection, ensuring fairness. Results are published on the official website (keralalotteries.com) by 4:30 PM in PDF and text formats for easy access on mobile, desktop, and tablet devices. They are also broadcast live on channels like Kairali TV, Kaumudy TV, and Jai Hind TV, starting at 3:05 PM. Additionally, results are printed in the Kerala Government Gazette. Winners must verify their ticket numbers with the Gazette and surrender tickets within 30 days (or 90 days as per some sources) to claim prizes. This multi-channel approach ensures accessibility and trust, with officials overseeing draws to maintain integrity.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 4: Who is Conducting and Organizing Prize Selection */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    Who is Conducting and Organizing Prize Selection?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  The Directorate of Kerala State Lotteries, under the Taxes Department, organizes and conducts prize selection for Kerala Lotteries. The process is overseen by the Director, with the Secretary to the Government, Taxes Department, as the regulatory authority. Draws are conducted daily at Gorky Bhavan, Thiruvananthapuram, using a lottis machine for random number selection, ensuring impartiality. A team of officials supervises each draw to maintain transparency and fairness, a hallmark of Kerala's lottery system. The department adheres to the Lotteries (Regulation) Act 1998, and no external agents or promoters are allowed to influence the process. Prize structures, including amounts and categories, are predetermined and publicly announced. Winners are selected based on ticket numbers drawn, and results are verified through official channels like the Kerala Government Gazette and the department’s website, fostering trust among participants.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 5: How Many People Are Dependent on Kerala Lotteries */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    How Many People Are Dependent on Kerala Lotteries?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Kerala Lotteries significantly impacts many lives, with thousands relying on it for financial support and employment. The program employs over 500 staff across its directorate and district offices, providing stable jobs. Additionally, it supports a network of authorized agents and sellers, many from marginalized communities, who earn commissions. The Karunya scheme, funded by lottery revenue, has aided over 27,000 citizens with medical expenses for serious ailments like cancer and kidney disease, helping hundreds of families escape poverty monthly. Thousands of participants purchase tickets daily, hoping to win substantial prizes, with some draws offering up to Rs. 12 crore. While exact dependency numbers are hard to quantify, the lottery's role in funding welfare programs and providing income opportunities underscores its importance to Kerala's socio-economic fabric, benefiting both direct employees and indirect beneficiaries through welfare initiatives.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 6: How, Where, and How Long is a Lottery Valid */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    How, Where, and How Long is a Lottery Valid?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Kerala Lottery tickets are valid for claiming prizes within 30 days of the draw date, though some sources suggest up to 90 days. To claim, winners must verify their ticket numbers against results published in the Kerala Government Gazette or on keralalotteries.com. Tickets must be surrendered in undamaged condition at the Directorate of Kerala State Lotteries in Thiruvananthapuram or through authorized banks. For prizes over Rs. 1 lakh, claims are processed directly by the Directorate; smaller amounts can be claimed via lottery agents or district offices. Tickets are sold only through authorized agents across Kerala, and online sales are prohibited as per a 2005 government order. The ticket must bear the agent’s seal with name and agency number. Expired or damaged tickets are invalid, and winners must provide valid ID proof like Aadhar or Voter ID.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 7: Who Can Sell Kerala Lotteries */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    Who Can Sell Kerala Lotteries?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Only authorized agents can sell Kerala Lottery tickets, as regulated by the Directorate of Kerala State Lotteries. To become an agent, individuals must apply at District Lottery Offices with a fee of Rs. 335 and two passport-sized photos. The initial registration is valid for one calendar year, renewable annually for Rs. 85. Casual agencies for specific lotteries cost Rs. 50 per draw. Agents must affix their seal, including name and agency number, on the ticket’s reverse. They are also required to provide details of sub-agents or retailers upon request by the Director or District Lottery Officer. Selling tickets without authorization or in violation of the Lotteries (Regulation) Act 1998 is punishable by up to two years imprisonment or fines. The system ensures only licensed individuals, often from marginalized communities, sell tickets, providing them a stable income source.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 8: Things to Know Before Taking a Lottery */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    Things to Know Before Taking a Lottery
                  </Heading>
                </Box>
              

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Before purchasing a Kerala Lottery ticket, ensure it’s bought from an authorized agent, as unauthorized sales are illegal and punishable. Verify the ticket’s authenticity by checking the agent’s seal and agency number on the back. Understand that lotteries are a game of chance with no guaranteed wins, and only paper lotteries are permitted in Kerala—online lotteries are banned since 2005. Check the draw schedule (daily at 3:00 PM) and specific lottery details, like prize structures, on keralalotteries.com. Be aware of the 30-day (or up to 90-day) claim period and keep the ticket undamaged, as damaged tickets may be rejected. Confirm winning numbers in the Kerala Government Gazette or official website to avoid scams. Bring valid ID for claims, and note that prizes over Rs. 10,000 incur a 30% tax. Always play responsibly to avoid financial strain or addiction.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 9: Financial Advice Before Taking Lottery */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={headingColor}>
                    Financial Advice Before Taking Lottery
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={textColor}>
                  Participating in Kerala Lotteries should be approached with financial caution. Set a strict budget for ticket purchases and treat it as entertainment, not an investment, as the odds of winning are low. Never borrow money or use essential funds for lotteries, as this can lead to financial distress. Understand that prizes over Rs. 10,000 are subject to a 30% tax, plus cess and surcharge, reducing the net amount received. For high-value wins, consult a financial advisor to manage funds wisely, considering investments or savings rather than impulsive spending. File an Income Tax Return (ITR) by July 31 for the relevant financial year to report winnings, even if you’re otherwise tax-exempt, as lottery income is taxed separately under Sections 194B and 115BB. Avoid frequent purchases to prevent addiction, and prioritize financial stability over the lure of potential winnings.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>

          {/* Section 10: Disclaimer */}
          <AccordionItem>
            <MotionBox
              bg={useColorModeValue('white', 'gray.700')}
              p={6}
              borderRadius="md"
              shadow="md"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, shadow: 'lg' }}
              transition={{ duration: 0.3 }}
            >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="lg" color={disclaimerColor}>
                    Disclaimer
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize="md" color={disclaimerColor}>
                  This website does not promote or endorse any form of gambling, including lotteries. The information provided about Kerala Lotteries is solely for informational and educational purposes, intended to explain the system’s operations, regulations, and processes. We strongly advise users to exercise caution and responsibility when participating in lotteries, as they carry the risk of addiction and financial loss. Our content is not meant to encourage or guide individuals toward gambling activities. Always verify information with official sources like the Kerala State Lotteries Directorate or the Kerala Government Gazette. We are not affiliated with any lottery organizers and do not facilitate ticket sales or prize claims. Users should consult financial advisors before making decisions related to lottery participation.
                </Text>
              </AccordionPanel>
            </MotionBox>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default LotteryFooter;