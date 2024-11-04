import { IPropsButton } from "@/types/props.types";
import classes from "./Button.module.scss";
import clsx from "clsx";

export default function Button({
  children,
  type,
  className,
  onClick,
  disabled,
}: IPropsButton) {
  return (
    <button
      className={clsx(classes.button, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
