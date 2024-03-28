import React from 'react';
import './Body.css';
import { MdOutlineChat } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import photo from "../image/img-1.png";

export default function Body() {
  return (
    <div className='body1'>
        <form className='one'>
            <div className='btn-0'>
            <button className='btn-1'><MdOutlineChat className='icon' /> VIA SUPPORT CHAT</button>
            <button className='btn-2'><IoCallOutline className='icon_2' /> VIA CALL</button>
            </div>
            <button className='btn-3'><MdOutlineChat /> VIA EMAIL FORM</button> <br></br>
            <p>Name</p>
            <input type='text' /> <br></br>
            <p id="p2">E-Mail</p>
            <input type='text' id="i2" /> <br></br>
           <div className='text-big'>
           <p>TEXT</p> 
            <input type='text' /> <br></br>
           </div>
            <button className='sub'>Submit</button>
        </form>
        <div className='two'>
            <img src={photo} />
            
        </div>
    </div>
  )
}
