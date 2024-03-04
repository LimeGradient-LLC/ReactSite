import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./App";
import Coding from "./pages/coding";
import Projects from "./pages/projects";

const Main = () => {
    return (
      <Routes>
        <Route path='/' Component={FrontPage}></Route>
        <Route path='/coding' Component={Coding}></Route>
        <Route path="/coding_projects" Component={Projects}></Route>
      </Routes>
    );
  }

  export default Main