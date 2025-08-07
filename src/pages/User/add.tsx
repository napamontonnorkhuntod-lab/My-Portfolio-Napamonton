import axios from "axios";
import Navbar from "../../components/Navbar";
import UserForm from "../../components/userForm";

import { Container,Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddUser: React.FC = () => {

    const navigate = useNavigate()
    
    const submit = (form:React.FormEvent<HTMLFormElement>) => {        
        console.log(form);
        
        axios.post('https://jsonplaceholder.typicode.com/posts',form)
        .then((res)=>{
            console.log(res);
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
                icon: "success",
                title: "เพิ่มข้อมูลสำเร็จ"
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
                timer: 2000,
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


    return(
        <>
            <Navbar/>
            <Container>  
                <Typography variant="h3" className="mb-3">Add User</Typography>                
                    <UserForm
                        formSubmit={submit}
                    />
            </Container>
        </>
    )
}
export default AddUser