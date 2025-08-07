import { useScrollTrigger,Box,Button } from "@mui/material";
import subMenu from "../assets/config/subMenu";
import { useEffect, useRef, useState } from "react";

const NavigateBar:React.FC = () =>{

    const [isShow, setIsShow] = useState(true)
    const time = useRef(0)

    // useEffect(() => {

    //     const handleScroll = () => {

    //         setIsShow(true)

    //         if(time.current){
    //             clearTimeout(time.current)
    //         }

    //         time.current = setTimeout(() => {    
    //             setIsShow(false)
    //         }, 3000);
                                
    //     }
    //     window.addEventListener('scroll',handleScroll)
    //   return () => {
    //     window.removeEventListener('scroll',handleScroll)
    //     clearTimeout(time.current)
    //   }
    // }, [])
    

    const trigger = useScrollTrigger({
        threshold: 550, 
        disableHysteresis: true,
    });    


    return(
        <>
            <Box 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    position:'fixed',
                    zIndex:999,
                    bottom: 92,
                    right: 22,
                }}
            >
                {
                    trigger &&(
                        (
                            isShow &&(
                                subMenu.map((e,i)=>(    
                                        <Button 
                                            key={i}
                                            variant="outlined"
                                            color="warning"
                                            sx={{
                                                width:'120px',
                                                height:'55px',        
                                                transition: 'width 0.3s ease, height 0.3s ease', 
                                                borderRadius:'5px'           
                                            }}                
                                            
                                            className="bg-amber-400 my-2 "
                                        >         
                                            {e.name}      
                                        </Button>                                
                                ))
                            )
                        )
                    )
                }
            </Box>
        </>
    )
}

export default NavigateBar