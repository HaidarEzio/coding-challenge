import tw from "tailwind-styled-components";

const ProductContainer = tw.section`flex w-full my-5 px-5 border-2 rounded-lg shadow-md`;
const ImageWrapper = tw.div`relative w-2/5  rounded-lg`;
const button = {
  wrapper: "flex justify-end w-full",
  element: "px-8 py-2 text-xs text-white bg-blue-600 rounded",
};
const ItemContainer = tw.div` flex items-center pb-2 mb-2 ml-10 border-b-2 border-gray-300`;
const ItemImageWrapper = tw.div` relative border border-gray-500 rounded-full h-[130px] w-[150px]`;

export { ProductContainer, ImageWrapper, button, ItemImageWrapper, ItemContainer };
