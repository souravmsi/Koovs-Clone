import React from "react";
import NavbarItem from "../NavbarItem";
const Content = ({ brand, description, link, yPos ,show}) => {
  

  return (
      <div
        className={`flex flex-col gap-y-4 w-fit px-16 py-20 ${
          yPos === "center"
            ? "self-center items-center"
            : "items-start self-end"
        }`}
      >
        <h3 className="text-8xl w-fit">{brand}</h3>
        <p className="w-fit">{description}</p>
        <NavbarItem downCarrot={false}>Shop now</NavbarItem>
      </div>
  );
};

export default Content;
