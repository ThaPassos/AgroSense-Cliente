import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Analytics from "./pages/Analytics";
// import Harvest from "./pages/Harvest";
// import Schedules from "./pages/Schedules";
// import Payments from "./pages/Payments";

function App() {
  return (
    <Router>
      <div className="flex">
        <main className="ml-52 w-full min-h-screen">
          <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/harvest" element={<Harvest />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/payments" element={<Payments />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
