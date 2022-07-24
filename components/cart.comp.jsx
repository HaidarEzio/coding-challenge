import { Header, Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import tw from "tailwind-styled-components";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "./reusableComps/cartItem.reusable.comp";
import { discounting } from "../features/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const {
    cartItems,
    subtotal,
    discount: { bread, milk },
  } = useSelector((state) => state.cart);
  let discount = bread + milk;

  return (
    <Container className="bg-[#F7F7F7] h-screen font-bold">
      <div className="flex items-center ml-10">
        <Header>CART</Header>
        <AiOutlineShoppingCart size="30px" className="ml-2" />
      </div>
      {/* //? the actual Cart */}
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} {...item} />
      ))}
      <div className="pt-3 ml-10 text-right ">
        <div className="flex justify-between">
          {cartItems.map((item) =>
            item.id === "2" && Number.isInteger(milk / 1.15) ? <p className="text-left"> you get {milk / 1.15} free milk </p> : null
          )}
          <p className="text-2xl text-gray-500 ">Subtotal:</p>
        </div>
        <p className="text-xl font-normal ">£{subtotal ? subtotal.toFixed(2) : 0}</p>

        <p className="text-2xl text-gray-500 ">Discount:</p>
        <p className="text-xl font-normal ">£{discount ? discount.toFixed(2) : 0}</p>
        <p className="text-2xl text-gray-500 ">Total:</p>
        <p className="text-xl font-normal ">£{subtotal ? (subtotal - discount).toFixed(2) : 0}</p>
      </div>
    </Container>
  );
};

export default Cart;
