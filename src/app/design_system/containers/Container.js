import styles from "./Container.module.css";

export const CenteredContainer = ({ children }) => {
  return <div className={styles.centered_container}>{children}</div>;
};
export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const ReportingCardContainers = ({ children }) => {
  return <div className={styles.report_card_container}>{children}</div>;
};

export const ReportingDataLeftContainer = ({ children }) => {
  return <div className={styles.leftContainer}>{children}</div>;
};
export const ReportingDataRightContainer = ({ children }) => {
  return <div className={styles.rightContainer}>{children}</div>;
};
