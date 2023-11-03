import React, {useState} from 'react'; 
import {Link, Navigate} from "react-router-dom";
import { FaPlusCircle, FaEdit, FaTrashAlt, FaRegStar,FaStar } from 'react-icons/fa';
import axios from "axios";
import './mainpage.css';
import Update from './update';
  
function Stars(props){
    const starNum = props.id;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= starNum) {
          stars.push(<FaStar key={i} color="gold"/>); // Filled star icon
        } else {
          stars.push(<FaRegStar key={i} color="gold"/>); // Empty star icon
        }
    }
    return <span>
        {stars}
    </span>
}

function MainPage (){ 
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false);
        
    let icons = { color: "white", padding: 20 , background: '#282652'};
    let icons2 = { color: "white", padding: 20 , background: '#282652'};
    let spacing = '20px'


    const handleUpdate = (id) => {
        localStorage.setItem("id", id);
        setUpdate(!update);

    }

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

    return (<div>
        {!update && <div className="mainpageV">
            <p>You are logged in as {localStorage.getItem('username')}</p>
            <h1>Rev Mixer</h1>
            <Link to="/addnewsong"><FaPlusCircle padding="20px"/> Add a new song!</Link>
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
                            <td>
                                <Stars id={r.rating}/>
                            </td>
                            <td>
                            {r.username === localStorage.getItem('username') && (
                                <>
                                {/* <Link to={"/update/"}>
                                    <FaEdit color="white" />
                                </Link> */}
                                <button type="submit" onClick={handleUpdate({id: r.id})}>
                                    <FaEdit color="white"/>
                                </button>

                                <Link to={"/delete/"}>
                                    <FaTrashAlt color="white" />
                                </Link>
                                </>
                            )}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>}
        {update && Update({id: localStorage.getItem("id"), setUpdate: setUpdate, update: update})}
        </div>
    );
} 
  
export default MainPage;