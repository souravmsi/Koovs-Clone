"use client";
import React, { useState, useEffect } from "react";
import Content from "./Content";

const HeroComponent = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4500);
  }, [selectedIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % data.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [selectedIndex, data.length]);

  const { brand, description, yPos, xPos, link, bgImage } = data[selectedIndex];
  return (
    <div
      className={`flex h-[650px] justify-${xPos} transition-all duration-700 ease-in-out`}
      style={{ background: `url(${bgImage})` }}
    >
      <Content brand={brand} description={description} yPos={yPos} show={show}/>
    </div>
  );
};

export default HeroComponent;
