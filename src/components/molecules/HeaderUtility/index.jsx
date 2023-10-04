import React from "react";
import Search from "../../../icons/Search";
import Profile from "../../../icons/Profile";
import WishList from "../../../icons/Wishlist";
import Cart from "../../../icons/Cart";

const HeaderUtility = () => {
  return (
    <div className="flex gap-x-6">
        <button type="button">
            <Search/>
        </button>
      <a href="#">
        <Profile />
      </a>
      <a href="#">
        <WishList />
      </a>
      <a href="#">
        <Cart />
      </a>
    </div>
  );
};

export default HeaderUtility;
