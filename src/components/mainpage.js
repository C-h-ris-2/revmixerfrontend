import React, {useEffect, useState } from 'react'; 
 import axios from "axios";



  
function MainPage (){ 
    const [posts, setPosts] = useState([]);

    const query = async () => {
        let response = await axios.get("http://localhost/comp333-hw3-frontend/index.php/user/songlist", {});
        if (response.data.code ==0) {
            setPosts(response.data.data);
        } else {
            alert(response.data.msg); 
        }
    }

    query()

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
            {posts.map((data) =>{
                return (
                        <tr classname="idV" key={data.id}>
                            <p>{data.id}</p>
                            <p>{data.username}</p>
                            <p>{data.artist}</p>
                            <p>{data.song}</p>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
} 
  
export default MainPage;