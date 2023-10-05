import React from "react";

const Color = ({ color, onClick, index, selected }) => {
  return (
    <button
      className={`p-2 rounded-full outline outline-1 outline-offset-4 ${index === selected ? 'outline-black':'outline-transparent'}`}
      style={{ background: color }}
      onClick={onClick.bind(null, index)}
    />
  );
};

export default Color;
