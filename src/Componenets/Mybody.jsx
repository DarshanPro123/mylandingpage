import React, { useState, useEffect } from "react";

function Mybody() {
  return (
    <div>
      <div className="container">
        <div className="leftside animate">
          <div className="heading">
            <h1>YOUR FEET DESERVE THE BEST</h1>
          </div>
          <div className="content">
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="buttons">
              <button className="btn1">Shop</button>
              <button className="btn2">Category</button>
            </div>
          </div>
        </div>
        <div className="rightside animate-right">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mybody;
