
function Card({product,addToCart,cartItems}){
    return(<div className="col-lg-3 border m-3 p-1">
      <img className="img-fluid" src={product.img}/>
      <h3>{product.name}</h3>
      <h6>Price Rs.{product.price}</h6>
      <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={() => {
        addToCart(product)
        }} className="btn btn-sm btn-primary">
          {
             cartItems.some(obj => obj.id === product.id)?"Added to Cart":"Add to Card"
        }
      </button>
  </div>);
}

export default Card