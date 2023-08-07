import { Box } from "@mui/material";
import './sidebar.css'
import { Link } from "react-router-dom";
import GridViewIcon from '@mui/icons-material/GridView';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupIcon from '@mui/icons-material/Group';
import { List, ListItem, ListItemText } from "@mui/material"
import { clearSession } from './helper'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
    const sidebar = {
        flex: 1,
        borderRight: '0.5px solid rgb(230, 227, 227)',
        minHeight: '100vh',
        backgroundColor: 'white'
    }
    const logoWrapper = {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
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
        color: ' #7451f8'
    }
    const texts = {
        fontSize: '13px',
        fontWeight: 600,
        color: '#888',
        marginLeft: '10px'
    }
    const navigate = useNavigate();

    const logout = (): void => {
        clearSession()
        navigate('/')
    }
    return (
        <Box sx={sidebar}>
            <Box sx={logoWrapper}>
                <Link to="/">
                    <Box component="span" sx={logo}>Logo</Box>
                </Link>
            </Box>
            <hr className="hr" />
            <Box sx={linksWrapper}>
                <List>
                    <ListItem>
                        <GridViewIcon sx={icon} />
                        <ListItemText sx={texts}>Dashboard</ListItemText>
                    </ListItem>
                    <ListItem>
                        <GroupIcon sx={icon} />
                        <ListItemText sx={texts}>Employee</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ExitToAppIcon sx={icon} />
                        <ListItemText sx={texts} onClick={logout}>Logout</ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
