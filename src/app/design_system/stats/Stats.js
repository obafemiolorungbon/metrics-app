import styles from "./Stats.module.css";
import { ReactComponent as FunnelSVG } from "../../../assets/svgs/funnel.svg";
import { ReactComponent as ArrowSVG } from "../../../assets/svgs/arrow.svg";

export const Stats = ({ stats }) => {
  const statsBoxes = stats.map((stat) => (
    <div className={styles.stats_wrapper} key={stat.header}>
      <div className={styles.dot}></div>
      <div className={styles.side}>
        <p>
          {stat.header} : {stat.percentage}
        </p>
        <span>Average : {stat.average}</span>
      </div>
    </div>
  ));
  return <div className={styles.stats_container}>{statsBoxes}</div>;
};

export const LeftReportingStats = ({ data }) => {
  return (
    <div className={styles.leftreporting}>
      <div className={styles.leftReportingIcon}>
        <div className={styles.leftReportingIconCircle}>
          <FunnelSVG />
        </div>
        <ArrowSVG className={styles.arrowSvg} />
        <div className={styles.indicator}></div>
      </div>
      <div className={styles.leftReportingStats}>
        <div className={styles.reports}>
          <span>Searches</span>
          <span className={styles.pill}>+5%</span>
        </div>
        <div className={styles.reports_numbers}>
          <span>29</span>
          <span>38</span>
          <span>Yesterday</span>
        </div>
        <div className={styles.reports_numbers}>
          <span>29</span>
          <span>38</span>
          <span>Yesterday</span>
        </div>
      </div>
    </div>
  );
};
