import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Text, useColorMode } from '@chakra-ui/react';
import pic from '../../media/Profilepicture.jpg';
import resume from '../../media/Meenakshi-Arora-Resume.pdf'
import Details from './details';

const About = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
            py='70px'
            id="about"
            className="about section"
            data-aos="fade-right"
            data-aos-duration="2000"
            color={colorMode === 'light' ? '#454360' : '#cdcdff'}
        >
            <Heading
                textAlign={'center'}
                mb='5%'
                fontSize={{
                    base: '4xl',
                    md: '5xl',
                }}
            >
                About me
            </Heading>
            <Card
                margin={'auto'}
                color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                width={{ xl: '50%', lg: "80%", md: "80%", sm: '80%', base: "90%" }}
                direction={{ xl: 'row', lg: "row", md: "row", sm: 'column', base: "column" }}
            >
                <Image
                    w='220px'
                    h='200px'
                    m='20px'
                    src={pic}
                    className="home-img"
                    borderRadius='20px'
                // m={'auto'}
                />
                <Stack>
                    <CardBody >
                        <Heading size='md'>Let me introduce myself</Heading>
                        <Text
                            py='4'
                            fontWeight='600'
                            id="user-detail-intro"
                            textAlign={'justify'}
                        >
                            As a web developer, I am skilled in developing and maintaining websites that are not only visually appealing but also user-friendly and functional. With a strong foundation in programming languages such as HTML, CSS, JavaScript, and MERN, I have the ability to create responsive designs that work across all devices and platforms. I am always looking for ways to improve my skills and knowledge.

                            {/* As a skilled Full Stack Developer, I have extensive experience working with HTML, CSS, JavaScript, React, and Redux on the front-end, and Node.js and Express on the back-end. Additionally, I have expertise in working with MongoDB as a database, and I have a proven track record of generating APIs that meet business requirements.

                            My proficiency in various full-stack development technologies has allowed me to design and develop end-to-end applications for a variety of industries. I am passionate about creating user-friendly, responsive, and scalable web applications that deliver exceptional user experiences.

                            With a strong focus on quality and attention to detail, I am always seeking to expand my knowledge and skills in emerging technologies. I am a team player and a great communicator, who can work collaboratively with cross-functional teams to achieve project goals. */}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            id="resume-button-2"
                            onClick={() => {
                                window.open(
                                    "https://drive.google.com/file/d/1Kyhwrjst0Kv-eUzU8B7T9R3Uvp2M_Jkz/view?usp=drive_link",
                                    "_blank"
                                );
                            }}
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'md'}
                            mr={4}
                            rightIcon={<DownloadIcon />}
                            bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
                            color={colorMode === 'light' ? '#cdcdff' : '#454360'}
                            fontSize='md'
                            _hover={{}}
                        >
                            <Link
                                id="resume-link-2"
                                href={resume}
                                download={resume}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Resume
                            </Link>
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Details />
        </Box>
    )
}
export default About;