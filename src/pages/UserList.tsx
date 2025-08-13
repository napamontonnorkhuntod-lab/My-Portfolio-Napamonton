import React, { useState,useEffect } from 'react'

import axios from "axios";
import { useNavigate } from "react-router-dom";


import CardComponent from "../components/CardComponent";
// import services from "../assets/config/services";
// import api from "../assets/js/apiUrl";

import { Container, Box, Typography, Button, Skeleton,Card,CardHeader,CardContent } from "@mui/material";

import Swal from 'sweetalert2';


const UserList:React.FC = () => {
  

  type gpt = {
    userId: number,
    id: number,
    title: string,
    body: string,
  }

  const navigate = useNavigate()
  const [gpts, setGpts] = useState<gpt[]>([])

  const [loading, setLoading] = useState<boolean>(false)

  const [favor, setFavor] = useState<{[id:number]:boolean}>({})
  
  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {

    setLoading(true)
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{      
        const data = Array.isArray(res.data) ? res.data : [res.data]
              
        setGpts(data)      
      }).catch((err)=>{
        console.log(err);      
      })
    } catch (error) {
      console.error(error)
    } finally{
      setLoading(false)
    }
    
    
  }

  const checkStatus = (id:number) => {    
     setFavor(prev => ({
      ...prev,
      [id]: !prev[id]
     }))
     console.log('Favor=> ',favor);    
  }

  const delData = async(id:number) => {
      console.log('del',id);
      setLoading(true)
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res)=>{
        console.log(res);
        if(res.status === 200){          
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "ลบข้อมูลสำเร็จ"
          }).finally(()=>{
            setLoading(false)
            getData()
          })
        }
      })
      .catch((err)=>{
        console.log(err);        
      })
  }

  


  return (
    <>
        <Box className="flex flex-wrap w-full justify-center items-center my-3">
            <Typography variant='h3' className='text-white'>
              User List
            </Typography>      
                
            <Button 
              variant="contained" 
              color='success' 
              className='mx-3 h-[32px]'
              onClick={()=> {navigate('/user-list/user/add')}}
            >
              Add Data
            </Button>  
        </Box>
        <Container maxWidth='xl'>          
          <div className="flex flex-wrap w-full ms-1 me-2">            
            {
              loading ? (
                <>
                  {                    
                      [...Array(8)].map((_,index) => (
                        <div key={index} className="w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
                          <Card sx={{ maxWidth: 345, m: 2,}} className='' >
                            <CardHeader
                              avatar={
                                  <Skeleton animation="wave" variant="circular" width={40} height={40} />
                              }
                              title={
                                  <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{ marginBottom: 6 }}
                                  />
                              }
                              subheader={
                                  <Skeleton animation="wave" height={10} width="40%" />
                              }
                            />
                              <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                            <CardContent>
                                <>
                                  <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                  <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                  <Skeleton animation="wave" height={10} width="70%" />
                                </>
                            </CardContent>
                          </Card>
                        </div>
                      ))
                  }
                </>
              ) : (
                gpts.map((res) => (
                  <CardComponent                               
                    key={res.id}
                    image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                    title={res.title}
                    subTitle={res.title}
                    detail={res.body}
                    idData={res.id}
                    checkStatus={() => checkStatus(res.id)}
                    delData={delData}
                    favor={favor[res.id] || false}
                  />   
                ))
              )
            }
          </div>
        </Container>

    </>
  )
}

export default UserList