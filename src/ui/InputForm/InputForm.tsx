import { IPropsInput } from "@/types/props.types";
import classes from "./InputForm.module.scss";

export default function InputForm({
  label,
  id,
  placeholder,
  register,
  error,
  type = "text",
}: IPropsInput) {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <div className={classes.input__container}>
        {register && (
          <input
            {...register(id, {
              setValueAs: (value) => {
                if (type == "number") {
                  if (!value) {
                    return undefined;
                  }
                  return +value;
                }
                return value;
              },
            })}
            id={id}
            type={type}
            placeholder={placeholder}
          />
        )}
        {error && <span className={classes.error}>{error}</span>}
      </div>
    </div>
  );
}
