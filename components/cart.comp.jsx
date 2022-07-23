import { Header, Container } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import tw from "tailwind-styled-components";

import { useSelector } from "react-redux";
import CartItem from "./reusableComps/cartItem.reusable.comp";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Container className="bg-[#F7F7F7] font-bold">
      <div className="flex items-center ml-10">
        <Header>CART</Header>
        <AiOutlineShoppingCart size="30px" className="ml-2" />
      </div>
      {/* //? the actual Cart */}
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} {...item} />
      ))}
      <div className="ml-10 text-right">
        <p className="text-2xl text-gray-500 ">Subtotal:</p>
        <p className="text-xl font-normal ">5418</p>
        <p className="text-2xl text-gray-500 ">Discount:</p>
        <p className="text-xl font-normal ">5418</p>
        <p className="text-2xl text-gray-500 ">Total:</p>
        <p className="text-xl font-normal ">5418</p>
      </div>
    </Container>
  );
};

export default Cart;
