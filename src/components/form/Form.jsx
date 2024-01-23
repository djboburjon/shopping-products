import React from 'react'
import './Form.css'

function Form({ getData, typeThing, setTypeThing }) {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <img src="./imgs/search.png" alt="Search icon" />
          <input
            className="searchState"
            type="text"
            placeholder="Search for a country..."
          />
        </label>
        <select
          onChange={(e) => {
            if (e.target.value=="all") {
              getData("https://fakestoreapi.com/products");
            }else{
              getData(`https://fakestoreapi.com/products/category/${e.target.value}`);
            }
           
          }}
          className="regionFilter"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </form>
    </div>
  );
}

export default Form