import React from 'react'
import Sidenav from '../Navbar/Sidenav';
import Box from '@mui/material/Box';
import Appbar from '../Navbar/Appbar';
import ProducTable from './ProductTable.jsx/ProducTable';
import './Bghome.css';

const About = () => {
    return (
        <div>
            <div className='bgHome' >
                <Appbar />
                <Box height={90} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProducTable />
                    </Box>
                </Box>
            </div>
        </div>

    )
}

export default About
