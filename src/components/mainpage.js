import React, {useState} from 'react'; 
import {Link} from "react-router-dom";
import { FaPlusCircle, FaEdit, FaGlasses, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";
import './mainpage.css';
  
function MainPage (){ 
    const [posts, setPosts] = useState([]);

    const query = async () => {
        let response = await axios.get("http://localhost:8080/comp333-hw3-frontend/index.php/user/songlist", {});
        if (response.data.code === 0) {
            setPosts(response.data.data);
        } else {
            console.error('Error fetching data');
            alert(response.data.msg); 
        }
    }

    query();

    // const imageClick = async(e) =>{
    //     console.log('success')
    // }
    
    let icons = { color: "white", padding: 20 , background: '#282652'};
    let icons2 = { color: "white", padding: 20 , background: '#282652'};
    let spacing = '20px'

    return (
        <div className="mainpageV">
            <p>You are logged in as {localStorage.getItem('username')}</p>
            <h1>Rev Mixer</h1>
            <Link to="/addnewsong"><FaPlusCircle style={icons2}/> Add a new song!</Link>
            <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Artist</th>
                                <th>Song</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                <tbody>
            {posts.map((r, i) =>(
                        <tr className="idV" key={i} style={{marginRight: spacing + 'em'}}>
                            {/* <td>{r.id}</td> */}
                            <td><Link to="/view">{r.id}</Link></td>
                            <td>{r.username}</td>
                            <td>{r.artist}</td>
                            <td>{r.song}</td>
                            <td>{r.rating}</td>
                            <td>
                            <Link 
                                to={{
                                        pathname: '/view', 
                                        state:"hello"
                                    }}>
                                    <FaGlasses style={icons}/>
                                </Link>
                                <Link to="/update"><FaEdit style={icons}/></Link>
                                <Link to="/delete"><FaTrashAlt style={icons}/></Link>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    );
} 
  
export default MainPage;