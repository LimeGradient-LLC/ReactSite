import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./App";
import Coding from "./pages/coding";

const Main = () => {
    return (
      <Routes>
        <Route path='/' Component={FrontPage}></Route>
        <Route path='/coding' Component={Coding}></Route>
      </Routes>
    );
  }

  export default Main