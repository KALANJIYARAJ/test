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
      price:10000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009258/Croma%20Assets/Communication/Mobiles/Images/243459_0_ljp1lm.png/mxw_2048,f_auto"
    },
    {
      id:2,
      name:"iWatch",
      price:3000,
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-41-alum-silver-cell-8s_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779457078%2C1661976510573"
    },
    {
      id:3,
      name:"iPad",
      price:45000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631789200/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/243606_qwddtg.png/mxw_2048,f_auto"
      
    },
    {
      id:4,
      name:"iPen",
      price:29000,
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1540596407165"
    },
    {
      id:5,
      name:"MacBook Pro",
      price:560000,
      img:"https://media.croma.com/image/upload/v1663415332/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_0_ton7gy.png"
    },
    {
      id:6,
      name:"APPLE MacBook Air M1",
      price:65000,
      img:"https://rukminim1.flixcart.com/image/416/416/kyt0ya80/computer/i/d/p/na-thin-and-light-laptop-apple-original-imagaygvtvf6cx8h.jpeg?q=70"
    },
    {
      id:7,
      name:"iPhoneSE",
      price:65000,
      img:"https://boip.in/35824-thickbox_default/apple-iphone-x-256gb-certified-refurbished-very-good.jpg"
    },
    {
      id:8,
      name:"Apple MacBook Pro 2022",
      price:120790,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png/mxw_2048,f_auto"  
    },
  ])
  const [cartItems,setCartItems]= useState([])

  let addToCart = (product) => {
  setCartItems([...cartItems,product])
   }

    let removeFromCart =(product) => 
    
    {
    const indexVal = cartItems.findIndex(obj=>obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems]);
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            {
            products.map((product)=>{
              return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
            })
          }
          </div>
        </div>
        <div className="col-lg-2">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </div>
  );
}

export default App;
