import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";
import NavBar from "../Components/NavBar/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar text="Materiator 2.0" />
      <Router />
    </BrowserRouter>
  );
};
export default Routes;
