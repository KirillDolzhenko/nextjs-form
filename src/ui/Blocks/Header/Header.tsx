import { IPropsHeader } from "@/types/props.types";
import classes from "./Header.module.scss";
import Button from "@/ui/Button/Button";
import React from "react";

function Header({ onClick, title, buttonContent }: IPropsHeader) {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>{title}</h1>
      <Button type={"reset"} onClick={onClick} className={classes.pad_btn_1}>
        {buttonContent}
      </Button>
    </header>
  );
}

export default Header;
