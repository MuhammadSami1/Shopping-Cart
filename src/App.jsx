import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./Components/Footer";
import Iframe from "./Components/Iframe";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Iframe />
      <Footer />
    </div>
  );
};

export default App;
