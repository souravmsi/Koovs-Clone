import React from "react";
import Carrot from '@/icons/carrot.svg'

const NavbarItem = ({ children, downCarrot = true }) => {
  return (
    <a
      href="#"
      className="block w-fit text-sm font-medium after:content-[''] after:block after:bg-black after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:mt-1"
    >
      <div className="w-fit flex justify-center items-center gap-x-2">
        {children}
        {downCarrot && <Carrot/>}
      </div>
    </a>
  );
};

export default NavbarItem;
