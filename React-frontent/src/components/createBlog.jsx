import axios from 'axios'
function CreateBlog(){

    function createBlog(){
        axios.post('http://localhost:4000/createBlog',{
            title : document.getElementById('title').value,
            content : document.getElementById('content').value 
        },{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then(function(response){
            window.location = '/blogs'
        }).catch(error=>{
            alert("error")
        })
    }

     return <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px",
        fontFamily:"cambria"

    }}>
        <h1 style={{fontSize:"50px"}}>Create Your Blog</h1>
        <input style={{margin:"8px",width:"600px"}} type="text"  placeholder="Title" id ="title"/>
        <textarea style={{margin:"8px"}} rows={10} cols={80} placeholder="Content" id="content" />
        <button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px",width:"80px"}} onClick={createBlog}>Create</button>
    </div>
}


export default CreateBlog;

