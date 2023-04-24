import { Box } from '@chakra-ui/react';
import React from 'react'
import './ScrollDown.css'

const ScrollDown = () => {
  return (
    <Box
      display='grid'
      justifyContent='center'
      // mt={{xl:'8%', lg: "4%", md: "1%", sm:'9%', base: "20%" }}
    >
      <a href="#about">
        <span className='scroll'>Scroll Down</span>
        <span className='mouse'>
          <span className='wheel'></span>
        </span>
      </a>
    </Box>
  )
}

export default ScrollDown;