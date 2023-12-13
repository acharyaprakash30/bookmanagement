import React, { useState } from "react";
import { APIURL } from "../../utils/constants";
import { HiCurrencyRupee } from "react-icons/hi";
import { RiShoppingBasketFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { btnClick } from "../../animations";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartAction";
import {
  calculateTotalQuantity,
  clearFields,
} from "../../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const BookCard = ({ item }) => {
  const { userData } = useSelector((state) => state.currUser);
  const { cartItems, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAnItemToCart = async () => {
    if (userData && localStorage.getItem("userToken")) {
      const userId = userData.id;
      const itemId = item.id;
      const quantity = 1;

      dispatch(addToCart({ userId, itemId,quantity }))
        .unwrap()
        .then(async() => {
          dispatch(calculateTotalQuantity(true));
          dispatch(clearFields());
        })
        .catch((error) => {
          // console.log(error);
        });
    } else {
      navigate("/login");
      toast("You must be logged in.", {
        icon: "👏",
      });
    }
  };
  

  return (
    <motion.div className=" duration-200  bg-white drop-shadow-md hover:shadow-lg hover:shadow-gray-400  flex items-center w-[350px] xs:w-225  sm:w-300 md:w-[230px] lg:w-[290px] py-4 pl-2 gap-1 rounded-lg mx-auto relative h-[10rem] book-item-card ">
      <LazyLoadImage
        className=" w-[8rem] xs:w-[6rem]  sm:max-w-[9rem] sm:min-w-[9rem]   md:min-w-[7rem] md:max-w-[7rem]   lg:min-w-[9rem] max-h-[9rem]   object-contain p-1 cursor-pointer "
        effect="opacity"
        src={`${APIURL}/file/${item.image}`}
        alt="FoodItem"
        delayTime={500}
        visibleByDefault={false}
        onClick={() =>navigate(`/book/${item.id}`)}
      />
      <div className="pt-4 w-28 lg:w-[120px] cursor-pointer " onClick={() =>navigate(`/book/${item.id}`)}>
      <p className=" text-headingColor font-semibold text-center ">
          {item.title}
        </p>
        <p className=" font-bold text-gray-400  text-center ">
          {item.author}
        </p>
        <p className="font-semibold text-red-500 flex items-center justify-center gap-1 pt-1">
          <HiCurrencyRupee className="text-xl" />
          {parseFloat(item.price)}
        </p>
      </div>
      <motion.div
        className="w-8 h-8 p-1  rounded-full bg-red-500 flex items-center justify-center absolute top-2 right-2 cursor-pointer active:bg-red-700 hover:bg-red-700"
        {...btnClick}
        onClick={addAnItemToCart}
      >
        <RiShoppingBasketFill className="text-3xl text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default BookCard;
