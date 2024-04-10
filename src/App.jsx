import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
