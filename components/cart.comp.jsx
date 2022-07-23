import { Header, Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";
import tw from "tailwind-styled-components";
import Image from "next/image";

const Cart = () => {
  return (
    <Container className="bg-[#F7F7F7] pt-28 font-bold">
      <div className="flex items-center ml-10">
        <Header>CART</Header>
        <AiOutlineShoppingCart size="30px" className="ml-2" />
      </div>
      {/* //? the actual Cart */}
      <div className="flex items-center pb-2 mb-5 ml-10 border-b-2 border-gray-300">
        <div className="relative border border-gray-500 rounded-full h-[130px] w-[150px]">
          <Image className="border-red-700 rounded-full " src="/butter.jpg" alt="bread" layout="fill" objectFit="cover" />
        </div>
        <div className="w-4/5 ml-8">
          <h2 className="text-xl">Bread</h2>
          <h3 className="text-2xl text-right">£1.60</h3>
          <div className="flex items-center">
            Quantity{" "}
            <div className="inline-flex items-center ml-10">
              {" "}
              <AiOutlineMinus size="27px" className="bg-white border-2 rounded-full " /> <span className="mx-5 text-4xl">2</span>{" "}
              <AiOutlinePlus size="27px" className="bg-white border-2 rounded-full " />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-2 mb-5 ml-10 border-b-2 border-gray-300">
        <div className="relative border border-gray-500 rounded-full h-[130px] w-[150px]">
          <Image className="border-red-700 rounded-full " src="/butter.jpg" alt="bread" layout="fill" objectFit="cover" />
        </div>
        <div className="w-4/5 ml-8">
          <h2 className="text-xl">Bread</h2>
          <h3 className="text-2xl text-right">£1.60</h3>
          <div className="flex items-center">
            Quantity{" "}
            <div className="inline-flex items-center ml-10">
              {" "}
              <AiOutlineMinus size="27px" className="bg-white border-2 rounded-full " /> <span className="mx-5 text-4xl">2</span>{" "}
              <AiOutlinePlus size="27px" className="bg-white border-2 rounded-full " />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-2 mb-5 ml-10 border-b-2 border-gray-300">
        <div className="relative border border-gray-500 rounded-full h-[130px] w-[150px]">
          <Image className="border-red-700 rounded-full " src="/butter.jpg" alt="bread" layout="fill" objectFit="cover" />
        </div>
        <div className="w-4/5 ml-8">
          <h2 className="text-xl">Bread</h2>
          <h3 className="text-2xl text-right">£1.60</h3>
          <div className="flex items-center">
            Quantity{" "}
            <div className="inline-flex items-center ml-10">
              {" "}
              <AiOutlineMinus size="27px" className="bg-white border-2 rounded-full " /> <span className="mx-5 text-4xl">2</span>{" "}
              <AiOutlinePlus size="27px" className="bg-white border-2 rounded-full " />{" "}
            </div>
          </div>
        </div>
      </div>

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
