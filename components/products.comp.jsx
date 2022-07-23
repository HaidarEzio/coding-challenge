import styled from "styled-components";
import tw from "tailwind-styled-components";
import { productData } from "../utils/placeHolderData";
import Product from "./reusableComps/product.resuable.comp";
import { Header } from "./styles";

const Container = tw.div`h-full m-3 p-5 w-[38rem]`;

const Products = () => {
  return (
    <Container>
      {/* <Contained>Interesing Test</Contained> */}
      <Header className="">Products</Header>

      {productData.map(({ id, name, description, price, image }) => (
        <Product key={id} name={name} description={description} price={price} image={image} />
      ))}
    </Container>
  );
};

export default Products;
