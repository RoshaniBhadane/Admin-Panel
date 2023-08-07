import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import GridViewIcon from '@mui/icons-material/GridView';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupIcon from '@mui/icons-material/Group';
import { List, ListItem, ListItemText } from "@mui/material"

const sidebar ={
    flex:1
}
const logoWrapper = {
    height: '50px',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
}

const logo = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#6439ff'
}
const linksWrapper = {
    paddingLeft: '10px'
}
const icon = {
    fontSize: '18px',
    color:' #7451f8'
  }
  const texts = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#888',
        marginLeft: '10px'
  }
  

export const Sidebar = () => {
   
    return (
        <Box sx={sidebar}>
            <Box sx={logoWrapper}>
                <Link to="/">
                    <Box component="span" sx={logo}>Logo</Box>
                </Link>
            </Box>
            <hr />
            <Box sx={linksWrapper}>
                <List>
                    <ListItem>
                        <GridViewIcon sx={icon} />
                        <ListItemText sx={texts}>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem>
                        <GroupIcon sx={icon} />
                        <ListItemText  sx={texts}>Employee</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ExitToAppIcon sx={icon}/>
                        <ListItemText sx={texts}>Logout</ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
