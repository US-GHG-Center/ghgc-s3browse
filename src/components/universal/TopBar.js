import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'

const TopBar = () => {

  return (
    <AppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#F9F4F0', minHeight:  "100px", boxShadow: "none", display: 'flex', justifyContent: 'center', fontFamily: "'Inter', sans-serif"}}>
        <Toolbar>
        {/* <Box
            sx={{width: 70}}
            component='img'
            src='/browseui/assets/us-ghg-logo.svg'/> */}

            <Typography variant="h5" noWrap component="div" sx={{ml: 2, fontWeight: "550", color: '#1B1B1B', fontFamily: "'DM Sans', sans-serif", marginLeft:'60px', letterSpacing: '0.05em'  }}>
            U.S. Greenhouse Gas Center | Data Browser
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default TopBar
