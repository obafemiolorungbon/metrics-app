import styles from "./ReportCards.module.css";
import {
  ReportingCardContainers,
  ReportingDataLeftContainer,
  ReportingDataRightContainer,
} from "../design_system/containers/Container";
import { LeftReportingStats } from "../design_system/stats/Stats";
import { Indicator } from "../design_system/indicators/Indicators";

export const ReportCards = () => {
  return (
    <div className={styles.reportingWrapper}>
      <ReportingCardContainers>
        <ReportingDataLeftContainer>
          <LeftReportingStats />
        </ReportingDataLeftContainer>
        <ReportingDataRightContainer></ReportingDataRightContainer>
      </ReportingCardContainers>
      <hr className={styles.reportingHR} />
    </div>
  );
};
