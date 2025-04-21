import "./LeftBar.css"
import { GoHomeFill } from "react-icons/go";
import { FiBell } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const LeftBar = () =>{
    return(
        <>
            <div className="container">
                {/* <div className="profile-home">
                    <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" style={{borderRadius:"50%", width:"40px", height:"40px"}} />
                    <p style={{fontSize:"18px", }}>anonymous</p>
                    <p style={{fontSize:"14px" , opacity:"60%" }}>@anonymous</p>
                </div> */}
                <div className="profile">

                <div className="profile-items">
                <GoHomeFill />
                <FiBell />
                <IoAddOutline/>
                <IoPerson />
                <IoLogOutOutline />
                </div>
                </div>
            </div>
        </>
    )
}

export default LeftBar