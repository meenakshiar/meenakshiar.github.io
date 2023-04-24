import React from 'react'
import { Card, CardBody, StackDivider, Box, Text, useColorMode, Stack, Image, Center } from '@chakra-ui/react'

const Details = () => {
    const { colorMode } = useColorMode();

    return (
        <Card
            w={{ xl: '55%', lg: "65%", md: "80%", sm: '80%', base: "90%" }}
            m='auto'
            mt='5%'
            color={colorMode === 'light' ? '#454360' : '#cdcdff'}
        >
            <CardBody>
                <Stack
                    divider={<StackDivider />}
                    spacing={{ xl: 'auto', lg: "auto", md: "auto", sm: '10px', base: "10px" }}
                    direction={{ xl: 'row', lg: "row", md: "row", sm: 'column', base: "column" }}
                    justifyContent='space-between'
                >
                    <Box
                        display={{ xl: 'grid', lg: "grid", md: "grid", sm: 'flex', base: "flex" }}
                        gap={{ xl: '0', lg: "0", md: "0", sm: '50%', base: "35%" }}
                    >
                        <Center size='xs' textTransform='uppercase' w='50px'>
                            <Image color='yellow' src='https://img.icons8.com/pulsar-color/256/code-folder.png' />
                        </Center>
                        <Text pt='2' fontSize='sm'>
                            <span style={{ fontWeight: '700', fontSize: 'large' }}>1200+ </span> Hours <br />
                            <span style={{ fontWeight: '600' }}>Practical Coding</span>
                        </Text>
                    </Box>
                    <Box
                        display={{ xl: 'grid', lg: "grid", md: "grid", sm: 'flex', base: "flex" }}
                        gap={{ xl: '0', lg: "0", md: "0", sm: '50%', base: "35%" }}
                    >
                        <Center size='xs' textTransform='uppercase' w='50px'>
                            <Image src='https://img.icons8.com/external-filled-line-andi-nur-abdillah/256/external-Communication-hospital-(filled-line)-filled-line-andi-nur-abdillah.png' />
                        </Center>
                        <Text pt='2' fontSize='sm'>
                            <span style={{ fontWeight: '700', fontSize: 'large' }}>100+ </span> Hours <br />
                            <span style={{ fontWeight: '600' }}>Soft-skills development</span>
                        </Text>
                    </Box>
                    <Box
                        display={{ xl: 'grid', lg: "grid", md: "grid", sm: 'flex', base: "flex" }}
                        gap={{ xl: '0', lg: "0", md: "0", sm: '50%', base: "35%" }}
                    >
                        <Center size='xs' textTransform='uppercase' w='50px'>
                            <Image src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-soft-skills-recruitment-agency-flaticons-lineal-color-flat-icons-2.png' />
                        </Center>
                        <Text pt='2' fontSize='sm'>
                            <span style={{ fontWeight: '700', fontSize: 'large' }}>100</span> Hours <br />
                            <span style={{ fontWeight: '600' }}>Data Structures & <br /> Algorithms</span>
                        </Text>
                    </Box>
                    <Box
                        display={{ xl: 'grid', lg: "grid", md: "grid", sm: 'flex', base: "flex" }}
                        gap={{ xl: '0', lg: "0", md: "0", sm: '48%', base: "32%" }}
                    >
                        <Center size='xs' textTransform='uppercase' w='60px'>
                            <Image src='https://img.icons8.com/plasticine/256/idea.png' />
                        </Center>
                        <Text pt='2' fontSize='sm'>
                            {/* <span style={{ fontWeight: '600' }}>4+ Major Projects <br /> 30+ Mini Projects</span> */}
                            <span style={{ fontWeight: '700', fontSize: 'large' }}>4+</span><span style={{ fontWeight: '600' }}>Major Projects</span>
                            <br />
                            <span style={{ fontWeight: '700', fontSize: 'large' }}>30+</span><span style={{ fontWeight: '600' }}>Mini Projects</span>
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Details;