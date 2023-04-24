import React from 'react'
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, DownloadIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import resume from '../../media/Meenakshi-Arora-Resume.pdf'


const Links = [
    {
        label: 'Home',
        class: "nav-link home",
        href: "#home"
    },
    {
        label: 'About',
        href: '#about',
        class: "nav-link about"
    },
    {
        label: 'Skills',
        class: "nav-link skills",
        href: "#skills"
    },
    {
        label: 'Projects',
        class: "nav-link projects",
        href: "#projects"
    },
    {
        label: 'Github',
        class: "nav-link",
        href: "#github"
    },
    {
        label: 'Contact',
        class: "nav-link contact",
        href: "#contact"
    },
];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box
                px={4}
                top='0'
                w='100%'
                id="nav-menu"
                zIndex={'100'}
                position='fixed'
                bg={useColorModeValue('purple.100', 'gray.900')}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                        border='1px solid'
                        bg='transparent'
                        _hover={{}}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((e, i) => (
                                <Link
                                    color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                                    px={2}
                                    py={1}
                                    rounded={'md'}
                                    _hover={{
                                        textDecoration: 'none',
                                    }}
                                    fontWeight={'700'}
                                    key={i + 1}
                                    href={e.href ?? '#'}
                                    className={e.class}
                                    fontSize='md'
                                    border='1px solid'
                                >
                                    {e.label}
                                </Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Box
                            className="nav-link resume"
                        >
                            <Button
                                id="resume-button-1"
                                className="nav-link resume"
                                onClick={() => {
                                    window.open(
                                        "https://drive.google.com/file/d/1mRnh2lpHRgtCtQyYyVttWyyOOwT0mt1r/view?usp=share_link",
                                        "_blank"
                                    );
                                }}
                                variant={'solid'}
                                size={'sm'}
                                mr={4}
                                rightIcon={<DownloadIcon />}
                                bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
                                color={colorMode === 'light' ? '#cdcdff' : '#454360'}
                                fontSize='md'
                                _hover={{}}
                            >
                                <Link
                                    id="resume-link-1"
                                    href={resume}
                                    download={resume}
                                    rel="noreferrer"
                                    target="_blank"
                                    textDecoration={'none'}
                                >
                                    Resume
                                </Link>
                            </Button>
                        </Box>
                        <Button
                            onClick={toggleColorMode}
                            color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                            border='1px solid'
                            bg='transparent'
                            _hover={{}}
                        >
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((e, i) => (
                                <Link
                                    color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                                    key={i + 1}
                                    href={e.href ?? '#'}
                                >
                                    {e.label}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}