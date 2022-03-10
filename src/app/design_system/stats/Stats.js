import styles from "./Stats.module.css";
import { ReactComponent as ArrowSVG } from "../../../assets/svgs/arrow.svg";
import numeral from "numeral";

const formatPercentage = (percent) => numeral(percent).format("0.00");
const formatNumbers = (percent) => numeral(percent).format("0,00");

export const Stats = ({ stats }) => {
  const statsBoxes = stats.map((stat) => (
    <div className={styles.stats_wrapper} key={stat.header}>
      <div className={styles.dot}></div>
      <div className={styles.side}>
        <p>
          {stat.header} : {formatPercentage(stat.percentage)}%
        </p>
        <span>Average : {stat.average}</span>
      </div>
    </div>
  ));
  return <div className={styles.stats_container}>{statsBoxes}</div>;
};

export const LeftReportingStats = ({
  data,
  hideSVG,
  text,
  percentage,
  currentFilter,
  Logo,
  currentSearches,
  previousSearches,
}) => {
  return (
    <div className={styles.leftreporting}>
      <div className={styles.leftReportingIcon}>
        <div className={styles.leftReportingIconCircle}>
          <Logo />
        </div>
        {!hideSVG && <ArrowSVG className={styles.arrowSvg} />}
        <div className={styles.indicator}></div>
      </div>
      <div className={styles.leftReportingStats}>
        <div className={styles.reports}>
          <span>{text}</span>
          {percentage && (
            <span
              className={percentage > 0 ? styles.pill : styles.pill_negative}
            >
              {formatPercentage(percentage)}%
            </span>
          )}
        </div>
        <div className={styles.reports_numbers}>
          <span>{formatNumbers(currentSearches)}</span>
          <span>{formatNumbers(previousSearches)}</span>
          <span>{currentFilter}</span>
        </div>
        <div className={styles.reports_numbers}>
          <span>{formatNumbers(currentSearches)}</span>
          <span>{formatNumbers(previousSearches)}</span>
          <span>{currentFilter}</span>
        </div>
      </div>
    </div>
  );
};

export const RightReportingStats = ({
  data,
  subHeaderText,
  headerText,
  subHeaderPercentage,
  headerPercentage,
  miniGreyedText,
  helpKeyWords,
  isCTR,
  isSales,
}) => {
  return (
    <div>
      <p className={isCTR ? styles.mainHeaderCTR : styles.mainHeader}>
        {headerText}: {formatPercentage(headerPercentage)}%
      </p>
      {subHeaderText && (
        <p className={styles.subHeader}>
          {subHeaderText}:{" "}
          {isSales
            ? formatNumbers(subHeaderPercentage)
            : `${formatPercentage(subHeaderPercentage)}%`}
        </p>
      )}
      <span className={styles.greyedText}>{miniGreyedText}</span>
      <p className={styles.helpText}>
        {helpKeyWords?.length > 0 && (
          <>
            Help: {""}
            {helpKeyWords.map((words, index) => (
              <span key={index} className={styles.helpSubText}>
                {words} {""}
              </span>
            ))}
          </>
        )}
      </p>
    </div>
  );
};
