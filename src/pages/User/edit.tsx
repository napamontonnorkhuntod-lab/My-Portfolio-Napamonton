import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/userForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar  from "../../components/Navbar";
import { Container,Typography } from "@mui/material";

import Swal from "sweetalert2";



const EditUser: React.FC = ()=> {

    const navigate = useNavigate()

    interface formData{
        id?:number | string,
        title:string,
        body:string,
        userId:string | number,
    }

    const { id } = useParams()

    const [formdata,setFormData] = useState<formData>({
        id:0,
        title:'',
        body:'',
        userId:0,
    })

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{            
            setFormData(res.data)  
        })
        .catch((err)=>{
            console.log('ERR=> ',err);
            
        })
    }

    const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log('EDIT');
        console.log(e);
        
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,e)
        .then((res)=>{  
            console.log(res);

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
                title: "แก้ไขข้อมูลสำเร็จ"
              }).finally(()=>{
                navigate('/user-list')
              })
        })
        .catch((err)=>{
            console.log(err);  
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "เพิ่มรายการไม่สำเร็จ"
              });          
        })
        
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    


    return (
        <>
            <Navbar/>
            <Container>
                <Typography variant="h3" className="mb-3">Update User</Typography>
                <UserForm
                    formSubmit={formSubmit}
                    formDataUpdate={formdata}
                />
            </Container>
        </>
    )
}
export default EditUser