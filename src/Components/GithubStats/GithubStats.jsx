import { Box, Center, Heading, Image, useColorMode, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GithubStats = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            id="github"
            py='70px'
            minHeight={'100vh'}
            data-aos="fade-right"
            data-aos-duration="2000"
            color={colorMode === 'light' ? '#454360' : '#cdcdff'}
        >
            <Heading
                textAlign="center"
                fontSize={{
                    base: '4xl',
                    md: '5xl',
                }}
            >
                GitHub Calendar and Stats
            </Heading>
            <Box p='4%'>
                <Center className="react-activity-calendar"
                    mb={"5%"}>
                    <GitHubCalendar username='meenakshiar' />
                </Center>
                <Wrap spacing='30px' justify='center'>
                    <WrapItem>
                        <Center>
                            <Image id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com?user=meenakshiar&theme=tokyonight&border_radius=5' />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center>
                            <Image id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs/?username=meenakshiar&theme=tokyonight&border_radius=5&layout=compact' />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center>
                            <Image id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=meenakshiar&theme=tokyonight&border_radius=5' />
                        </Center>
                    </WrapItem>
                </Wrap>
            </Box>
        </Box>
    )
}

export default GithubStats;