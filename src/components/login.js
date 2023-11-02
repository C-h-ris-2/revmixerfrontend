import {useRef,useState,useEffect} from 'react';
import axios from 'axios'; 


  
function Login (){ 
    //set focus on first input
    //set focus on errors
    const errRef = useRef();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[errMsg, setErrMsg] = useState('');
    //replace later: routing stage
    const[success, setSuccess] = useState(false);


    useEffect(() => {
        setErrMsg('');
    }, [username,password])

    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        //debugging

        try {
            let response = await axios.post("http://localhost:8080/comp333-hw3-frontend/index.php/user/login", { username, password });
            if (response.data.code === 0){
                console.log(response.data);
                setSuccess(true);
                //clear input fields
                setUsername('');
                setPassword('');
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
         {success ? (
            <div>
                <h1>You are Logged in!</h1>
                <br />
                <p>
                    <a href="/mainpage">Go to Home</a>
                </p>
            </div>
         ) : ( 
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
                <span className="line">
                    <a href="/register">Register</a>
                </span>
            </p>
        </div>
         )}
         </>
    )
} 
  
export default Login;