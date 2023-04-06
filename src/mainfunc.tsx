import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./App";
import CodingKnowledge from "./pages/knowledge";
import CodingProjects from "./pages/projects";

const Main = () => {
    return (
      <Routes>
        <Route path='/' Component={FrontPage}></Route>
        <Route path='/coding' Component={CodingKnowledge}></Route>
        <Route path='/projects' Component={CodingProjects}></Route>
      </Routes>
    );
  }

  export default Main