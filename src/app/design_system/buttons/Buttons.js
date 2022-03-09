import styles from "./Buttons.module.css";

export const LandingPageButton = ({ text, onPress }) => {
  return (
    <button className={styles.buttonMainPage} onClick={onPress}>
      {text}
    </button>
  );
};
