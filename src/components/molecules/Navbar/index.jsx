import React from "react";
import NavbarItem from "../../atoms/NavbarItem";

const content = [
  "Men",
  "Women",
  "Unisex",
  "Artist collab",
  "Collections",
  "New Arrivals",
  "Special deals",
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-6 w-fit hidden tablet:flex">
        {content.map((item, index) => (
          <li key={index+1}>
            <NavbarItem>{item}</NavbarItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
