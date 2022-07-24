import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem, getDiscounts } from "../../features/cartSlice";

const CartItem = ({ id, name, price, amount, image }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <div className="flex items-center pb-2 mb-2 ml-10 border-b-2 border-gray-300">
      <div className="relative border border-gray-500 rounded-full h-[130px] w-[150px]">
        <Image className="border-red-700 rounded-full " src={image} alt="bread" layout="fill" objectFit="cover" />
      </div>
      <div className="w-4/5 ml-8">
        <h2 className="text-xl">{name}</h2>
        <h3 className="text-2xl text-right">£{price}</h3>
        <div className="flex items-center select-none">
          Quantity
          <div className="flex items-center ml-10">
            <AiOutlineMinus
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrement({ id }));
                dispatch(getDiscounts());
              }}
              size="27px"
              className="bg-white border-2 rounded-full "
            />
            <p className="w-10 mx-1 text-3xl text-center ">{amount}</p>
            <AiOutlinePlus
              onClick={() => {
                dispatch(increment({ id }));
                dispatch(getDiscounts());
              }}
              size="27px"
              className="bg-white border-2 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
