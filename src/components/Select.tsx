import { FC } from "react";
import styles from "./Select.module.css";

type SelectProps = {
  name: string;
  options: string[];
};

export const Select: FC<SelectProps> = ({ name, options }) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {name}
      <select name={name}>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </label>
  );
};
