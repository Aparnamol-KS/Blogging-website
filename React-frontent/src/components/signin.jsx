import axios from "axios";

function Signin(){
    function signin(){
        axios.post('http://localhost:4000/signin',{
            username : document.getElementById('username').value,
            password : document.getElementById('password').value,   
        }).then(function(response){
            let token = response.data;
            localStorage.setItem('token',token);
            window.location = '/blogs'

        }).catch(error =>{
            alert(response.data.message)
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
        <h1 style={{fontSize:"60px"}}>Sign In</h1>
        <input style={{margin:"8px",width:"15%",padding:"7px"}} type="text" placeholder="Username" id ="username"/>
        <input style={{margin:"8px",width:"15%",padding:"7px"}} type="password" placeholder="Password" id="password"/>
        <button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px",width:"80px",margin:"20px"}} onClick={signin}>Sign in</button>
         <p>Don't have an account ? <a style={{textDecoration:"none" ,fontWeight:"bold"}} href="/signup">Sign Up</a></p>
    </div>
}


export default Signin;