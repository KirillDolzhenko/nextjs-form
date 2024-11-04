"use client";

import { IPropsSelect } from "@/types/props.types";
import classes from "./SelectForm.module.scss";
import Select from "react-select";

export default function SelectForm({
  label,
  id,
  options = [],
  placeholder,
  onChange,
  value,
  error,
}: IPropsSelect) {
  return (
    <>
      <div className={classes.select}>
        <label htmlFor={id}>{label}</label>
        <div className={classes.select__container}>
          <Select
            id={id}
            isClearable
            value={options.find((el) => el.value == value) || null}
            className={classes.select}
            placeholder={placeholder}
            options={options}
            onChange={(value) => onChange && onChange(value?.value)}
            noOptionsMessage={() => <span>Варианты не найдены</span>}
            styles={{
              control: (provided, state) => ({
                ...provided,
                transition: "all 0.2s ease",
                width: "100%",
                padding: "18px",
                borderRadius: "6px",
                borderColor: state.isFocused
                  ? "black"
                  : error
                  ? "#be1f2a"
                  : "rgba(0, 0, 0, 0.16)",
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
              }),
              valueContainer: (provided) => ({
                ...provided,
                fontSize: "0.9375rem",
                fontFamily: "HelveticaNeue",
                color: "#acacac",
                fontWeight: "400",
                padding: "0",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "rgba(29, 29, 29, 0.4)",
              }),
              input: (provided) => ({
                ...provided,
                margin: "0",
              }),
              option: (provided, state) => ({
                ...provided,

                backgroundColor: state.isSelected ? "black" : "transparent",

                "&:hover": {
                  backgroundColor: state.isSelected
                    ? "black"
                    : "rgba(0, 0, 0, 0.05)",
                },
                "&:active": {
                  backgroundColor: "rgba(0, 0, 0, 0.16)",
                },
              }),
              indicatorsContainer: (provided) => ({
                ...provided,
                display: "none",
              }),
            }}
          />

          {error && <span className={classes.error}>{error}</span>}
        </div>
      </div>
    </>
  );
}
