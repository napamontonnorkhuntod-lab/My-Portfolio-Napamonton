import React from "react"
import menu from "../assets/config/Menu";

import "../App.css"

import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



const Navbar:React.FC = () =>{

    const navigate = useNavigate()

    const pages = menu;



    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);    

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return(
        <>
            <CssBaseline />
                <AppBar 
                    position="fixed"
                    color="transparent"
                    elevation={0}
                    sx={{
                        backgroundColor: trigger ? '#f9be1ded' : 'transparent',
                        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
                        fontFamily:'NotoSansThai',
                        zIndex:999,
                    }}
                    className="py-2"
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                                onClick={()=>
                                    navigate('/home')
                                }
                            >
                                Napamonton
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' }}}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page.path} 
                                            onClick={()=> {
                                                handleCloseNavMenu();
                                                navigate(page.path);
                                            }}
                                            sx={{justifyContent:'center'}}
                                        >
                                                <Typography sx={{ textAlign: 'center'}}>{page.label}</Typography>                                                                                      
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                                onClick={()=>
                                    navigate('/home')
                                }
                            >
                                LOGO
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end' }}>
                                {pages.map((page) => (
                                <Button
                                    key={page.path}
                                    onClick={()=> {
                                        handleCloseNavMenu();
                                        navigate(page.path);
                                    }}
                                    sx={{ my: 2,display: 'block', fontSize:'1rem',textTransform:'none',mx:2, backgroundColor:'transparent' }}                                           
                                    className="btn-menu"                                            
                                >
                                    {page.label} 
                                </Button>
                                ))}
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>

           
            <Toolbar  sx={{ mb:5 }}/>
        </>
    )
}
export default Navbar