import styles from "./ReportCards.module.css";
import {
  ReportingCardContainers,
  ReportingDataLeftContainer,
  ReportingDataRightContainer,
} from "../design_system/containers/Container";
import {
  LeftReportingStats,
  RightReportingStats,
} from "../design_system/stats/Stats";

export const ReportCards = ({
  hideSVG,
  text,
  percentage,
  currentFilter,
  Logo,
  subHeaderText,
  headerText,
  subHeaderPercentage,
  headerPercentage,
  miniGreyedText,
  helpKeyWords,
  previousSearches,
  currentSearches,
  isCTR,
  isSales,
}) => {
  return (
    <div className={styles.reportingWrapper}>
      <ReportingCardContainers>
        <ReportingDataLeftContainer>
          <LeftReportingStats
            text={text}
            percentage={percentage}
            hideSVG={hideSVG}
            currentFilter={currentFilter}
            Logo={Logo}
            previousSearches={previousSearches}
            currentSearches={currentSearches}
          />
        </ReportingDataLeftContainer>
        <ReportingDataRightContainer>
          <RightReportingStats
            subHeaderText={subHeaderText}
            headerText={headerText}
            subHeaderPercentage={subHeaderPercentage}
            headerPercentage={headerPercentage}
            miniGreyedText={miniGreyedText}
            helpKeyWords={helpKeyWords}
            isCTR={isCTR}
            isSales={isSales}
          />
        </ReportingDataRightContainer>
      </ReportingCardContainers>
      <div className={styles.reportingHR} />
    </div>
  );
};
