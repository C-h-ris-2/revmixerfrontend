import {useRef,useState,useEffect} from 'react';
import axios from 'axios'; 


  
function Login (){ 
    //set focus on first input
    const userRef = useRef();
    //set focus on errors
    const errRef = useRef();

    const[user, setUser] = useState('');
    const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    //replace later: routing stage
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        //debugging
        let res = await axios.post("http://localhost:8080/comp333-hw3-frontend/index.php/user/login", 
        {user, pwd});
        console.log(user,pwd);
        setUser('');
        setPwd('');
        if (res.data.code == '0'){
            setSuccess(true);
        }
    }

    return(
        // jsx checking succcess
         <>
         {success ? (
            <div>
                <h1>You are Logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
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
                    ref={userRef}
                    onChange={(e)=>setUser(e.target.value)}
                    //control input: clear upon submission
                    value={user}
                    required
                />

                <label htmlFor ="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    //control input: clear upon submission
                    value={pwd}
                    required
                />  
                <button>Log In</button>
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