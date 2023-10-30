import React, {useEffect, useState } from 'react'; 
 import axios from "axios";



  
function MainPage (){ 
    const [posts, setPosts] = useState([]);

    const query = async () => {
        let response = await axios.get("http://localhost:8080/comp333-hw3-frontend/index.php/user/songlist", {});
        if (response.data.code ==0) {
            setPosts(res.data.data);
        } else {
            alert(response.data.msg); 
        }
    }
    
    return (
        <div>
            {posts.map((data) =>{
                return (
                    <div key={data.id}>
                        <h4>{data.title}</h4>
                        <p>data.body</p>
                        </div>
                );
            })}
        </div>
    );
} 
  
export default MainPage;