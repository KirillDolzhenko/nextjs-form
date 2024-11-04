import { IPropsInput } from "@/types/props.types";
import classes from "./TextareaForm.module.scss";

export default function TextareaForm({
  label,
  id,
  placeholder,
  register,
  error,
}: IPropsInput) {
  return (
    <div className={classes.textarea}>
      <label htmlFor={id}>{label}</label>
      {register && (
        <div className={classes.textarea__container}>
          <textarea {...register(id)} id={id} placeholder={placeholder} />
          {error && <span className={classes.error}>{error}</span>}
        </div>
      )}
    </div>
  );
}
