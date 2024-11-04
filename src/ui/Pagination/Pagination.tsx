import classes from "./Pagination.module.scss";
import { svgArrow } from "@/assets/links/svg.links";
import React from "react";

export default function Pagination() {
  return (
    <ul className={classes.pagination}>
      <li className={classes.active}>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">2</button>
      </li>
      <li>
        <button type="button">...</button>
      </li>
      <li>
        <button type="button">4</button>
      </li>
      <li>
        <button type="button">
          <svg>
            <use href={`${svgArrow}#arrow`} />
          </svg>
        </button>
      </li>
    </ul>
  );
}
