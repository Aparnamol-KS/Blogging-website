function Landing() {
    return <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center",
            fontFamily: "cambria",
            height:"100vh"
        }}
    >
        <h3 style={{ fontSize: "70px", margin:'10px' }}>Blogging Spot</h3>
        <p>Create, Share, and Explore Amazing Blogs by People Like You!</p>
        <div>
            <button
                style={{
                    marginRight: "10px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
                onClick={() => window.location = "/signup"}
            >
                Get Started
            </button>

            <button
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
                onClick={() => window.location = "/signin"}
            >
                Sign In
            </button>
        </div>

    </div>
}


export default Landing;






