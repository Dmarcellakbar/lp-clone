import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    VStack,
    Box,
} from '@chakra-ui/react';
import bg from '../../../assets/images/bg-how-to.webp'
import Image from 'next/image';
import Identity from '../../../assets/images/identity.webp';
import Agreement from '../../../assets/images/agreement.webp';
import Aum from '../../../assets/images/aum-icon.webp';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect }  from 'react';

const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

  export default function Howto() {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    const styling = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
    }
    return (
      <div style={styling}>
      <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'} zIndex={'0'}>
      <VStack spacing={2} textAlign="center" mb={'4rem'}>
        <motion.div
                    className="box"
                    ref={ref}
                    variants={item}
                    initial="hidden"
                    animate={control}
          >
        <Heading as="h1" color={'white'} fontSize="2.88rem" fontWeight={'bold'} fontFamily='Poppins'>
            Get into Digital Asset Market With Us!
        </Heading>
        <Text fontSize="32px" color={'white'} fontWeight={'bold'} fontFamily='Poppins' mb={'2rem'}>
            Onboarding process
        </Text>
        </motion.div>
      </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center" pl={'1rem'} pr={'1rem'} zIndex={'0'}> 
            <Box
            role={'group'}
            p={6}
            w={'100%'}
            h={'100%'}
            boxShadow={'2xl'}
            rounded={'20'}
            pos={'relative'}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                    <Box p={'1rem'} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}>
                        <Image src={Identity}  />
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                        Registration and Identification
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    Prospective customer can contact us to have a
                    consultation whether investing in digital asset with
                    us aligns with their risk appetite, financial profile,
                    and investment objective.
                    One they are successfully evaulated and their
                    eligibility confirmed, we will provide them detailed
                    information about the investment.
                    </Text>
                </Stack>
            </Box>
            <Box
            role={'group'}
            p={6}
            w={'100%'}
            h={'100%'}
            boxShadow={'2xl'}
            rounded={'20'}
            pos={'relative'}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                <Box p={'1rem'} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}>
                        <Image src={Agreement} />
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                    Product Selection and Agreement
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    The next step is formulate a contractual
                    agreement between CFund and the investor.
                    The investor may select the desired investment
                    product that fit their objective. They will also be
                    informed about the condition, performance objectives, as well as the risk involved.
                    finally, an agreement between CFund and the investor will be signed under a prepared contract.
                    Finally, the contract between the investor and ARK36 is prepared and signed.
                    </Text>
                </Stack>
            </Box>
            <Box
            role={'group'}
            p={6}
            w={'100%'}
            h={'100%'}
            boxShadow={'2xl'}
            rounded={'20'}
            pos={'relative'}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                <Box p={'1rem'} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}>
                        <Image src={Aum} />
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                        Assets Under Management
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    Once all the paperwork is signed, the investor can deposit their investment. Deposits can be made in
                    fiat or cyptocurrencies. Hence, the fund management starts.
                    The investor will now recieve access to a periodic
                    report to keep track of their investment's performance.
                    </Text>
                </Stack>
            </Box>
        </SimpleGrid>
      </Container>
      </div>
    );
  }