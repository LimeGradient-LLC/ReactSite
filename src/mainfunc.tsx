import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./App";
import Devlog from "./pages/devlog";
import CodingKnowledge from "./pages/knowledge";
import CodingProjects from "./pages/projects";

const Main = () => {
    return (
      <Routes>
        <Route path='/' Component={FrontPage}></Route>
        <Route path='/coding' Component={CodingKnowledge}></Route>
        <Route path='/projects' Component={CodingProjects}></Route>
        <Route path='devlog' Component={Devlog}></Route>
      </Routes>
    );
  }

  export default Main