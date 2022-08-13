import React, { Component } from "react";
import tableau from "tableau-api";
import "../../App.css"

class Auction extends Component {
    componentDidMount() {
        this.initViz();
    }

    initViz() {
        const vizURL = "https://public.tableau.com/views/Dimension20Auction/BidsvsAmount?:language=en-US&:display_count=n&:origin=viz_share_link";
        const vizContainer = document.getElementById("vizContainer");

        let viz;

        if (viz) viz.dispose();

        viz = new window.tableau.Viz(vizContainer, vizURL);
    }

    render() {
        return (
            <div>
                <h1>Dimension 20 Minis Auction</h1>
                <p className="text-container">
                    In July 2022, the RPG show Dimension 20 announced that it would be auctioning off minis from their season, <i>A Crown of Candy</i> to raise money for charity and for future minis in future seasons. There would be four waves, each with about twenty-five minis starting at $50 each. Little did the internet know how big this auction would turn out. The first wave saw immediate success, with the lowest mini still going for $602 (Candy Villager 4). Each wave has shown new levels of success.
                </p>
                <h3>Glossary of Terms</h3>
                <p className="text-container">If you're new to role-playing games (RPGs) or Dimension 20, here are some terms you'll see in this analysis.</p>
                <p className="text-container" id="d20-terms">
                    <strong>NPC.</strong> Non-Player Character. More specifically in this analysis, non-player characters that are named. <br />
                    <strong>Background.</strong> Background characters, like Candy Villager 4 or Banana Swordsman 1. They're here for visual flavor, but aren't really part of the story. <br />
                    <strong>Player.</strong> When looking at mini-types, these are the minis for the players are the table. Any companions or pets are part of the NPC category.
                </p>
                <p className="mobile-tableau">
                    Tableau visualizations are best viewed on a screen at least 700px wide. Please view this page on a tablet or computer.
                </p>
                <div id="vizContainer"></div>
                <div>
                    <table className="d20-table">
                        <tr>
                            <th>Place</th>
                            <th>Character</th>
                            <th>Group</th>
                            <th>Amount</th>
                            <th>Bids</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sir Keradin Deeproot</td>
                            <td>NPC</td>
                            <td>$7,002</td>
                            <td>251 Bids</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Chancellor Lapin Cadbury</td>
                            <td>Player</td>
                            <td>$5,601</td>
                            <td>128 Bids</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Liam Wilhelmina</td>
                            <td>Player</td>
                            <td>$5,502</td>
                            <td>95 Bids</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sir Theobald Gumbar</td>
                            <td>Player</td>
                            <td>$5,001</td>
                            <td>52 Bids</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Princess Jet Rocks</td>
                            <td>Player</td>
                            <td>$4,500</td>
                            <td>83 Bids</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Saccharina Frostwhip</td>
                            <td>Player</td>
                            <td>$4,260</td>
                            <td>120 Bids</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Duke Joren Jawbreaker</td>
                            <td>NPC</td>
                            <td>$4,210</td>
                            <td>330 Bids</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Queen Caramelinda</td>
                            <td>NPC</td>
                            <td>$4,011</td>
                            <td>158 Bids</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Captain Annabelle Cheddar</td>
                            <td>NPC</td>
                            <td>$3,702</td>
                            <td>268 Bids</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Manta Ray Jack</td>
                            <td>NPC</td>
                            <td>$3,701</td>
                            <td>259 Bids</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Auction;