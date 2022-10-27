import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
  Box,
  Wrap,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import AppStoreBadge from '../assets/images/ios.webp';
import PlayStoreBadge from '../assets/images/android.webp';
import phone from '../assets/images/phone-planet.webp';
import NavbarDefault from '../components/Layout/Navbar/NavbarDefault';
import Crisp from '../components/Chat/crisp';
import Head from 'next/head';
import Link from 'next/link'
import Particle from '../components/Animation/Particle';

export default function CallToActionWithIllustration() {
  const styling = {
    backgroundColor: '#011535',
    backgroundSize: 'cover',
    color: '#FFF', 
    width:"stretch",
    height:"calc(100vh - var(--vh-offset, 0px))",
    maxHeight: "100%",
    // maxWidth: '100%',
  }

  return (
    <section style={styling}>
      <Head>
        <link rel="shortcut icon" href="/logo-white.png" />
        <title>The Best Management Firm Any Crypto Investor Can Dream of</title>
        <meta name="description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
        <meta property="image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
        <meta property="url" content="https://cfund.asia"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="The Best Management Firm Any Crypto Investor Can Dream of" />
        <meta property="og:description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
        <meta property="og:url" content="https://cfund.asia"/>
        <meta property="og:type" content="website"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="cfund.asia"/>
        <meta property="twitter:url" content="https://cfund.asia"/>
        <meta name="twitter:title" content="The Best Management Firm Any Crypto Investor Can Dream of"/>
        <meta name="twitter:description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
      </Head>

      <NavbarDefault/>
      <Crisp/>
      <div id="tsparticles">
       <Particle/>
       </div>
      <Container pt={'10rem'} verticalAlign={'center'}>
        <VStack
          textAlign={'center'}
          align={'center'}
          spacing={'4'}
          >
          <Heading
            fontWeight={600} 
            fontSize={'32px'}>
            Login to your account
          </Heading>
          <Text color={'#FFF'} fontSize={'16px'}>
            For now, the user dashboard can only be accessed through the CFund application,
            which is available in several marketplaces
            </Text>
            <HStack spacing='1rem'  >
                <Box cursor={'pointer'}>
                <Link href="https://apps.apple.com/sg/app/cfund/id1580696846?l=id" target='_blank'>
                  <Box width={'8rem'}>
                    <Image  src={AppStoreBadge} priority/>
                    </Box>
                </Link>
                </Box>
                <Box cursor={'pointer'}>
                <Link href="https://play.google.com/store/apps/details?id=id.cfund.app&hl=in&gl=US" target='_blank'>
                <Box width={'11rem'}>
                    <Image src={PlayStoreBadge} priority/>
                    </Box>
                </Link>
                </Box>
            </HStack>
           <Wrap style={{ position: 'absolute', bottom: '0' }}  width={{ sm: '15rem',md: '25rem',lg: '35rem' }}>
                    <Image src={phone} priority/>
           </Wrap>
        </VStack>
      </Container>
    </section>
  );
}

