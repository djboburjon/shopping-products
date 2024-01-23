import React from 'react'
import './Navbar.css'
import { FaRegMoon, FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


function Navbar({liked, setLiked, cart1, setCart1, added, setAdded, cart, setMode, mode, setCart }) {
  return (
    <nav>
      <div className={added ? "added" : "added active"}>
        {cart.map((item)=>{
          return (
            <div className="box" key={item.id}>
              <img src={item.image} alt="" />
              <div className="box_title">{item.title.slice(0, 20)}...</div>
              <MdOutlineRemoveCircle className='remove_btn' onClick={()=>{
                const removeInfo = cart.filter((info)=>{
                  return info.id != item.id
                })
                setCart(removeInfo)  
              }} />
            </div>
          )
        })}
      </div>
      <div className={liked ? "liked" : "liked active"}>
        {cart1.map((item)=>{
          return (
            <div className="box" key={item.id}>
              <img src={item.image} alt="" />
              <div className="box_title">{item.title.slice(0, 20)}...</div>
              <MdOutlineRemoveCircle className='remove_btn' onClick={()=>{
                const removeInfo = cart1.filter((info)=>{
                  return info.id != item.id
                })
                setCart1(removeInfo)  
              }} />
            </div>
          )
        })}
      </div>
      <div className="container">
        <div className="nav">
          <div className='logo'>
            <FaCartShopping className='logo_icon' />
            <h3>SHOPPING</h3>
          </div>
          <div className="selected" onClick={()=>{
              setLiked(!liked)
            }}>
            <span>{cart1.length}</span>
            <FaHeart />
          </div>
          <div className="shop" onClick={()=>{
              setAdded(!added)
            }}>
            <span>{cart.length}</span>
            <FaShoppingCart />
          </div>
          <div
            onClick={() => {
              setMode(!mode);
            }}
            className="mode"
          >
            {" "}
            <FaRegMoon /> Dark Mode
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar