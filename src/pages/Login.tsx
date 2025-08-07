
import '../assets/css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { useState,useEffect } from "react";
// import services from "../assets/config/services.js";
// import api from "../assets/js/apiUrl.js";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
     const [username, setUsername] = useState('')
     const [pass, setPass] = useState('')

     const navigate = useNavigate();

     const [loading, setloading] = useState(false)

    useEffect(() => {        
        console.log(loading);
              
        console.log('FIRST');    
    }, [])
    

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) =>{
        
        e.preventDefault()
        navigate("/home"); 
        setloading(true)
        // console.log('email',username);
        // console.log('pass',pass);
        // setloading(true)
        // console.log(loading);
        // services.login(username,pass)
        // .then((res)=>{
        //     setloading(false)
        //     console.log('RES=> ',res);    
        //     navigate("/home");  
        // })
        // .catch((err)=>{
        //     setloading(false)
        //     console.log('Err=> ',err);
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "error",
        //         title: "Signed in error"
        //       });
        // })
        
    }

    return(
        <div className="body-login">                                        
            <video 
                className="bg-video" 
                playsInline 
                autoPlay
                muted 
                loop
            >
                <source src="../../public/vedio/bg.mp4" type="video/mp4" />
            </video>
            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="fst-italic lh-1 mb-4">Login</h1>
                        <p className="mb-5">for company...</p>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleLogin}>                              
                            <div className="row input-group-newsletter">
                                <div className="col-12">
                                    <input 
                                        className="form-control" 
                                        id="username"
                                        type="text" 
                                        placeholder="Enter username address..." 
                                        aria-label="Enter username address..." 
                                        data-sb-validations="required,username" 
                                        value={username}
                                        onChange={(e)=> setUsername(e.target.value)}
                                        
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <input 
                                        type="password" 
                                        id="inputPassword6" 
                                        className="form-control" 
                                        placeholder="Enter password..." 
                                        aria-describedby="passwordHelpInline"
                                        value={pass}
                                        onChange={(e)=> setPass(e.target.value)}
                                        
                                    />
                                </div>
                                <div className="d-flex w-100 justify-content-end">
                                    <button 
                                        className="btn btn-primary w-100" 
                                        id="submitButton" 
                                        type="submit"
                                    >
                                        <div className={`spinner-border ${!loading ? 'd-none': ''}`} role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        <span className={` ${loading ? 'd-none': ''}`}>
                                            Sign in
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="social-icons">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                    <a className="btn btn-dark m-3" href="#!">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a className="btn btn-dark m-3" href="#!">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a className="btn btn-dark m-3" href="#!">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Login