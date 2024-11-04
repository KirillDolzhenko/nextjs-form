export enum EnumGenre {
  FANTASY = "Фэнтези",
  DETECTIVE = "Детектив",
  SCI_FI = "Научная фантастика",
}

export enum EnumCountry {
  RUSSIA = "Россия",
  CHINA = "Китай",
  JAPAN = "Япония",
  GERMANY = "Германия",
  GREAT_BRITAIN = "Великобритания",
  USA = "США",
  POLAND = "Польша",
  ITALY = "Италия",
  FRANCE = "Франция",
  ICELAND = "Исландия",
  CZECH = "Чехия",
  EGYPT = "Египет",
  INDIA = "Индия",
}

export enum EnumFormat {
  ONLINE = "Онлайн-формат",
  BIG_SCREENS = "Большие экраны",
  INTERNET = "Интернет",
  OTHER = "Другое",
}

export const ArrGenre = Object.keys(EnumGenre).map((el) => ({
  value: EnumGenre[el as keyof typeof EnumGenre],
  label: EnumGenre[el as keyof typeof EnumGenre],
}));

export const ArrCountry = Object.keys(EnumCountry).map((el) => ({
  value: EnumCountry[el as keyof typeof EnumCountry],
  label: EnumCountry[el as keyof typeof EnumCountry],
}));

export const ArrFormat = Object.keys(EnumFormat).map((el) => ({
  value: EnumFormat[el as keyof typeof EnumFormat],
  label: EnumFormat[el as keyof typeof EnumFormat],
}));
