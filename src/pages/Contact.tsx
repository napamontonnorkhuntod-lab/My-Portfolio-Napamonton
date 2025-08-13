
import { Box,Typography,Container,TextField,TextareaAutosize, Button, CircularProgress,   } from "@mui/material";
import { Call,AttachEmail,Message } from "@mui/icons-material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";

const Contact:React.FC = () => { 

    interface IsErrors{
        name:boolean,
        subject:boolean,
        email:boolean,
        phone:boolean,
        message:boolean
    }


    const [isErrors, setIsErrors] = useState<IsErrors>({
        name:false,
        subject:false,
        email:false,
        phone:false,
        message:false
    })
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()                
        setLoading(true)
        setIsErrors(e=> ({
            email:(form.current?.elements.namedItem('email') as HTMLInputElement).value.trim() === '',
            subject:(form.current?.elements.namedItem('subject') as HTMLInputElement).value.trim() === '',
            name:(form.current?.elements.namedItem('user_name') as HTMLInputElement).value.trim() === '',
            phone:(form.current?.elements.namedItem('phone') as HTMLInputElement).value.trim() === '',
            message:(form.current?.elements.namedItem('message') as HTMLTextAreaElement).value.trim() === '',
        }))

        console.log('Error=> ',isErrors);
        
        if(isErrors.name || isErrors.subject || isErrors.email || isErrors.phone || isErrors.message){ 
            return 
        } 
        
        emailjs.sendForm('service_7pym8lb','template_c32ljvj',form.current,'DumP433KVqH3-Phs9').then(
            ()=> {
                form.current?.reset()
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Send Email Success !"
                  }).finally(
                    ()=>{
                        setLoading(false)
                    }
                  )
            }
        ).catch(
            (err)=>{
                console.log('err=> ', err);                
            }
        )
        

    }
    

   return(
        <>             
            <Container className="h-[88vh] flex items-center">
                <Box className="w-full h-[85vh] md:h-[70vh] flex">
                    <Box className="flex w-full items-center">
                        <Box className="bg-amber-500 w-[5%] h-[300px]"></Box>
                        <Box className="w-[95%] h-[100%] bg-white flex flex-wrap text-black"
                            sx={{
                                boxShadow:'15px 20px 34px 0px rgb(255, 255, 255)',                          
                                borderRadius:'15px'
                            }}
                        >
                            <Box className="w-full md:w-1/2 text-center md:p-4 flex items-center justify-center">
                                <Box>
                                    <Box className="pt-2 md:pt-5">
                                        <Typography variant="h5" fontWeight={'800'} >
                                            <Call className="text-amber-600" fontSize="large"/> Call Us
                                        </Typography>
                                        <Typography variant="subtitle1" className="pl-5" fontWeight={'500'}>
                                            098-249-8727
                                        </Typography>
                                    </Box>
                                    <Box className="pt-5">
                                        <Typography variant="h5" fontWeight={'800'} >
                                            <AttachEmail className="text-amber-600" fontSize="large"/> Email
                                        </Typography>
                                        <Typography variant="subtitle1" className="pl-5" fontWeight={'500'}>
                                            napamonton.norkhuntod@gmail.com
                                        </Typography>
                                    </Box>
                                    <Box className="pt-5">
                                        <Typography variant="h5" fontWeight={'800'} >
                                            <Message className="text-green-500" fontSize="large"/> Line
                                        </Typography>
                                        <Typography variant="subtitle1" className="pl-5" fontWeight={'500'}>
                                            _Stang.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="w-full md:w-1/2 p-4">
                                <Typography variant="h4" textAlign={'center'} fontWeight={'800'}>
                                    Contact Us
                                </Typography>
                                <Box component={'form'} ref={form} onSubmit={sendEmail}>
                                    <TextField id="filled-basic" label={<span>Name <span className="text-red-500">*</span></span>} variant="standard" className="w-full mb-3" focused 
                                        placeholder="Name"
                                        error={isErrors.name}
                                        helperText={isErrors.name ? 'Incorrect entry.':''}
                                        name="user_name"
                                        sx={{
                                            '& .css-18lb98t-MuiInputBase-root-MuiInput-root::after': {
                                                borderBottom: '2px solid #121F28',
                                            },
                                            '& .css-1d1d51p-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
                                                color:'#121F28'
                                            },
                                            input:{
                                                color:'#121F28',
                                                fontWeight:'500'                                            
                                            }                                        
                                        }} 
                                    />
                                    <TextField id="filled-basic" label={<span>Subject <span className="text-red-500">*</span></span>} variant="standard" className="w-full mb-3" focused 
                                        placeholder="Subject"
                                        error={isErrors.subject}
                                        helperText={isErrors.subject ? 'Incorrect entry.':''}
                                        name="subject"
                                        sx={{
                                            '& .css-18lb98t-MuiInputBase-root-MuiInput-root::after': {
                                                borderBottom: '2px solid #121F28',
                                            },
                                            '& .css-1d1d51p-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
                                                color:'#121F28'
                                            },
                                            input:{
                                                color:'#121F28',
                                                fontWeight:'500'                                            
                                            }                                        
                                        }} 
                                    />
                                    <TextField id="filled-basic" label={<span>Email <span className="text-red-500">*</span></span>} variant="standard" className="w-full mb-3" focused 
                                        placeholder="Email"
                                        error={isErrors.email}
                                        helperText={isErrors.email ? 'Incorrect entry.' : ''}
                                        name="email"
                                        sx={{
                                            '& .css-18lb98t-MuiInputBase-root-MuiInput-root::after': {
                                                borderBottom: '2px solid #121F28',
                                            },
                                            '& .css-1d1d51p-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
                                                color:'#121F28'
                                            },
                                            input:{
                                                color:'#121F28',
                                                fontWeight:'500'                                            
                                            }                                        
                                        }} 
                                    />
                                    <TextField id="filled-basic" label={<span>Phone <span className="text-red-500">*</span></span>} variant="standard" className="w-full mb-3" focused 
                                        placeholder="Phone"
                                        error={isErrors.phone}
                                        helperText={isErrors.phone ? 'Incorrect entry.' : ''} 
                                        name="phone"
                                        sx={{
                                            '& .css-18lb98t-MuiInputBase-root-MuiInput-root::after': {
                                                borderBottom: '2px solid #121F28',
                                            },
                                            '& .css-1d1d51p-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
                                                color:'#121F28'
                                            },
                                            input:{
                                                color:'#121F28',
                                                fontWeight:'500'                                            
                                            }                                        
                                        }} 
                                    />
                                    <Typography variant="subtitle2">
                                        Message <span className="text-red-500">*</span>
                                    </Typography>
                                    <TextareaAutosize
                                        aria-label="Message"
                                        minRows={4}
                                        placeholder="Message"
                                        name="message"
                                        style={{ 
                                            width: '100%',
                                            padding:'10px',
                                            borderRadius:'10px',
                                            border:`2px solid ${isErrors.message ? 'red':'#121F28'}`
                                        }}                                                                           
                                    />
                                    {
                                        isErrors.message &&(                                
                                            <Typography variant="caption" color="red" className="mb-3"
                                                
                                            >
                                                Incorrect entry.
                                            </Typography>
                                        )
                                    }
                                    <Box className="w-full flex justify-end">
                                        <Button variant="contained" color="success" type="submit" className="px-5 py-3" 
                                            disabled={loading} 
                                            loading={loading}
                                        >
                                            {   
                                                loading ? <CircularProgress color="success" /> : 'Send'
                                            }
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </>
   ) 
}

export default Contact