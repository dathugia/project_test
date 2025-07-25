import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/common/Header";

// Pages
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Feedback from "./components/pages/Feedback";
import Gallery from "./components/pages/Gallery";
import Queries from "./components/pages/Queries";
import Regions from "./components/pages/Regions";
import Sitemap from "./components/pages/Sitemap";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
