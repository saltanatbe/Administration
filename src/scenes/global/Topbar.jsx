import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Topbar = () => {
    const theme = useTheme(); 
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* Icons */}
            <Box display="flex">
                <IconButton type="button" sx={{ p: 1 }} onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)  }
                </IconButton>
                <IconButton type="button" sx={{ p: 1 }}>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton type="button" sx={{ p: 1 }}>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton type="button" sx={{ p: 1 }}>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
         </Box>

    )
}

export default Topbar;