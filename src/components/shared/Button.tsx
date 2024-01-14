"use client";
import React from "react";

type ButtonProps = {
  onClickEvent: () => void;
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return <button onClick={props.onClickEvent}>{props.children}</button>;
}

export default Button;
