import { EnumCountry, EnumFormat, EnumGenre } from "@/types/enum.types";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, { message: "Введите значение" }),
  genre: z.enum(["default", ...Object.values(EnumGenre).map((el) => `${el}`)], {
    message: "Выберите значение",
  }),
  format: z.enum(
    ["default", ...Object.values(EnumFormat).map((el) => `${el}`)],
    { message: "Выберите значение" }
  ),
  unf: z
    .string()
    .regex(/^(|\d{3}-\d{3}-\d{3}-\d{2}-\d{3})$/, "Некорректное значение")
    .optional(),
  country: z
    .enum(["default", ...Object.values(EnumCountry).map((el) => `${el}`)])
    .optional(),
  cost: z.number().optional(),
  plot: z.any().optional(),
});

export type formSchemaType = z.infer<typeof formSchema>;
