import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import GithubStats from './Components/GithubStats/GithubStats';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopToBottom from './Components/TopToBottom';
import { Box, useColorModeValue } from '@chakra-ui/react';

AOS.init();
function App() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
      <TopToBottom />
    </Box>
  );
}

export default App;
