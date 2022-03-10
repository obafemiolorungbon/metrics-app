import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReportCards } from "../../components/ReportCards";
import { BarGroup } from "../../design_system/bars/Bars";
import { Container } from "../../design_system/containers/Container";
import { Pills } from "../../design_system/pills/Pill";
import { Stats } from "../../design_system/stats/Stats";
import { selectCurrentUser } from "../home/redux/selector";
import { ReactComponent as FunnelSVG } from "../../../assets/svgs/funnel.svg";
import { ReactComponent as TouchSVG } from "../../../assets/svgs/touch.svg";
import { ReactComponent as ShoppingSVG } from "../../../assets/svgs/shopping.svg";
import { getData } from "./redux/reducer";
import { selectDashboardData, selectLoading } from "./redux/selector";
import { EmptyState } from "../../components/EmptyState";

export const Dashboard = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const dashboardData = useSelector(selectDashboardData);
  const isLoading = useSelector(selectLoading);
  const Otherdata =
    !isLoading &&
    Object.keys(dashboardData)?.length > 0 &&
    dashboardData?.data[0];
  const [selected, setSelected] = useState({
    name: "Yesterday",
    value: "yesterday",
  });

  const currentErrors = dashboardData[`errors_${selected.value}`];

  const currentZeroes = Otherdata[`zeroes_${selected.value}`];
  const currentError = Otherdata[`errors_${selected.value}`];
  const currentTimeouts = Otherdata[`timeout_${selected.value}`];
  const searchesCurrentData = Otherdata[`searches_current_${selected.value}`];
  const searchesPreviousData = Otherdata[`searches_previous_${selected.value}`];
  const clickCurrentData = Otherdata[`clicks_current_${selected.value}`];
  const clickPreviousData = Otherdata[`clicks_previous_${selected.value}`];
  const salesCurrentData = Otherdata[`bookings_current_${selected.value}`];
  const salesPreviousData = Otherdata[`bookings_previous_${selected.value}`];
  const str = Otherdata[`str_${selected.value}`];
  const ctr = Otherdata[`ctr_${selected.value}`];
  const webClicks = Otherdata[`web_pessimizer`];
  const mobileClicks = Otherdata[`mobile_pessimizer`];
  const averagePriceData = Otherdata[`avg_price_${selected.value}`];
  const clickPercentage = Otherdata[`click_percentage_${selected.value}`];
  const searchPercentage = Otherdata[`search_percentage_${selected.value}`];

  const handleSelection = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    dispatch(getData({ duration: selected.value }));
  }, [dispatch, selected]);

  const options = [
    {
      name: "Last Hour",
      value: "last_hour",
    },
    {
      name: "Today",
      value: "today",
    },
    {
      name: "Yesterday",
      value: "yesterday",
    },
    {
      name: "Last 3 days",
      value: "last_3days",
    },
  ];

  const stats = [
    {
      header: "Zeroes",
      percentage: currentZeroes,
      average: "0.11%",
    },
    {
      header: "Errors",
      percentage: currentError,
      average: "0.11%",
    },
    {
      header: "Timeouts",
      percentage: currentTimeouts,
      average: "0.11%",
    },
  ];

  const searchesData = {
    current: searchesCurrentData,
    previous: searchesPreviousData,
  };
  const clickData = {
    current: clickCurrentData,
    previous: clickPreviousData,
  };

  const salesData = {
    current: salesCurrentData,
    previous: salesPreviousData,
  };

  return (
    <Container>
      <h1>Welcome home, {currentUser?.name}</h1>
      <h2>Main Metrics</h2>
      <Pills
        options={options}
        selected={selected}
        handleSelection={handleSelection}
      />
      <Stats stats={stats} />
      {currentErrors?.length > 0 ? (
        <BarGroup data={currentErrors} />
      ) : (
        <EmptyState text="Errors" />
      )}

      <ReportCards
        text="Searches"
        percentage={searchPercentage}
        currentFilter={selected.name}
        Logo={FunnelSVG}
        subHeaderText={"Web Traffic"}
        headerText="Mobile Traffic"
        subHeaderPercentage={webClicks}
        headerPercentage={mobileClicks}
        miniGreyedText={"You get 100% traffic on mobile and desktop devices."}
        helpKeyWords={["Searches", "Pessimisation"]}
        currentSearches={searchesData.current}
        previousSearches={searchesData.previous}
      />
      <ReportCards
        text="Clicks"
        percentage={clickPercentage}
        miniGreyedText={"Conversion from searches  to clicks on all devices."}
        currentFilter={selected.name}
        Logo={TouchSVG}
        headerText="CTR"
        headerPercentage={ctr}
        helpKeyWords={["CTR", "Cliks"]}
        currentSearches={clickData.current}
        previousSearches={clickData.previous}
        isCTR={true}
      />
      <ReportCards
        text="Sales"
        hideSVG={true}
        currentFilter={selected.name}
        Logo={ShoppingSVG}
        miniGreyedText={"Conversion from cliks  to bookings on all devices."}
        headerText="STR"
        headerPercentage={str}
        subHeaderText="Avg. Check"
        subHeaderPercentage={averagePriceData}
        helpKeyWords={["STR", "Bookings", "Avg. Check"]}
        currentSearches={salesData.current}
        previousSearches={salesData.previous}
        isSales={true}
      />
    </Container>
  );
};
