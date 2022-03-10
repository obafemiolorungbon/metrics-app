import styles from "./Pill.module.css";

export const Pills = ({ options, selected, handleSelection }) => {
  return (
    <div className={styles.outerBorder}>
      {options.map((option, index) => (
        <li
          className={
            selected.name === option.name ? styles.active_selection : ""
          }
          selected
          key={index}
          onClick={() => handleSelection(option)}
        >
          {option.name}
        </li>
      ))}
    </div>
  );
};
