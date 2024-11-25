import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TOP from "../pages/Top";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TOP />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
