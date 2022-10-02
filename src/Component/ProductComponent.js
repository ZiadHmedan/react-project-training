import "./ProductComponent.css";
function ProductComponent(props) {
  return (
    <div className="child">
      <img src={props.imgs} alt="" className="ProductImg"></img>
      <p className="ProductDetails">{props.titles}</p>
      <strong class="price">{props.prices}$</strong>
      <button className="ProductButton">add to cart</button>
    </div>
  );
}
export default ProductComponent;
