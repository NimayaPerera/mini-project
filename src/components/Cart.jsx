import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import "./Cart.css";
import { getTotal, removeItemFromCart } from "../features/cartSlice";
import { decreaseItem } from "../features/cartSlice";
import { addToCart } from "../features/cartSlice";
import { clearCart } from "../features/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("carttttt", cart.cartItems);
  const api = "http://localhost:4200";

  useEffect(() => {
    dispatch(getTotal());
  }, [Cart, dispatch]);

  const handleRemove = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
  };

  const handleDecreasing = (cartItem) => {
    dispatch(decreaseItem(cartItem));
  };

  const handleIncreasing = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1>cart</h1>
      {cart.cartItems.map((item) => (
        <div className="cart-item-container">
          <img src={`${api}${item.image}`} alt="" />

          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.name}</h3>
            <h5 className="cart-item-price">
              {item.price} x {item.cartQuantity}
            </h5>
            <div className="add-delete-buttons">
              <IconButton
                size="lg"
                colorScheme="blue"
                icon={
                  <AddIcon
                    w={10}
                    h={10}
                    onClick={() => {
                      handleIncreasing(item);
                    }}
                  />
                }
              />
              <IconButton
                size="lg"
                colorScheme="yellow"
                icon={
                  <CloseIcon
                    w={10}
                    h={10}
                    onClick={() => {
                      handleDecreasing(item);
                    }}
                  />
                }
              />
            </div>
          </div>
          <div>
            <IconButton
              colorScheme="red"
              size="md"
              icon={
                <DeleteIcon
                  w={20}
                  h={20}
                  onClick={() => {
                    handleRemove(item);
                  }}
                />
              }
            />
          </div>
        </div>
      ))}
      <div className="cart-total">Total : {cart.cartTotalAmount}.00</div>
      <button
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
