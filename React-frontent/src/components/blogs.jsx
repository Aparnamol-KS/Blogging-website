import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import YourBlogs from "./yourBlogs";

function Blogs() {
    const navigate = useNavigate();  
    function createBlog(){
        window.location = '/createBlog'
    }

    function view(id){
        navigate(`/blogs/${id}`); 
    }

    function yourBlogs(){
        navigate('/yourBlogs')
    }

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/blogs', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(function (response) {
            console.log(response.data)

            setBlogs(response.data)
        })
    }, []);

    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "cambria"
    }}>
        <h1 style={{fontSize:"60px"}}>Blogs</h1>
       <div style={{
        display:"flex",
       }}>
         <button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px",width:"100px", margin:"10px"}} onClick={createBlog}>Create Blog</button>
        <button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px",width:"100px", margin:"10px"}} onClick={yourBlogs}>Your Blogs</button>
       </div>
        {blogs.map(blog=>
             <div key={blog._id}  style={{padding:"10px", border:"1px solid black", width:"50%",boxShadow:"3px 2px 4px grey",margin:"10px",cursor:"pointer"}} onClick={()=>view(blog._id)}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
            </div>
        )}

    </div>
}



export default Blogs;

