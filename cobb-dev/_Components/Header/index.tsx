import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import styles from './header.module.scss'

function Header() {
  const [isMenu, setIsMenu] = useState(false)

  const handleOpenMenu = () => setIsMenu((prev) => !prev)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Cobb.dev의 블로그
          </Typography>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
