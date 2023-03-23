import { ChangeEvent, FC } from "react";
import styles from "./Select.module.css";

type SelectProps = {
  title: string;
  name: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

export const Select: FC<SelectProps> = ({
  name,
  options,
  onChange,
  value,
  title,
}) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {title}
      <select onChange={onChange} name={name} value={value}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};
