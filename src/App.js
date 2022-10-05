import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";
import React, { useState } from 'react';

function App() {
  const [products,setProducts]=useState([
    {
      id:1,
      name:"iPhone",
      price:10000
    },
    {
      id:2,
      name:"iWatch",
      price:3000
    },
    {
      id:3,
      name:"iPad",
      price:45000
    },
    {
      id:4,
      name:"iPen",
      price:29000
    },
    {
      id:5,
      name:"MacBook Pro",
      price:560000
    },
    {
      id:6,
      name:"iPhoneSE",
      price:65000
    },
  ])
  const [cartItems,setCartItems]= useState([])

  let addToCart = (product) => {
  setCartItems([...cartItems,product])
   }

   let removeFromCart =(product) =>{
    const indexVal = cartItems.findIndex(obj=>obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
            products.map((product)=>{
              return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
            })
          }
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
