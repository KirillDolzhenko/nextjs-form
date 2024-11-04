import clsx from "clsx";
import "./styles/null.scss";
import classes from "./Layout.module.scss";

import type { Metadata } from "next";

import localFont from "next/font/local";

const Helvetica = localFont({
  src: "./fonts/Helvetica-Regular.otf",
  weight: "400",
});
const HelveticaNeue = localFont({
  src: "./fonts/HelveticaNeue-Regular.otf",
  weight: "400",
});
const Inter = localFont({
  src: [
    {
      path: "./fonts/InterTight-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/InterTight-SemiBold.ttf",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={clsx(
          Helvetica.className,
          HelveticaNeue.className,
          Inter.className
        )}
      >
        <div className={classes.container}>{children}</div>
      </body>
    </html>
  );
}
