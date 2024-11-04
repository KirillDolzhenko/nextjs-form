"use client";

import classes from "./Main.module.scss";
import Header from "@/ui/Blocks/Header/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/form");
  };

  return (
    <Header
      title="Главная страница"
      buttonContent={<div className={classes.text}>Заполнить форму</div>}
      onClick={handleNavigation}
    />
  );
}
