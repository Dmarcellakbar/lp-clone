import React, { useEffect }  from 'react';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.webp';
import { Box, Container, GridItem, Heading, Hide, HStack, Show, SimpleGrid,  Text, VStack, Wrap } from '@chakra-ui/react';
import AppStoreBadge from '../../../assets/images/ios.webp';
import PlayStoreBadge from '../../../assets/images/android.webp';
import bg from '../../../assets/images/bg-stardust-nostar.webp'
import Running from './Running'
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particle from '../../Animation/Particle';

const item = {
    hidden: { y: 150, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

const item2 = {
    hidden: { y: 150, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

const item3 = {
    hidden: { y: 150, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
};

export default function Home() {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);


  return (
    <section style={{ 
        backgroundImage: `url('${bg.src}')`,
        width:"stretch",
        height:"55rem",
        maxWidth: '100%',
        backgroundSize: 'cover',
        position: 'relative',
     }}>
       <div id="tsparticles">
         <Particle/>
         </div>
    <VStack 
    pt={'1rem'}
    h={'stretch'}
    w={'stretch'} 
    position={'relative'}
    >
        <Container w={'100%'} h={'stretch'} maxW={'80rem'}
        display={'flex'}
        >
            <SimpleGrid 
            columns={{ base: 1, md: 2 }}
            
            >
            <GridItem 
            display={'flex'}
            flex={'1'}
            alignItems={'center'}
            >
                <div>
                <motion.div
                    className="box"
                    ref={ref}
                    variants={item}
                    initial="hidden"
                    animate={control}
                >
                <Heading textAlign={'left'} w={'stretch'} fontSize='2.88rem' color={'#01E8AA'} fontWeight={'700'} pt={'6rem'} pb={'2rem'} lineHeight={'1.3'} fontFamily={'Poppins'}>
                    The Best Management Firm Any Crypto Investor Can Dream of
                </Heading>
                </motion.div>
                <motion.div
                    className="box"
                    ref={ref}
                    variants={item2}
                    initial="hidden"
                    animate={control}
                >
                <Text textAlign={'left'} fontFamily={'Poppins'} fontSize='16px' color={'#FFFFFF6a'} >
                    Our costumized strategy makes crypto investing safer, easier, and more effective for you
                </Text>
                </motion.div>
                <motion.div
                    className="box"
                    ref={ref}
                    variants={item3}
                    initial="hidden"
                    animate={control}
                >
                    <HStack spacing='1rem' pb={'6rem'} >
                        <Box cursor={'pointer'}>
                        <Link href="https://apps.apple.com/sg/app/cfund/id1580696846?l=id" target='_blank'>
                            <Box width={'8rem'}>
                                <Image  src={AppStoreBadge} alt='appstore'/>
                            </Box>
                        </Link>
                        </Box>
                        <Box cursor={'pointer'}>
                        <Link href="https://play.google.com/store/apps/details?id=id.cfund.app&hl=in&gl=US" target='_blank'>
                            <Box width={'11rem'}>
                                <Image src={PlayStoreBadge} alt='playstore'/>
                            </Box>
                        </Link>
                        </Box>
                    </HStack>
                </motion.div>
                </div>
            </GridItem>
            <Hide below='sm'>
                <GridItem 
                display={'flex'}
                flex={'1'}
                >  
                <Wrap style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '55px', right: '0', width: '50%' }}>
                        <Image  src={phone} alt='phone' priority/>
                </Wrap>
                </GridItem>
            </Hide>
            <Show above='md'>
                <GridItem 
                display={'flex'}
                flex={'1'}
                >  
                <Wrap style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '55px', right: '0', width: '50%' }}>
                        <Image  src={phone} alt='phone' priority/>
                </Wrap>
                </GridItem>
            </Show>

            </SimpleGrid>
        </Container>
        <Running />
      </VStack>
    </section>
  )
}
