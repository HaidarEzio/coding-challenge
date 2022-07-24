import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem, getDiscounts, removeDiscounts } from "../../features/cartSlice";
import { ItemImageWrapper, ItemContainer } from "./reusableComps.styles";

const CartItem = ({ id, name, price, amount, image }) => {
  const {
    discount: { bread },
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <ItemContainer>
      <ItemImageWrapper>
        <Image className="border-red-700 rounded-full " src={image} alt="bread" layout="fill" objectFit="cover" />
      </ItemImageWrapper>
      <div className="w-4/5 ml-8">
        <h2 className="text-xl">{name}</h2>
        <h3 className={`text-2xl text-right ${bread && id === "1" ? "line-through" : ""}`}>£{price}</h3>

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
                if (amount % 3 === 0) {
                  dispatch(removeDiscounts({ id }));
                }
              }}
              size="27px"
              className="bg-white border-2 rounded-full "
            />
            <p className="w-10 mx-1 text-3xl text-center ">{amount}</p>

            <AiOutlinePlus
              onClick={() => {
                dispatch(increment({ id }));
              }}
              size="27px"
              className="bg-white border-2 rounded-full "
            />
          </div>
          {bread > 0 && id === "1" && (
            <div className="w-full">
              {" "}
              <p className="text-2xl text-right text-red-500">0.50</p>
            </div>
          )}
        </div>
      </div>
    </ItemContainer>
  );
};

export default CartItem;
