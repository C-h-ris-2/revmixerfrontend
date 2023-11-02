import React, {useEffect, useState, Component} from 'react'; 
import {Link, useLocation} from "react-router-dom";
import { FaEdit, FaGlasses, FaTrashAlt } from 'react-icons/fa';
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

    const imageClick = async(e) =>{
        console.log('success')
    }

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
                                <th></th>
                            </tr>
                        </thead>
                <tbody>
            {posts.map((r, i) =>(
                        <tr className="idV" key={i}>
                            {/* <td>{r.id}</td> */}
                            <td><Link to="/view">{r.id}</Link></td>
                            <td>{r.username}</td>
                            <td>{r.artist}</td>
                            <td>{r.song}</td>
                            <td>{r.rating}</td>
                            <td className='icons'>
                                <FaGlasses />
                                <FaEdit />
                                <FaTrashAlt />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    );
} 
  
export default MainPage;