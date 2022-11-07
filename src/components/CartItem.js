import { IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

import "./Cart.css";

function CartItem({ item }) {
  const api = "http://localhost:4200";
  console.log("itemmmmm", item);
  return (
    <div className="cart-item-container">
      <img src={`${api}${item.image}`} alt="" />

      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <h5 className="cart-item-price">
          {item.price} x {item.cartQuantity}
        </h5>

        <div className="add-delete-buttons">
          {/* <IconButton
            size="sm"
            colorScheme="blue"
            icon={<AddIcon w={3} h={3} />}
            onClick={handleAdd}
          />
          <IconButton
            size="sm"
            colorScheme="yellow"
            icon={<CloseIcon w={3} h={3} />}
            onClick={handleReduce}
          /> */}
        </div>
      </div>

      <div>
        <IconButton
          colorScheme="red"
          size="md"
          icon={<DeleteIcon w={5} h={5} />}
        />
      </div>
    </div>
  );
}

export default CartItem;
