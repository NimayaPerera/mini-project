/* eslint-disable no-template-curly-in-string */
import "./MenuItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function MenuItem({ item }) {
  //console.log("menuitem2222", api + item.item.image);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const api = "http://localhost:4200";
  return (
    <div className="menu-item-container">
      <img src={`${api}${item.image}`} alt="" />
      <h3 className="menu-item-title">{item.name}</h3>
      <h5 className="menu-item-price">{item.price}</h5>
      <button
        onClick={() => {
          handleAddToCart(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
