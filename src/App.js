import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./app/pages/dashboard/Dashboard";
import { HomePage } from "./app/pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<></>} />
      </Routes>{" "}
    </>
  );
}

export default App;
