import React from 'react'
import Sidenav from '../Navbar/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Appbar from '../Navbar/Appbar';

const Home = () => {
  return (
    <div>
    <Appbar />  
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>

      </Box>

           </Box>

 
    </div>
  )
}

export default Home
