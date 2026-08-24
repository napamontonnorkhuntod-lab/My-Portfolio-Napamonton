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
    lang?: 'en' | 'th';
    onToggleLang?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowResume, lang = 'en', onToggleLang }) => {

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

                        {/* Mobile Brand (Far Left) */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={() => navigate('/home')}
                        >
                            <AdbIcon sx={{ mr: 1, fontSize: '1.4rem' }} />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: '1.15rem',
                                }}
                            >
                                Napamonton
                            </Typography>
                        </Box>

                        {/* Mobile Spacer to push toggle to the far right */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

                        {/* Mobile Language Toggle (Far Right - Fixed) */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                            <Box
                                onClick={onToggleLang}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '16px',
                                    p: '2px',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    flexShrink: 0,
                                    userSelect: 'none',
                                    '&:hover': {
                                        borderColor: '#f9be1d',
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        px: 1.2,
                                        py: 0.3,
                                        borderRadius: '12px',
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        bgcolor: lang === 'en' ? '#f9be1d' : 'transparent',
                                        color: lang === 'en' ? '#121F28' : '#aaa',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    EN
                                </Box>
                                <Box
                                    sx={{
                                        px: 1.2,
                                        py: 0.3,
                                        borderRadius: '12px',
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        bgcolor: lang === 'th' ? '#f9be1d' : 'transparent',
                                        color: lang === 'th' ? '#121F28' : '#aaa',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    TH
                                </Box>
                            </Box>
                        </Box>

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

                        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
                            {/* Language Toggle */}
                            <Box
                                onClick={onToggleLang}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '20px',
                                    p: '3px',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    transition: 'all 0.3s ease',
                                    userSelect: 'none',
                                    '&:hover': {
                                        borderColor: '#f9be1d',
                                        bgcolor: 'rgba(255, 255, 255, 0.12)',
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.4,
                                        borderRadius: '16px',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        bgcolor: lang === 'en' ? '#f9be1d' : 'transparent',
                                        color: lang === 'en' ? '#121F28' : '#aaa',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    EN
                                </Box>
                                <Box
                                    sx={{
                                        px: 1.5,
                                        py: 0.4,
                                        borderRadius: '16px',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        bgcolor: lang === 'th' ? '#f9be1d' : 'transparent',
                                        color: lang === 'th' ? '#121F28' : '#aaa',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    TH
                                </Box>
                            </Box>

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
                                {lang === 'th' ? 'เรซูเม่' : 'Resume'}
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