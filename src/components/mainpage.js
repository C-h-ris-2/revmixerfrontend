import React, {useState} from 'react'; 
import {Link} from "react-router-dom";
import { FaPlusCircle, FaEdit, FaGlasses, FaTrashAlt, FaRegStar,FaStar } from 'react-icons/fa';
import axios from "axios";
import './mainpage.css';
  
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
        
    let icons = { color: "white", padding: 20 , background: '#282652'};
    let icons2 = { color: "white", padding: 20 , background: '#282652'};
    let spacing = '20px'


    const query = async () => {
        let response = await axios.get("http://localhost/comp333hw3/index.php/user/songlist", {});
        if (response.data.code === 0) {
            setPosts(response.data.data);
        } else {
            console.error('Error fetching data');
            alert(response.data.msg); 
        }
    }

    query();

    return (
        <div className="mainpage">
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
                {posts.map((r, i) => (
                    <tr className="idV" key={i} style={{ marginRight: spacing + 'em' }}>
                        <td><Link to="/view">{r.id}</Link></td>
                        <td>{r.username}</td>
                        <td>{r.artist}</td>
                        <td>{r.song}</td>
                        <td>{r.rating}</td>
                        <td>
                        {r.username === localStorage.getItem('username') && (
                            <>
                            <Link to={{ pathname: '/view', state: 'hello' }}>
                                <FaGlasses style={icons} />
                            </Link>
                            <Link to="/update">
                                <FaEdit style={icons} />
                            </Link>
                            <Link to="/delete">
                                <FaTrashAlt style={icons} />
                            </Link>
                            </>
                        )}
                        </td>
                    </tr>
                    ))}
            </tbody>
        </table>
        </div>
    );
} 
  
export default MainPage;