import "./Profile.css";
 import { FaFacebook } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";
 import { FaXTwitter } from "react-icons/fa6";
 import { FaPinterest } from "react-icons/fa";
 import { MdPlace } from "react-icons/md";
 import { IoLanguage } from "react-icons/io5";
 import { MdEmail } from "react-icons/md";
 import { BsThreeDotsVertical } from "react-icons/bs";

 
 const Profile = () => {
   return (
    <div className="container">
     <div className="profile-main">
       <div className="images">
         <img
           src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           alt=""
           className="cover"
         />
         <img
           src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
           alt=""
           className="profilePic"
         />
       </div>
       <div className="profileContainer">
         <div className="uInfo">
           <div className="left">
             <a href="http://facebook.com">
               <FaFacebook  fontSize={15} />
             </a>
             <a className="profile-a" href="http://facebook.com">
               <FaInstagram fontSize={15} />
             </a>
             <a className="profile-a" href="http://facebook.com">
               <FaXTwitter fontSize={15} />
             </a>
             <a className="profile-a" href="http://facebook.com">
               <FaLinkedin fontSize={15} />
             </a>
             <a className="profile-a" href="http://facebook.com">
               <FaPinterest fontSize={15} />
             </a>
           </div >
           <div className="center">
             <span className="profile-span">kedar</span>
             <div className="info">
               <div className="item">
               <MdPlace />
                 <span>kolhapur</span>
               </div>
               <div className="item">
               <IoLanguage />
                 <span>english,hindi,marathi</span>
               </div>
             </div>
             <button className="profile-button">follow</button>
           </div>
           <div className="right">
           <MdEmail />
           <BsThreeDotsVertical />
           </div>
         </div>
       {/* <Posts/> */}
       </div>
     </div>
     </div>
   );
 };
 
 export default Profile;