import Head from "next/head";

import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Cart from "../components/cart.comp";
import Products from "../components/products.comp";

const Container = tw.div`
    flex
    items-center
    justify-center
    w-full
    bg-white
`;

export default function Home() {
  return (
    <Container>
      <Products />
      <Cart />
    </Container>
  );
}
