'use client'
import React, {useEffect} from "react";
import Search from "../../../icons/Search";
import Profile from "../../../icons/Profile";
import WishList from "../../../icons/Wishlist";
import Cart from "../../../icons/Cart";
import { useSelector, useDispatch } from "react-redux";
import { init } from "@/redux/slices/cart-slice";

const HeaderUtility = () => {
  const dispatch = useDispatch();
  const {totalQuantity} = useSelector(item => item.cartReducer)
  useEffect(() => {
    const data = localStorage.getItem("koovsData");
    if (data) {
      dispatch(init(data));
    }
  }, [dispatch]);
  return (
    <div className="flex gap-x-6">
        <button type="button">
            <Search/>
        </button>
      <a href="/account">
        <Profile />
      </a>
      <a href="#">
        <WishList />
      </a>
      <a href="/cart" className="relative">
        {totalQuantity > 0 && <div className="absolute -right-2 -top-3 bg-red-500 rounded-full text-center py-1 px-2 text-white text-xs font-semibold">{totalQuantity}</div>}
        <Cart />
      </a>
    </div>
  );
};

export default HeaderUtility;
