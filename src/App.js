import "./App.css";
import Navigation from "./Component/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Timer from "./Pages/Timer";
import Time from "./Pages/Time";
import Stopwatch from "./Pages/Stopwatch";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace={true} to="/timer" />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/watch" element={<Time />} />
        <Route path="stopwatch" element={<Stopwatch />} />
      </Routes>
    </>
  );
}

export default App;
