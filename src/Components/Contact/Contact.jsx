import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorMode,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsPerson, } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { CONFETTI_DARK, CONFETTI_LIGHT } from '../bg';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgvajqr");
  const { colorMode } = useColorMode();
  const { hasCopied, onCopy } = useClipboard('meenakshiarora2707@example.com');
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const toast = useToast()
  const handleSendbtn = () => {

    if (name && email && msg) {
      toast({
        title: `Message sent!`,
        status: "success",
        isClosable: true,
      })
    } else {
      toast({
        title: `Please fill all the fields.`,
        status: "warning",
        isClosable: true,
      })
    }

  }


  return (
    <Flex
      align="center"
      justify="center"
      color={colorMode === 'light' ? '#454360' : '#cdcdff'}
      bg={useColorModeValue('purple.100', 'blue.900')}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
      borderTopLeftRadius='full'
      data-aos="fade-right"
      data-aos-duration="2000"
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >

                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<GrMail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/meenakshiar">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<SiGithub />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
                <Link href="tel:+919350471647">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<AiFillPhone size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/meenakshi-arora-106683217/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<FaLinkedin size="28px" />}
                    _hover={{
                      bg: 'blue',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>
              <Box
                // border='1px solid'
                p={8}
                w={{ xl: '400px', lg: "400px", md: "", sm: '', base: "" }}
                borderRadius="lg"
                bg={useColorModeValue('white', 'gray.700')}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </FormControl>
                    <Button
                      variant={'solid'}
                      bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
                      color={colorMode === 'light' ? '#cdcdff' : '#454360'}
                      fontSize='md'
                      _hover={{}}
                      type="submit"
                      disabled={state.submitting}
                      // isFullWidth
                      onClick={handleSendbtn}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}