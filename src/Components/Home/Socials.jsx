import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import '../../App.css'

const Socials = () => {
    return (
        <Box
            className='socials'
            display={'flex'}
            justifyContent={'center'}
            gap='5%'
            mt={'6%'}
            fontSize='32px'
            w='auto'
            h='40px'
        >
            <Box>
                <a
                    href="mailto:meenakshiarora2707@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="email"
                    id="contact-email"
                >
                    <Image w='50px' src='https://img.icons8.com/external-nawicon-flat-nawicon/1x/external-email-communication-nawicon-flat-nawicon-2.png' />
                    {/* <Text fontSize={'2px'}>email</Text> */}
                </a>
            </Box>
            <Box >
                <a
                    href="https://github.com/meenakshiar"
                    target="_blank"
                    aria-label="github"
                    rel="noreferrer"
                    id="contact-github"
                >
                    <Image w='55px' src='https://img.icons8.com/glyph-neue/1x/github.png' />
                </a>
            </Box>
            <Box>
                <a
                    href="tel:+919350471647"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="contact"
                    id="contact-phone"
                >
                    {/* <Text fontSize={'2px'}>phone no</Text> */}
                    <Image w='50px' src='https://img.icons8.com/color/1x/phone.png' />
                </a>
            </Box>
            <Box>
                <a
                    href="https://www.linkedin.com/in/meenakshi-arora-106683217/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                    id="contact-linkedin"
                >
                    <Image src='https://img.icons8.com/color/1x/linkedin-2.png' />
                </a>
            </Box>
        </Box>
    )
}

export default Socials;