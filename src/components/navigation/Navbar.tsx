import './navbar.css'
import { Box } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

export const Navbar = () => {
    const navbar = {
        height: '50px',
        borderBottom: '0.5px solid rgb(231, 228, 228)',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#555'
    }
    const navWrapper = {
        width: '100%',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const items = {
        display: 'flex',
        marginLeft: 'auto'
    }
    const item = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
        position: 'relative'
    }
    const icon = {
        fontSize: '20px'
    }
    const counter = {
        width: '15px',
        height: '15px',
        backgroundColor: 'red',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        position: 'absolute',
        top: '-5px',
        right:'-5px',
    }
    return (
        <Box sx={navbar}>
            <Box sx={navWrapper}>
                <Box sx={items}>
                    <Box sx={item}>
                        <NotificationsNoneOutlinedIcon sx={icon} />
                        <Box sx={counter}>1</Box>
                    </Box>
                    <Box sx={item}>
                        <ChatBubbleOutlineOutlinedIcon sx={icon} />
                        <Box sx={counter}>2</Box>
                    </Box>
                    <Box sx={item}>
                        <ListOutlinedIcon sx={icon} />
                    </Box>
                    <Box sx={item}>
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
