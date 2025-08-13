import { useParams } from "react-router-dom";
import { Container} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Navbar  from '../components/Navbar';



const Detail:React.FC = () =>{
    const { id } = useParams()

    interface FormData{
        title:string,
        body:string,
        userId:number|string,
    }
    
    const [form, setForm] = useState<FormData>({
        title:'',
        body:'',
        userId:'',
    })  
    
    const fetchData = async() => {
        const dataList = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const { title, body, userId } = dataList.data

        const dataDetail = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        const userDetail = dataDetail.data.title

        setForm({
            title:title,
            body:body,
            userId:userDetail
        })
        
    }

    useEffect(() => {        
        fetchData()
    }, [])

    useEffect(()=>{
        console.log('Form=> ',form);
        
    },[form])
    

    return (
        <>
            <Navbar/>
            <Container>
                <h1 className="text-center">Data Detail</h1>
                <h3 className="my-3">User ID : {form.userId}</h3>
                <h4 className="my-3">Title : {form.title}</h4>
                <h5 className="my-3">Body : {form.body}</h5>
            </Container>
            
        </>
    )
}
export default Detail