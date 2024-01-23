import React from 'react'
import './Cards.css'
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function Cards({cart1, setCart1, data, cart, setCart}) {
  return (
    <div className="cards">
      {data &&
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="addtoLiked">
                <FaRegHeart onClick={()=>{
                  const newLiked = data.filter((prod)=>{
                    return prod.id == item.id
                  })
                  setCart1([...cart1, newLiked[0]])
                }} />
              </div>
              <div className="addtoCart">
                <FaCartPlus onClick={()=>{
                  const newData = data.filter((product)=>{
                    return product.id == item.id
                  })

                  setCart([...cart, newData[0]])

                }}/>
              </div>
              <img src={item.image} alt="" />
              <div className='card_info'>
                <h2>{item.title.slice(0, 20)}...</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cards