import React from "react";
import Carrot from '@/icons/carrot.svg'

const NavbarItem = ({ children, downCarrot = true, color='black'}) => {
  const colorScheme = {
    black: 'text-black',
    gray: 'text-gray-500 hover:text-gray-600'
  }
  return (
    <a
      href="#"
      className="block w-fit text-sm font-medium after:content-[''] after:block after:bg-black after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:mt-1"
    >
      <div className={`w-fit flex justify-center items-center gap-x-2 text-[12px] font-semibold ${colorScheme[color]}`}>
        {children}
        {downCarrot && <Carrot className='text-[8px]'/>}
      </div>
    </a>
  );
};

export default NavbarItem;
