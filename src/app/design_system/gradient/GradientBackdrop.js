import { LoginPrompt } from "../../components/LoginComponent";
import styles from "./GradientBackdrop.module.css";

export const Gradient = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <p>Welcome</p>
        <p>Home</p>
        <LoginPrompt />
      </div>
    </div>
  );
};
