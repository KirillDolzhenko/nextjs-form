"use client";

import Button from "@/ui/Button/Button";
import classes from "./Form.module.scss";
import InputForm from "@/ui/InputForm/InputForm";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formSchemaType } from "@/assets/validation/formSchema";
import { ArrCountry, ArrFormat, ArrGenre } from "@/types/enum.types";
import TextareaForm from "@/ui/TextareaForm/TextareaForm";
import { svgArrow } from "@/assets/links/svg.links";
import dynamic from "next/dynamic";
import Pagination from "@/ui/Pagination/Pagination";
import Header from "@/ui/Blocks/Header/Header";
import { resetForm } from "@/assets/objects/form.objects";

const SelectForm = dynamic(() => import("@/ui/SelectForm/SelectForm"), {
  ssr: false,
});

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      ...JSON.parse(localStorage.getItem("formData") || "{}"),
    });
  }, []);

  const onSubmit = useCallback((data: unknown) => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, []);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Header
        title="Производственные параметры фильма"
        buttonContent="Отменить заполнение"
        onClick={() => {
          localStorage.removeItem("formData");
          reset(resetForm);
        }}
      />
      <main className={classes.main}>
        <ul className={classes.fields}>
          <div className={classes.fields__col}>
            <li>
              <InputForm
                register={register}
                label={"Название проекта"}
                id={"title"}
                placeholder={"Название"}
                error={errors.title && errors.title.message}
              />
            </li>
            <li>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectForm
                    id="genre"
                    register={register}
                    label={"Жанр проекта"}
                    value={value}
                    onChange={onChange}
                    placeholder={"Жанр"}
                    options={ArrGenre}
                    error={errors.genre && errors.genre.message}
                  />
                )}
                name="genre"
              />
            </li>
            <li>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectForm
                    label={
                      "Формат (для онлайн-платформ, большого экрана, интернета, другое)"
                    }
                    id="format"
                    value={value}
                    onChange={onChange}
                    placeholder={"Формат"}
                    options={ArrFormat}
                    error={errors.format && errors.format.message}
                  />
                )}
                name="format"
              />
            </li>
            <li>
              <InputForm
                label={"№ УНФ или отсутствует"}
                id={"unf"}
                placeholder={"890-000-000-00-000"}
                register={register}
                error={errors.unf && errors.unf.message}
              />
            </li>
          </div>
          <div className={classes.fields__col}>
            <li>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectForm
                    label={"Страна-производитель (копродукция)"}
                    id={"country"}
                    placeholder={"Страна"}
                    options={ArrCountry}
                    value={value}
                    onChange={onChange}
                    error={errors.country && errors.country.message}
                  />
                )}
                name="country"
              />
            </li>
            <li>
              <InputForm
                label={
                  "Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
                }
                id={"cost"}
                placeholder={"Сметная стоимость"}
                register={register}
                error={errors.cost && errors.cost.message}
                type="number"
              />
            </li>
            <li>
              <TextareaForm
                label={"Синопсис"}
                id={"plot"}
                placeholder={"Напишите краткое изложение"}
                register={register}
              />
            </li>
          </div>
        </ul>
      </main>
      <footer className={classes.footer}>
        <Pagination />
        <Button
          disabled={!isValid}
          type="submit"
          className={classes.btn_submit}
        >
          <span className={classes.btn_submit__content}>
            Следующий шаг
            <svg>
              <use href={`${svgArrow}#arrow`} />
            </svg>
          </span>
        </Button>
      </footer>
    </form>
  );
}
