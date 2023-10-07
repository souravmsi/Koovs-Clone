"use client";
import CartItem from "@/components/atoms/CartItem";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init, emptyCart } from "@/redux/slices/cart-slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, totalAmount } = useSelector((item) => item.cartReducer);
  useEffect(() => {
    const data = localStorage.getItem("koovsData");
    if (data) {
      dispatch(init(data));
    }
  }, [dispatch]);

  const orderHandler = () => {
    dispatch(emptyCart());
    localStorage.removeItem("koovsData");
    router.push("/order");
  };

  return (
    <div className="px-4 md:px-8 xl:px-12 border py-12">
      <h2 className="text-center text-xl font-semibold pb-12 md:text-2xl lg:text-4xl">
        Cart Summary
      </h2>
      {items.length !== 0 && (
        <>
          <ul className="max-h-80 overflow-auto divide-y-2">
            {items.map(({ _id, price, image, quantity, title, brand }) => (
              <CartItem
                key={_id}
                image={image}
                title={title}
                price={price}
                quantity={quantity}
                _id={_id}
                brand={brand}
              />
            ))}
          </ul>
          <div className="flex justify-between items-center pt-8">
            <span className="font-semibold text-gray-500 md:text-xl">
              Total Amount
            </span>
            <span className="font-semibold md:text-xl lg:text-2xl">
              {`Rs ${totalAmount}.00`}
            </span>
          </div>
          <div className="flex pt-4 gap-x-4">
            <Link href={"/"}>
              <button className="border text-sm md:text-base lg:text-lg border-black px-4 py-1 rounded-full hover:bg-black hover:text-white">
                Close
              </button>
            </Link>
            <button onClick={orderHandler} className="text-sm md:text-base lg:text-lg bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800">
              Order
            </button>
          </div>
        </>
      )}
      {items.length === 0 && <h3 className="text-center">Cart is Empty!</h3>}
    </div>
  );
};

export default CartPage;
