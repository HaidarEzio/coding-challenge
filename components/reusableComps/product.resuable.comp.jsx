import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

import { ProductContainer, ImageWrapper, button } from "./reusbaleComps.styles";

const Product = ({ name, description, price, image }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ProductContainer>
      <ImageWrapper>
        <Image className="rounded-lg" src={image} alt="bread" layout="fill" objectFit="contain" />
      </ImageWrapper>
      <div className="w-4/5 p-2">
        <div className="flex justify-between">
          <h3 className="font-bold">{name}</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={4.5}
            isHalf={true}
            emptyIcon={<FaRegStar />}
            halfIcon={<FaStarHalfAlt />}
            filledIcon={<FaStar />}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex">
          <p>{description}</p>
          <h5 className="pl-2 text-xl font-bold">£{price}</h5>
        </div>
        <div className={button.wrapper}>
          <button className={button.element}>ADD TO CART</button>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
