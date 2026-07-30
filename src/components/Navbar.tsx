import React, { useState, useEffect } from "react"
import { motion } from "framer-motion";

import "../App.css"

import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';

const words = ["DEVELOPER", "FRONT END", "BACK END", "FULL STACK"];



interface NavbarProps {
    onShowResume?: () => void;
    scrollToSection?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowResume }) => {

    const navigate = useNavigate()

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const i = loopNum % words.length;
        const fullText = words[i];

        const timer = setTimeout(() => {
            if (isDeleting) {
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
                setTypingSpeed(75); // Faster when deleting
            } else {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
                setTypingSpeed(150); // Normal typing speed
            }

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
                setTypingSpeed(500); // Pause before next word
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, typingSpeed]);

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
                    fontFamily: 'NotoSansThai',
                    zIndex: 999,
                }}
                className="py-2"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                className="cursor-pointer"
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                                onClick={() =>
                                    navigate('/')
                                }
                            >
                                Napamonton
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: '.1rem', color: 'inherit' }}>
                                    {displayedText}
                                </Typography>
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    style={{ width: '2px', height: '1.2rem', backgroundColor: 'currentColor', marginLeft: '4px' }}
                                />
                            </Box>
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
                            onClick={() =>
                                navigate('/home')
                            }
                        >
                            Napamonton
                        </Typography>

                        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '.2rem', color: 'inherit' }}>
                                {displayedText}
                            </Typography>
                            <motion.div
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                style={{ width: '2px', height: '1.2rem', backgroundColor: 'currentColor', marginLeft: '4px' }}
                            />
                        </Box>

                        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button
                                onClick={onShowResume}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#D32F2F',
                                    color: 'white',
                                    '&:hover': { backgroundColor: '#B71C1C' },
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    px: 3,
                                    borderRadius: '20px'
                                }}
                            >
                                Resume
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>


            <Toolbar sx={{ mb: 5 }} />
        </>
    )
}
export default Navbar