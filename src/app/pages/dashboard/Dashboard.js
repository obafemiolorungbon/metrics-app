import { useState } from "react";
import { useSelector } from "react-redux";
import { ReportCards } from "../../components/ReportCards";
import { Container } from "../../design_system/containers/Container";
import { Pills } from "../../design_system/pills/Pill";
import { Stats } from "../../design_system/stats/Stats";
import { selectCurrentUser } from "../home/redux/selector";

export const Dashboard = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [selected, setSelected] = useState("Yesterday");

  const handleSelection = (value) => {
    setSelected(value);
  };

  const options = [
    {
      name: "Last Hour",
      value: 1,
    },
    {
      name: "Today",
      value: 2,
    },
    {
      name: "Yesterday",
      value: 3,
    },
    {
      name: "Last 3 days",
      value: 4,
    },
  ];

  const stats = [
    {
      header: "Zeroes",
      percentage: "0.12%",
      average: "0.11%",
    },
    {
      header: "Errors",
      percentage: "5,12%",
      average: "0.11%",
    },
    {
      header: "Timeouts",
      percentage: "5,12%",
      average: "0.11%",
    },
  ];
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

      <ReportCards />
    </Container>
  );
};
