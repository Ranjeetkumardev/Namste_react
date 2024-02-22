import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
 //console.log("cardItem :", cartItems)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Cart Items - {cartItems.length}</h1>
      <button className="m-2 p-2 bg-pink-200 rounded-md font-bold" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <button className="m-2 p-2 bg-pink-200 rounded-md font-bold" onClick={() => handleClearCart()}>
      make payment
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
