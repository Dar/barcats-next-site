import React, { useState } from 'react';

const HamburgerMenu = ({updateParentState}:{updateParentState:any}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    updateParentState();
  };

  return (
    <div className="relative px-1 py-5">
      <button
        className="focus:outline-none z-20"
        onClick={toggleMenu}
      >
        <div className={`w-8 h-1 bg-black my-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-8 h-1 bg-black my-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-1 bg-black my-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
