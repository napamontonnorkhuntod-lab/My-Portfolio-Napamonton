import { Box, Typography,  } from "@mui/material";

interface skillProps{
    name:string,
    skill:string,
}

const Skill:React.FC<skillProps> = (props) => {    
    

    return(
        <>
            <Box className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-3 justify-center">
                <Box className="bg-[#1C2D38] p-5 hover:bg-[#f9be1dcc] flex items-center justify-center" height={276} borderRadius={5}>
                    <Box className="flex flex-col justify-center">
                        <Box className="w-full max-w-[100px] mx-auto">
                            <img src="/image/React-icon.svg.png" alt="React Logo" className="object-cover w-full h-full" />
                        </Box>
                        
                        <Typography variant="subtitle1" align="center" className="mt-5">
                            {props.name}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Skill