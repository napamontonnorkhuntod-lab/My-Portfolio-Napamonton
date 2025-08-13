import { Routes,Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import UserList from "../pages/UserList";
import Detail from "../pages/Detail"
import EditUser from "../pages/User/edit";
import AddUser from "../pages/User/add";
import Contact from "../pages/Contact";

const AppRoute = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="/user-list" element={<UserList/>}></Route>
            <Route path="/user/:id" element={<Detail/>}></Route>
            <Route path="/user/edit/:id" element={<EditUser/>}></Route>
            <Route path="/user-list/user/add" element={<AddUser/>}></Route>
        </Routes>
    )
}

export default AppRoute