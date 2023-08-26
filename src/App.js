import React from "react";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Prizes from "./pages/Prizes/Prizes";
import Registration from "./pages/Registration/Registration";
import Dimension from "./pages/Dimension/Dimension";
import Rules from "./pages/Rules/Rules";
import Enquiries from "./pages/Enquiries/Enquiries";

const App = () => {
  return (
    <div className="bg-screen">
      <Hero />
      <About />
      <Prizes />
      <Rules />
      <Dimension />
      <Registration />
      <Enquiries />
      
    </div>
  );
};

export default App;
