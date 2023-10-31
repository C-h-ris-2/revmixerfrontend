import React, {useEffect, useState, Component} from 'react'; 
import axios from "axios";
  
function MainPage (){ 
    const [posts, setPosts] = useState([]);

    const query = async () => {
        let response = await axios.get("http://localhost/comp333hw3/index.php/user/songlist", {});
        if (response.data.code == 0) {
            setPosts(response.data.data);
        } else {
            console.error('Error fetching data');
            alert(response.data.msg); 
        }
    }

    query();

    return (
        <div className="mainpageV">
            <h1>Main Page</h1>
            <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Artist</th>
                                <th>Song</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                <tbody>
            {posts.map((r, i) =>(
                        <tr classname="idV" key={i}>
                            <td>{r.id}</td>
                            <td>{r.username}</td>
                            <td>{r.artist}</td>
                            <td>{r.song}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    );
} 
  
export default MainPage;