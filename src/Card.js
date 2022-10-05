
function Card({product,addToCart,cartItems}){
    return(<div className="col-lg-4 border mt-2 p-2">
    <div className="row">
      <div className="col-lg-12">
      <img className="img-fluid" src="https://picsum.photos/500/300"/>
      <h3>{product.name}</h3>
      <h6>Price Rs.{product.price}</h6>
      <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={() => {
        addToCart(product)
        }} className="btn btn-sm btn-primary">
          {
             cartItems.some(obj => obj.id === product.id)?"Added to Cart":"Add to Card"
        }
        Add to Cart
      </button>
      </div>
    </div>
  </div>);
}

export default Card