import { Box, Heading, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
// import bg from '../../media/connection-113369.mp4'
import { Typewriter } from 'react-simple-typewriter';
import { CONFETTI_DARK, CONFETTI_LIGHT } from '../bg';
import ScrollDown from './ScrollDown';
import Socials from './Socials';

const Home = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            id="home"
            mt='10px'
            w='100%'
            minHeight={'100vh'}
            display='grid'
            alignItems='center'
            justifyContent={'center'}
            borderBottomLeftRadius='full'
            bg={useColorModeValue('purple.100', 'blue.900')}
            css={{
                backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
                backgroundAttachment: 'fixed',
            }}
            // data-aos="fade-right"
            // data-aos-duration="2000"
        >
            <Box color={colorMode === 'light' ? '#454360' : '#cdcdff'}  >
                <Box
                    margin={'50px auto'}
                    width={{ xl: '45%', lg: "40%", md: "42%", sm: '42%', base: "60%" }}
                >
                    <Image
                        borderRadius={'8%'}
                        src='https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif'
                    />
                </Box>
                <Heading
                    fontSize={{ xl: '48px', lg: "36px", md: "30px", sm: '28px', base: "24px" }}
                    id="user-detail-name"
                    textAlign="center"
                >
                    Hi 👋🏻, I'm Meenakshi Arora
                </Heading>
                <Text
                    fontSize={'md'}
                    fontWeight='700'
                    textAlign={'center'}
                    h='30px'
                    mt={'4%'}
                >
                    <Typewriter
                        words={["<A Full Stack Web Developer />"]}
                        typeSpeed={70}
                        deleteSpeed={100}
                        delaySpeed={250}
                        loop
                    />
                </Text>
                <Socials />
            </Box>
            <ScrollDown />
        </Box>
    )
}

export default Home;