import { Box,Button,TextField,TextareaAutosize,Typography, Autocomplete, CircularProgress} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

interface formProps{
    id?:number | string,
    title:string,
    body:string,
    userId:string | number,
}

interface Formprops{
    formSubmit:(form:any) => void
    formDataUpdate?:formProps
}

const UserForm:React.FC<Formprops> = (props) => {
    
    interface FormData{
        id?:number | string | undefined | null, 
        title:string,
        body:string,
        userId:number | string | undefined | null, 
    }

    interface Errors{
        title:boolean,
        body:boolean,
        userId:boolean,
    }

    interface Users {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const [form, setForm] = useState<FormData>({
        id:0,
        title:'',
        body:'',
        userId:null,
    })

    const [isError,setIsError] = useState<Errors>({
        title: false,
        body: false,  
        userId:false,
    })

    const [data, setData] = useState<Users[]>([]) 

    const [loading, setLoading] = useState(false)




    useEffect(() => {                              
        setIsError({
            title: form.title.trim() === '',
            body: form.body.trim() === '',  
            userId:form.userId === null,
        })    
        //console.log('isError=> ',isError);          
    }, [form])
    
    useEffect(()=>{                                
        if(props.formDataUpdate && Object.keys(props.formDataUpdate).length > 0){
            console.log(props.formDataUpdate);  
            const {
                id = '',
                userId = '',
                title = '',
                body = ''
            } = props.formDataUpdate

            setForm((prev)=> ({
                ...prev,
                id: id,
                userId: userId,
                title: title,
                body: body
            }))
        }

    },[props.formDataUpdate])



    useEffect(() => {
                  
        fetchData()
    }, [])

    

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=`)
        .then((res)=>{
            //console.log(res.data);
            setData(res.data)
        })
        .catch((err)=>{
            console.log('Error=> ',err);
            
        })
    }
    
    return(
        <div>
            {loading && (
                <Box
                    sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.30)', // พื้นจางๆ
                    zIndex: 999,
                    }}
                >
                    <CircularProgress color="inherit" />
                </Box>
            )}
            <Box component={'form'} 
                onSubmit={(e)=> {
                    e.preventDefault();                    
                    if(isError.body || isError.title || isError.userId){return}
                    setLoading(true)
                    props.formSubmit(form)
                }}
            >

                <Autocomplete
                    value={data.find((e)=> e.id === form.userId) ?? null}
                    disablePortal
                    options={data}
                    getOptionLabel={(Option)=> Option.title}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Ueser" />}
                    onChange={(_,value)=> {                        
                        if(value){
                            setForm((prev) =>({
                                ...prev,
                                userId:value.id
                            }))                                                        
                        }else{
                            setForm((prev) =>({
                                ...prev,
                                userId:null
                            }))
                        }
                    }}
                    style={{
                        border:`1px solid ${isError.userId ? 'red':'rgb(255 255 255 / 31%)'}`
                    }}
                />

                <Typography 
                    variant="subtitle2"
                    color={isError.userId ? 'error' : ''}
                    className="mb-4"
                >
                    {
                        isError.userId ? 'โปรดเลือกรายการ' : ''
                    }
                </Typography>

                <TextField
                    label="Title" 
                    fullWidth
                    variant="outlined"
                    helperText={isError.title ? `เติมข้อความในช่อง` : ''}
                    error={isError.title}
                    value={form?.title}
                    onChange={(e)=> setForm(prev=> ({...prev,title:e.target.value}))}
                />   
                <Typography 
                    className="my-3"
                    variant="subtitle1"
                >
                    Body
                </Typography>  

                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="body"
                    className="w-full"
                    value={form.body}
                    style={{
                        border:`1px solid ${isError.body ? 'red':'rgb(255 255 255 / 31%)'}`
                    }}
                    onChange={(e)=> setForm(prev=> ({...prev,body:e.target.value}))}
                />
                
                <Typography 
                    variant="subtitle2"
                    color={isError.body ? 'error' : ''}
                >
                    {
                        isError.body ? 'เติมข้อความในช่อง' : ''
                    }
                </Typography>

                <Box className="flex justify-end">
                    <Button variant="contained" color="success" type="submit">Submit</Button>
                </Box>
            </Box>
        </div>
    )

}
export default UserForm