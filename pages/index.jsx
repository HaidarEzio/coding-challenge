import Head from "next/head";

import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Cart from "../components/cart.comp";
import Products from "../components/products.comp";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../features/cartSlice";
import { useEffect } from "react";

const Container = tw.div`
    flex
    items-center
    justify-center
    
    w-full
    bg-white
`;

export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <Container>
      <Products />
      <Cart />
    </Container>
  );
}
