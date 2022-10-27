import { Box, Center, HStack } from '@chakra-ui/react'
import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import tokoLogo from '../../../assets/images/toko-logo.webp'
import likuidLogo from '../../../assets/images/Likuid_logo.webp'
import idrpLogo from '../../../assets/images/logo-idrp.webp'
import surveinLogo from '../../../assets/images/logo-survein.webp'
import nanoLogo from '../../../assets/images/logo-nano.webp'
import KWILogo from '../../../assets/images/logo-KWI.webp'
import raizLogo from '../../../assets/images/raiz-colour.webp'
import ondeLogo from '../../../assets/images/onde-logo.webp'
import jagoLogo from '../../../assets/images/jagoLogo.webp'
 
export default function Running() { 
  return (
    <Box bg='#011C3F' h={'60px'} w={'stretch'} maxW={'100%'} zIndex={'0'}>
        <Marquee gradient={false} speed={30}>
            <HStack>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo} priority
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo} priority
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={tokoLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={likuidLogo} priority
                />
                </Box>
                <Box width={'2rem'} >
                <Image
                    src={idrpLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={surveinLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={nanoLogo} priority
                />
                </Box>
                <Box width={'8rem'} >
                <Image
                    src={KWILogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={raizLogo} priority
                />
                </Box>
                <Box width={'4rem'} >
                <Image
                    src={ondeLogo} priority
                />
                </Box>
                <Box width={'6rem'} >
                <Image
                    src={jagoLogo} priority
                />
                </Box>
                
            </HStack>
        </Marquee>
    </Box>
  )
}
