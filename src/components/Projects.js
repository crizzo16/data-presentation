import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <div className="project-container">
                <div className="project-card">
                    <img className="project-img" alt="link to Sims 4 project" src="./assets/sims-courtyard.jpg" />
                    <NavLink to="/projects/sims4" className="project-link">Sims 4 Packs</NavLink>
                </div>
                <div className="project-card">
                    <img className="project-img" alt="link to Dimension 20 Minis Auction project" src="https://i.scdn.co/image/ab6765630000ba8aa77a222d5362a4bfdb75ce0e" />
                    <NavLink to="/projects/d20-auction" className="project-link">Dimension 20 Auction</NavLink>
                </div>
                <div className="project-card">
                    <img className="project-img" alt="link to Eurovision 2022 project" src="https://upload.wikimedia.org/wikipedia/commons/8/85/Eurovision_2022_-_Semi-final_2_-_Il_Volo.jpg" />
                    <NavLink to="/projects/eurovision-2022" className="project-link">Eurovision 2022</NavLink>
                </div>
                <div className="project-card">
                    <img className="project-img" alt="link to R&amp;R project" src="./assets/rr-tile.png" />
                    <NavLink to="/projects/rrconsignments" className="project-link">R&amp;R Consignments</NavLink>
                </div>
                <div className="project-card">
                    <img className="project-img" alt="link to Flipcause donation tool project" src="./assets/fc-donation-tile.jpg" />
                    <NavLink to="/projects/flipcause-donation-tool" className="project-link">Flipcause Donation Tool</NavLink>
                </div>
                <div className="project-card">
                    <img className="project-img" alt="link to Shut the Box game" src="https://best-alzheimers-products.com/wp-content/uploads/2015/06/4-player-shut-the-box.jpg"/>
                    <NavLink to="/projects/shut-the-box" className="project-link">Shut the Box</NavLink>
                </div>
            </div>
        )
    }
}

export default Projects;