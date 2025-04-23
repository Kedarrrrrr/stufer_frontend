


import { IoHeartOutline } from "react-icons/io5"
import "./Notification.css"
import { GoComment } from "react-icons/go"

const Notification = () => {
    return(
        <>
            <div className="container">
      <div className="pos-fixed">
      {/* <div className="heading">
        <p>Notifications</p>
      </div> */}
      <div className="right">
        <div style={{borderBottom:" 1px solid rgb(197, 197, 197)" , minWidth:"400px" , height:"max-content"}}>
        <div className="right-header">
          <div className="notify-picture">
            <img src="https://t4.ftcdn.net/jpg/06/02/80/95/360_F_602809556_HsRkD6daMX14r9JV1bL2hfZBrKm72ZlG.jpg" alt="" width={"40px"} height={"40px"} style={{borderRadius:"50%"}}/>
          </div>

          <div className="notify-name">
            <p>Kedar Patil</p>
          </div>

          <div className="notify-duration">
            <p>8hrs</p>
          </div>
        </div>

        <div className="right-content">
          <div className="right-desc">
            <p>hey how are you guys!</p>
          </div>

          <div className="right-icon">
              <IoHeartOutline style={{fontSize:"24px", marginRight:"1rem"}}/>
              <GoComment style={{fontSize:"22px"}}/>
          </div>
          
        </div>
        </div>

        {/* //second notification */}

        <div style={{borderBottom:" 1px solid rgb(197, 197, 197)" , minWidth:"400px" , height:"max-content"}}>
        <div className="right-header">
          <div className="notify-picture">
            <img src="https://t4.ftcdn.net/jpg/06/02/80/95/360_F_602809556_HsRkD6daMX14r9JV1bL2hfZBrKm72ZlG.jpg" alt="" width={"40px"} height={"40px"} style={{borderRadius:"50%"}}/>
          </div>

          <div className="notify-name">
            <p>Kedar Patil</p>
          </div>

          <div className="notify-duration">
            <p>8hrs</p>
          </div>
        </div>

        <div className="right-content">
          <div className="right-desc">
            <p>hey how are you guys!</p>
          </div>

          <div className="right-icon">
              <IoHeartOutline style={{fontSize:"24px", marginRight:"1rem"}}/>
              <GoComment style={{fontSize:"22px"}}/>
          </div>
          
        </div>
        </div>


        <div style={{borderBottom:" 1px solid rgb(197, 197, 197)" , minWidth:"400px" , height:"max-content"}}>
        <div className="right-header">
          <div className="notify-picture">
            <img src="https://t4.ftcdn.net/jpg/06/02/80/95/360_F_602809556_HsRkD6daMX14r9JV1bL2hfZBrKm72ZlG.jpg" alt="" width={"40px"} height={"40px"} style={{borderRadius:"50%"}}/>
          </div>

          <div className="notify-name">
            <p>Kedar Patil</p>
          </div>

          <div className="notify-duration">
            <p>8hrs</p>
          </div>
        </div>

        <div className="right-content">
          <div className="right-desc">
            <p>hey how are you guys!</p>
          </div>

          <div className="right-icon">
              <IoHeartOutline style={{fontSize:"24px", marginRight:"1rem"}}/>
              <GoComment style={{fontSize:"22px"}}/>
          </div>
          
        </div>
        </div>


        <div style={{borderBottom:" 1px solid rgb(197, 197, 197)" , minWidth:"400px" , height:"max-content"}}>
        <div className="right-header">
          <div className="notify-picture">
            <img src="https://t4.ftcdn.net/jpg/06/02/80/95/360_F_602809556_HsRkD6daMX14r9JV1bL2hfZBrKm72ZlG.jpg" alt="" width={"40px"} height={"40px"} style={{borderRadius:"50%"}}/>
          </div>

          <div className="notify-name">
            <p>Kedar Patil</p>
          </div>

          <div className="notify-duration">
            <p>8hrs</p>
          </div>
        </div>

        <div className="right-content">
          <div className="right-desc">
            <p>hey how are you guys!</p>
          </div>

          <div className="right-icon">
              <IoHeartOutline style={{fontSize:"24px", marginRight:"1rem"}}/>
              <GoComment style={{fontSize:"22px"}}/>
          </div>
          
        </div>
        </div>


        </div>
      </div>
      </div>
        </>
    )
}

export default Notification