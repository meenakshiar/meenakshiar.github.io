import { Box, Center, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Tooltip, useColorModeValue, useColorMode, Text } from '@chakra-ui/react';
import React from 'react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { CONFETTI_DARK, CONFETTI_LIGHT } from '../bg';


const all = [
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "name": "HTML"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "name": "CSS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "name": "JavaScript"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "name": "React"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    "name": "Redux"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    "name": "Chakra UI"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/mui.png",
    "name": "Material UI"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png",
    "name": "Tailwind CSS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    "name": "TypeScript"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/nextjs.png",
    "name": "NextJS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg",
    "name": "NodeJS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "name": "MongoDB"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg",
    "name": "Express"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "name": "Postman"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg",
    "name": "Github"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    "name": "Git"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    "name": "VScode"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    "name": "Netlify"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.svgrepo.com/show/327408/logo-vercel.svg",
    "name": "Vercel"
  },
]

const Frontend = [
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "name": "HTML"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "name": "CSS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "name": "JavaScript"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "name": "React"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    "name": "Redux"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/chakraui.png",
    "name": "Chakra UI"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/mui.png",
    "name": "Material UI"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png",
    "name": "Tailwind CSS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    "name": "TypeScript"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/nextjs.png",
    "name": "NextJS"
  }
];

const Backend = [
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg",
    "name": "NodeJS"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "name": "MongoDB"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg",
    "name": "Express"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "name": "Postman"
  }
]

const tools = [
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg",
    "name": "Github"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    "name": "Git"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.svgrepo.com/show/342347/visual-studio-code.svg",
    "name": "VScode"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png?f=avif&w=128",
    "name": "Netlify"
  },
  {
    "class-card": "skills-card",
    "class-card-img": "skills-card-img",
    "class-card-name": "skills-card-name",
    "Image": "https://www.svgrepo.com/show/327408/logo-vercel.svg",
    "name": "Vercel"
  }
]

const Skills = () => {
  const { colorMode } = useColorMode();
  return (
    <
      Box id="skills"
      py='65px'
      bg={useColorModeValue('purple.100', 'blue.900')}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
      borderTopRightRadius='full'
      data-aos="fade-right"
      data-aos-duration="2000"
      color={colorMode === 'light' ? '#454360' : '#cdcdff'}
    >
      <Text className="skills-card-name">
        <Heading
          fontSize={{
            base: '4xl',
            md: '5xl',
          }}
          textAlign="center"
        >
          Tech Stack and Dev Tools
        </Heading>
        <Box p='5%'>
          <Tabs
            variant='soft-rounded'
            colorScheme='green'
          // bgColor={colorMode === 'light' ? '#454360' : '#cdcdff'}
          // p='20px'
          >
            <TabList
              pb='3%'
              justifyContent='center'
              fontSize={'md'}
            >
              <Tab>All</Tab>
              <Tab>Frontend</Tab>
              <Tab>Backend</Tab>
              <Tab>Tools</Tab>
            </TabList>
            <TabPanels>

              {/* All */}
              <TabPanel>
                <Wrap spacing='100px' justify='center'>
                  {
                    all.map(e => (
                      <WrapItem className={e['class-card']} >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center w='60px' className={e['class-card-img']} >
                            <Image src={e.Image} /> <br />
                            {/* <Text fontSize='2px' className={e['class-card-name']}>{e.name}</Text> */}
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Frontend */}
              <TabPanel>
                <Wrap spacing='100px' justify='center'>
                  {
                    Frontend.map(e => (
                      <WrapItem className={e['class-card']} >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center w='60px' className={e['class-card-img']} >
                            <Image src={e.Image} /> <br />
                            {/* <Text fontSize='2px' className={e['class-card-name']}>{e.name}</Text> */}
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Backend */}
              <TabPanel>
                <Wrap spacing='100px' justify='center'>
                  {
                    Backend.map(e => (
                      <WrapItem className={e['class-card']} >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center w='60px' className={e['class-card-img']} >
                            <Image src={e.Image} /> <br />
                            {/* <Text fontSize='2px' className={e['class-card-name']}>{e.name}</Text> */}
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>

              {/* Tools */}
              <TabPanel>
                <Wrap spacing='100px' justify='center'>
                  {
                    tools.map(e => (
                      <WrapItem className={e['class-card']} >
                        <Tooltip hasArrow label={e.name} placement='bottom'>
                          <Center w='60px' className={e['class-card-img']} >
                            <Image src={e.Image} /> <br />
                            {/* <Text fontSize='2px' className={e['class-card-name']}>{e.name}</Text> */}
                          </Center>
                        </Tooltip>
                      </WrapItem >
                    ))
                  }
                </Wrap>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Text>
    </Box>
  )
}

export default Skills;