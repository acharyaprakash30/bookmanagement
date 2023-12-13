import React, { useEffect, useState } from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { btnClick } from "../../animations";
import { addToCart } from "../../store/cart/cartAction";
import { calculateTotalQuantity, clearFields } from "../../store/cart/cartSlice";
import toast from "react-hot-toast";
import { getItemById } from "../../store/product/productAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { APIURL } from "../../utils/constants";

const MenuDesc = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getItemById(id))
    },[id])
    
  const { userData } = useSelector((state) => state.currUser);
  const {itemById}  = useSelector(state => state.product);

  const addAnItemToCart = async () => {
    if (userData && localStorage.getItem("userToken")) {
      const userId = userData.id;
      const itemId = itemById.id;
      dispatch(addToCart({ userId, itemId,quantity }))
        .unwrap()
        .then(async() => {
          dispatch(calculateTotalQuantity(true));
          dispatch(clearFields());
        })
        .catch((error) => {
          // console.log(error);
        });
       setQuantity(1);
    } else {
      navigate("/login");
      toast("You must be logged in.", {
        icon: "👏",
      });
    }
  };


  return (
    <main className=" pt-[90px] ">
      <section className="overflow-hidden py-20  font-poppins">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex  mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div
                  className="relative mb-6 lg:mb-10"
                  style={{ height: "450px" }}
                >
                     <LazyLoadImage
                        src={`${APIURL}/file/${itemById?.image}`}
                        className="object-contain w-full h-full "
                        alt="image of book"
                        effect="opacity"
                        />
                  {/* <img
                    src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                    alt=""
                    className="object-contain w-full h-full "
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 ">
                  <span className="text-lg font-medium text-rose-500 ">
                    New
                  </span>
                  <h2 className="max-w-xl text-headingColor mt-2 mb-6 text-xl font-bold md:text-4xl">
                    {itemById?.title}
                  </h2>

                  <p className="max-w-md mb-8 text-gray-700 ">
                   {itemById?.description}
                  </p>

                  <p className="inline-block text-2xl font-semibold text-gray-700  ">
                    <span>${itemById?.price}</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center ">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-32">
                      <div className="gap-4 flex flex-row  w-full h-10 bg-transparent rounded-lg">
                        <button
                          className="w-10 h-full text-white bg-red-500 rounded-md outline-none cursor-pointer active:bg-red-500  hover:bg-red-700"
                          {...btnClick}
                          onClick={() =>
                            setQuantity(quantity <= 1 ? quantity : quantity - 1)
                          }
                        >
                          <span className="m-auto text-lg">-</span>
                        </button>
                        <p className="text-base sm:text-lg m-auto text-black font-semibold flex">
                          {quantity}
                        </p>
                        <button
                          className="w-10 h-full text-white bg-red-500 rounded-md outline-none cursor-pointer active:bg-red-500  hover:bg-red-700"
                         
                          {...btnClick}
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <span className="m-auto text-lg">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 ml-3 lg:mb-0">
                    <button className="flex items-center justify-center w-20 h-11 p-2 rounded-md text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 bg-red-500 active:bg-red-500  hover:bg-red-700 "
                      {...btnClick}
                      onClick={addAnItemToCart}
                    >
                      <RiShoppingBasketFill className="text-3xl text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuDesc;
