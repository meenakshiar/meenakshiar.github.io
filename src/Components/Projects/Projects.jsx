import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack, Text, useColorMode, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import myNetDiary from '../../media/myNetDiary-img.png'
import wrike from '../../media/wrike-img.png'
import tripster from '../../media/tripster-img.png'
import mg from '../../media/mg-img.png'
import bolt from '../../media/bolt-img.png'

const projectDetails = [
  {
    "class-card": "project-card",
    "class-title": "project-title",
    "class-tech": "project-tech-stack",
    "class-github": "project-github-link",
    "class-desc": "project-description",
    "class-deployed": "project-deployed-link",
    "image": bolt,
    "heading": "Bolt - Apple.com",
    "text": "About Apple Inc (Apple) designs, manufactures, and smartphones, tablets, personal computers (PCs), portable and wearable devices.",
    "demoUrl": "https://bolt-beryl.vercel.app/",
    "githubUrl": "https://github.com/harry-io/apple.com",
    "tech-stack": "ReactJS, Redux, SASS, Chakra UI, NodeJS, Express, MongoDB, Swagger"
  },
  {
    "class-card": "project-card",
    "class-title": "project-title",
    "class-tech": "project-tech-stack",
    "class-github": "project-github-link",
    "class-desc": "project-description",
    "class-deployed": "project-deployed-link",
    "image": mg,
    "heading": "Health Prime - tata1mg",
    "text": "About Health Prime helps you to buy medicines online and get them delivered at your doorstep anywhere in India.",
    "demoUrl": "https://roasted-geese-6392-xh5g.vercel.app/",
    "githubUrl": "https://github.com/meenakshiar/health-prime",
    "tech-stack": "ReactJS, Redux, Chakra UI, NextJS, JSON Server, FireBase, "
  },
  {
    "class-card": "project-card",
    "class-title": "project-title",
    "class-tech": "project-tech-stack",
    "class-github": "project-github-link",
    "class-desc": "project-description",
    "class-deployed": "project-deployed-link",
    "image": tripster,
    "heading": "Tripster - MakeMyTrip",
    "text": "Tripster - clone of MakeMyTrip, is a travel company that provides online travel services like booking tickets, hotel reservations, and bus and train tickets.",
    "demoUrl": "https://tripster-tau.vercel.app",
    "githubUrl": "https://github.com/meenakshiar/legit-substance-7075",
    "tech-stack": "HTML, CSS, JavaScript, ReactJS, Chakra UI, Material UI"
  },
  {
    "class-card": "project-card",
    "class-title": "project-title",
    "class-tech": "project-tech-stack",
    "class-github": "project-github-link",
    "class-desc": "project-description",
    "class-deployed": "project-deployed-link",
    "image": wrike,
    "heading": "Box-Tech - Wrike",
    "text": "BoxTech - Clone of Wrike, A work management platform that helps business teams collaborate, plan projects and track project completion.",
    "demoUrl": "https://beautiful-horse-f7fc52.netlify.app/",
    "githubUrl": "https://github.com/meenakshiar/meek-furniture-9106",
    "tech-stack": "HTML, CSS, JavaScript"
  },
  {
    "class-card": "project-card",
    "class-title": "project-title",
    "class-tech": "project-tech-stack",
    "class-github": "project-github-link",
    "class-desc": "project-description",
    "class-deployed": "project-deployed-link",
    "image": myNetDiary,
    "heading": "MyNetDiary",
    "text": "MyNetDiary is an online calorie and exercise tracker & a digital diet assistant for weight loss.",
    "demoUrl": "https://quiet-malasada-2b16d5.netlify.app/",
    "githubUrl": "https://github.com/meenakshiar/cared-eggs-1276",
    "tech-stack": "HTML, CSS, JavaScript"
  }
]

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="projects"
      py='60px'
      color={colorMode === 'light' ? '#454360' : '#cdcdff'}
      class="nav-link projects"
      mb="-50px"
    >
      <Heading
        fontSize={{
          base: '4xl',
          md: '5xl',
        }}
        textAlign="center"
        mb={{ xl: '', lg: "", md: "4%", sm: '0', base: "0" }}
      >
        Projects
      </Heading>

      <Box p={{ xl: '2%', lg: "2%", md: "0", sm: '5%', base: "5%" }}>
        <Wrap spacing='5%' justify='center'>
          {
            projectDetails.map((e, i) => {
              return <WrapItem
                className={e['class-card']}
                key={i + 1}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Card maxW='lg' color={colorMode === 'light' ? '#454360' : '#cdcdff'}>
                  <CardBody>
                    <Image
                      src={e.image}
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md' className={e['class-title']}>{e.heading}</Heading>
                      <Text className={e['class-desc']} fontWeight='500'>
                        {e.text}
                      </Text>
                      <Text className={e['class-tech']} color='blue.600' fontSize='2xl'>
                        {e['tech-stack']}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Link className={e['class-deployed']} href={e.demoUrl} isExternal textDecoration={'none'} >
                        <Button
                          variant='solid'
                          // colorScheme='blue'
                          bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
                          color={colorMode === 'light' ? '#cdcdff' : '#454360'}
                          fontSize='md'
                          _hover={{}}
                        >
                          See this Live {" "} <ExternalLinkIcon mx='2px' />
                        </Button>
                      </Link>
                      <Link className={e['class-github']} href={e.githubUrl} isExternal textDecoration={'none'}>
                        <Button
                          variant='ghost'
                          // colorScheme='blue'
                          color={colorMode === 'light' ? '#454360' : '#cdcdff'}
                          border='1px solid'
                          // bg='transparent'
                          _hover={{}}
                        >
                          Github
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </WrapItem>
            })
          }
        </Wrap>
      </Box>
    </Box>
  )
}

export default Projects
