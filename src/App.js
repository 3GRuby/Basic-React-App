import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NameList from "./component/pages/NameList.jsx";
import HeaderBar from "./component/HeaderBar/HeaderBar.jsx";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderBar />

        <Routes>
          <Route path="/Home" element={<Home/>}>
           
          </Route>
        </Routes>

        <Routes>
          <Route path="/About" element={<About/>}></Route>
        </Routes>

        <Routes>
          <Route path="/namelist" element={<NameList/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
