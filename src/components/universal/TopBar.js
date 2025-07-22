import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'

const TopBar = () => {

  return (
    <AppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#082a64', minHeight:  "92px", boxShadow: "none", display: 'flex', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 800}}>
        <Toolbar>
          <a href="/">
        <Box
            sx={{width: 70}}
            component='img'
            src='/browseui/assets/us-ghg-logo.svg'/>
            </a>

            <Typography variant="h5" noWrap component="div" sx={{ml: 2, fontWeight: "400", fontWeight:"bold"}}>
              | Data Browser
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default TopBar
