import { formSchemaType } from "@/assets/validation/formSchema";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

type TButton = "button" | "submit" | "reset" | undefined;

export interface IPropsClassName {
  className?: string;
}

export interface IPropsChildren extends IPropsClassName {
  children: ReactNode;
}

export interface IPropsButton extends IPropsChildren {
  onClick?: () => void;
  type?: TButton;
  disabled?: boolean;
}

export interface IPropsHeader extends IPropsClassName {
  onClick: () => void;
  title: string;
  buttonContent: ReactNode;
}

export interface IPropsInput extends IPropsClassName {
  label: string;
  id: keyof formSchemaType;
  placeholder: string;
  register?: UseFormRegister<formSchemaType>;
  error?: string;
  type?: "text" | "number";
}

export interface IOption {
  label: string;
  value: string;
}

export interface IPropsSelect extends IPropsInput {
  options?: IOption[];
  error?: string;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void;
  value?: string;
}
