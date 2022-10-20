import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
/* Page Imports */
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
/* Project Imports */
import Auction from "./components/projects/d20Auction";
import Sims4 from "./components/projects/Sims4";
import Eurovision2022 from "./components/projects/Eurovision2022";
import RRconsignments from './components/projects/RRconsignments';
import FCDonation from './components/projects/fcDonation';

function App() {
  return (
    <div className="App">
      <div className="navigation section">
        <img className="nav-img" src="./assets/Celia01.jpeg" />
        <div className="nav">
          <NavLink to="/" className="nav-item">About</NavLink>
          <NavLink to="/resume" className="nav-item">Resume</NavLink>
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
        </div>
      </div>
      <div className="main-content section">
        <Routes>
          <Route exact path="/" element={ <About /> }/>
          <Route path="/resume" element={ <Resume /> }/>
          <Route path="/projects" element={ <Projects /> }/>

          <Route path="/projects/d20-auction" element={ <Auction /> } />
          <Route path="/projects/sims4" element={ <Sims4 /> } />
          <Route path="/projects/eurovision-2022" element={ <Eurovision2022 /> } />
          <Route path="/projects/rrconsignments" element={ <RRconsignments /> } />
          <Route path="/projects/flipcause-donation-tool" element={ <FCDonation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
