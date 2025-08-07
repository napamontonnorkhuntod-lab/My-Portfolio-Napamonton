import { Box } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const TopPage:React.FC = () => {

    const goTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
        
    }

    return(
        <div >
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 999,
                }}
            >
                <Box 
                    onClick={goTop}                    
                    sx={{
                        borderRadius:'50%',
                        backgroundColor:'rgba(211, 47, 47)',
                        width:'50px',
                        height:'50px',          
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        cursor:'pointer',
                    }}
                >
                    <ArrowUpward/>
                </Box>    
            </Box>
        </div>
    )
}

export default TopPage