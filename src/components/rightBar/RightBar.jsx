import "./RightBar.css";

import React, { useState, useRef, useEffect } from 'react';

import { MdOutlinePhoto } from "react-icons/md";




const RightBar = () => {

        const [value, setValue] = useState('');
        const textareaRef = useRef(null);
      
        useEffect(() => {
          const textarea = textareaRef.current;
          if (textarea) {
            textarea.style.height = 'auto'; 
            textarea.style.height = `${textarea.scrollHeight}px`; 
          }
        }, [value]);

  return (
    <>
      <div className="container">
        <div className="rightBar">
        <div className="create-post">
          <div id="post-heading">
            <p>Create Post</p>
            
          </div>

          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Share Your Thoughts"
            style={{
              width: "100%",
              minHeight: "150px",
              resize: "none",
              overflow: "hidden",
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              color: "white",
              marginTop:"2rem"
            }}
          />

          <div>

          </div>
          <MdOutlinePhoto id="mediaLogo" style={{fontSize:"30px", marginBottom:"2rem"}}/>
          <div>
            <button id="post-btn">Share</button>
          </div>
        </div>
        </div>
      </div>

      
    </>
  );
};

export default RightBar;
