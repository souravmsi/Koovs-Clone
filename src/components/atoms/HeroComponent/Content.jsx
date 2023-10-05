import React from "react";
import NavbarItem from "../NavbarItem";
import Fade from "react-reveal/Fade";

const Content = ({ brand, description, link, yPos, show }) => {
  return (
    <Fade bottom when={show}>
      <div
        className={`flex flex-col gap-y-2 md:gap-y-4 w-fit px-16 py-20 ${
          yPos === "center"
            ? "self-center items-center"
            : "items-start self-end"
        }`}
      >
        <h3 className="text-3xl w-fit sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">{brand}</h3>
        <p className="w-fit text-xs md:text-base">{description}</p>
        <NavbarItem downCarrot={false}>Shop now</NavbarItem>
      </div>
    </Fade>
  );
};

export default Content;
