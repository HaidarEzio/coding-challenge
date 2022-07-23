import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-green-500
`;

export default function Home() {
  return (
    <Container>
      <div>Base File to Use Styled Components + Tailwind</div>
    </Container>
  );
}
