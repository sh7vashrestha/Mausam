import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import weatherStore from "./Stores/weatherDataFetch";

function App() {
  // const store = weatherStore();
  // const handelOnChange = (searchData) =>{
  //   const [lat, lon] = searchData.value.split(" ");
  // }
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home  /> }/>
        <Route path="/Mausam" element={<Home  /> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
