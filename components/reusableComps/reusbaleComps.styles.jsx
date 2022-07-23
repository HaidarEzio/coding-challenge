import tw from "tailwind-styled-components";

const ProductContainer = tw.section`flex w-full my-5 px-5 border-2 rounded-lg shadow-md`;
const ImageWrapper = tw.div`relative w-2/5  rounded-lg`;
const button = {
  wrapper: "flex justify-end w-full",
  element: "px-8 py-2 text-xs text-white bg-blue-600 rounded",
};

export { ProductContainer, ImageWrapper, button };
