import "./Navbar.css";



const NavBar = () =>{
    return(
        <>
        <div className="container">
            <div className="navBar">
            <div className="nav">
                <div className="logo"><p style={{fontSize:"30px" , fontWeight:"600" , margin:"0.6rem" , padding:"0.3rem"}}>StuFer</p></div>
                
                <input type="text" className="search-bar" placeholder= "Search Someone"/>

                <div className="nav-items">
                    <p>For you</p>
                    <p>Friends</p>
                    <p>Community</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default NavBar