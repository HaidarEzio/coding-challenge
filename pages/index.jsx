import Head from "next/head";

import tw from "tailwind-styled-components";
import Cart from "../components/cart.comp";
import Products from "../components/products.comp";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getDiscounts } from "../features/cartSlice";
import { useEffect } from "react";

const Container = tw.div` flex items-center justify-center w-full bg-white `;

export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
    dispatch(getDiscounts());
  }, [cartItems]);
  return (
    <Container>
      <Head>
        <title>Coding Challenge</title>
      </Head>
      <Products />
      <Cart />
    </Container>
  );
}
