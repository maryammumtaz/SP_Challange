import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar } from '@mui/material'


function  Header (){  

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className="App-header" position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SoftPoint
            </Typography>
              <Avatar></Avatar>
            <Button color="inherit">Welcome</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}


export default Header;