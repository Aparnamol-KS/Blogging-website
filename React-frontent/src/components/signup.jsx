import axios from "axios";

function Signup(){
    function addUser(){
        axios.post('http://localhost:4000/signup',{
            username : document.getElementById('username').value,
            name : document.getElementById('name').value,
            password : document.getElementById('password').value
        }).then(function(response){
            alert(response.data);
            window.location = '/signin'
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
        <h1 style={{fontSize:"60px"}}>Sign Up</h1>
        <input style={{margin:"8px", width:"15%",padding:"7px"}} type="text" placeholder="Username" id ="username"/>
        <input style={{margin:"8px", width:"15%",padding:"7px"}} type="text" placeholder="Name" id="name" />
        <input style={{margin:"8px",width:"15%",padding:"7px"}} type="password" placeholder="Password" id="password"/>
        <button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px",width:"80px",margin:"20px"}} onClick={addUser}>Sign Up</button>
        <p>Already have an account ? <a style={{textDecoration:"none" ,fontWeight:"bold"}} href="/signin">Sign In</a></p>
    </div>
}

export default Signup;