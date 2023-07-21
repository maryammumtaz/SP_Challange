import { BottomNavigation } from '@mui/material';
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar } from '@mui/material'


function  Footer (){  

    return(
        <Box sx={{ flexGrow: 1 }}>
        <BottomNavigation className="App-footer" position="fixed">
            <Typography variant="h6" component="div" style={{textAlign:"center"}} >
              Copyrights &copy; SoftPoint - 2023
            </Typography>
          
        </BottomNavigation>
      </Box>
    )
}


export default Footer;