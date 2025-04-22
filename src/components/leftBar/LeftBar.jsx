import "./LeftBar.css"
import { GoHomeFill } from "react-icons/go";
import { FiBell } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const LeftBar = () =>{
    return(
        <>
            <div className="container" style={{width:"10%"}}>
                
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