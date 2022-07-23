import styled from "styled-components";
import tw from "tailwind-styled-components";
import Image from "next/image";
const Header = tw.h1`
text-3xl my-5
`;

const Container = tw.div` m-3 p-5 w-[35rem]`;

const Products = () => {
  return (
    <Container>
      {/* <Contained>Interesing Test</Contained> */}
      <Header>Products</Header>
      <div className="flex w-full my-5 border shadow-md">
        <div className="relative w-2/4 ">
          <Image src="/bread.jpg" alt="bread" layout="fill" objectFit="cover" />
        </div>
        <div className="w-3/4">
          <div className="flex justify-between">
            <h3 className="text-bold">Whole French Bread</h3>
            <p>stars here</p>
          </div>
          <div className="flex">
            <p>Made in paris and Destinated to the whole world</p>
            <h5 className="pl-1 text-bold">£1.00</h5>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </Container>
  );
};

export default Products;
