import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function IndividualBlog() {
    const [blog, setBlogs] = useState([])
    const { blogId } = useParams();
    useEffect(() => {
        axios.get('http://localhost:4000/blogs/' + blogId, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                alert('Error occurred!');
            });
    }, [blogId]);

    function back() {
        window.location = '/blogs';
    }


    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "cambria",
        padding:"50px"
    }}>
        <h1 style={{ fontSize: "40px" }}>{blog.title}</h1>
        <p style={{margin:"0px 16%",fontSize:"19px"}}>{blog.content}</p>
        <button style={{  backgroundColor: "black", color: "white", borderRadius: "5px", padding: "5px", width: "100px" , margin:"30px" }} onClick={back}>Back</button>


    </div>
}


export default IndividualBlog;