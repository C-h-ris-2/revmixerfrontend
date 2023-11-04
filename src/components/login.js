import {useRef,useState,useEffect} from 'react';
import axios from 'axios'; 
import './forms.css';
import RegistrationForm from './register';
import { useNavigate } from 'react-router-dom';


  
function Login (){ 
    const navigate = useNavigate();

    //set focus on first input
    //set focus on errors
    const errRef = useRef();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[errMsg, setErrMsg] = useState('');
    //replace later: routing stage
    const[success, setSuccess] = useState(false);
    const[register, setRegister] = useState(false);


    useEffect(() => {
        setErrMsg('');
    }, [username,password])

    const handleRegister = () => {
        setRegister(!register);
    }

    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        //debugging
        try {
            let response = await axios.post("http://localhost:8080/comp333-hw3-frontend/index.php/user/login", { username, password });
            if (response.data.code === 0){
                console.log(response.data);
                navigate('/mainpage');
                //clear input fields
                localStorage.setItem("username",username)


            } else {
                setErrMsg("Username or password is incorrect");
                console.log(response.data.code);
            }
        }catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            }else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
        
        
    };

    return(
        // jsx checking succcess
         <>
         {!register &&
        <div>
            {/* screen reader announces error */}
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Welcome to RevMixer</h1>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor ="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder={"Type here"}
                    onChange={e=>setUsername(e.target.value)}
                    //control input: clear upon submission
                    required
                />

                <label htmlFor ="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    //control input: clear upon submission
                    required
                />  
                <button onClick={handleSubmit}>Log In</button>
            </form>
            <p>
                Don't have an account?<br />
                <button type="submit" onClick={() => handleRegister()}>
                    Register
                </button>
            </p>
        </div>
         }
        {register && <RegistrationForm setRegister={setRegister}/>}       

         </>
         
    )
} 

export default Login;