import React from 'react'
import Sidenav from '../Navbar/Sidenav';
import Box from '@mui/material/Box';
import Appbar from '../Navbar/Appbar';

const About = () => {
    return (
        <div>
        <Appbar />  
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>About</h1>
                </Box>
            </Box>
        </div>
    )
}

export default About
