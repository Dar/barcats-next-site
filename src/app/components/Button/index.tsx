'use client'

import React from "react";

const Button = ({classNames, buttonAction, children}: {classNames:string, buttonAction:any, children: React.ReactNode}) => {
  return (
    <button onClick={buttonAction} className={`${classNames} hover:text-siteYellow`}>
      {children}
    </button>
  );
};

export default Button;
