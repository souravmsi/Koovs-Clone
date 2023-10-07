import React from "react";
import CircularButton from "../CircularButton";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cart-slice";
import toast from "react-hot-toast";

const CartItem = ({ image, title, price, quantity, _id, brand }) => {
  const dispatch = useDispatch();
  const onAddHandler = () => {
    toast.success('Added!');
    dispatch(addToCart({_id, src1:image, brand, title, price}));
  }
  const removeFromcartHandler = ()=> {
    toast.success('Added!');
    dispatch(removeFromCart(_id));
  }
  return (
    <li className="flex items-center py-2 my-2">
      <div className="h-32 w-20 shrink-0 grow-0 basis-[30%] p-2">
        <div style={{
            "--image-url": `url(${image})`
          }} className="w-full h-full bg-[image:var(--image-url)] bg-contain bg-no-repeat bg-center"></div>
      </div>
      <div className="flex grow-0 shrink-0 basis-[70%] self-start flex-col sm:flex-row">
        <div className="shrink-0 grow-0 basis-[60%] p-2 lg:basis-[80%]">
          <h3 className="text-md md:text-xl lg:text-2xl">{title}</h3>
          <div className="w-40 flex justify-between items-center pt-1">
            <span className="font-semibold text-gray-600 text-sm md:text-base">Rs {`${price}.00`}</span>
            <span className="border px-2 py-1 rounded-lg text-xs font-medium border-[1px]">
              {" "}
              x {quantity}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 grow-0 basis-[40%] p-2 pr-8 gap-4 lg:basis-[20%]">
          <CircularButton
            className={
              "bg-black text-sm h-fit self-center opacity-90 hover:opacity-100 text-white font-semibold rounded-lg py-2 px-4 hover:scale-125 transition-all duration-500"
            }
            onClick = {removeFromcartHandler}
          >
            -
          </CircularButton>

          <CircularButton
            className={
              "bg-black text-sm  h-fit self-center opacity-90 hover:opacity-100 text-white font-semibold rounded-lg py-2 px-4 hover:scale-125 transition-all duration-500"
            }
            onClick = {onAddHandler}
          >
            +
          </CircularButton>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
