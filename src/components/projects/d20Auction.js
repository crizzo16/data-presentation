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
            <div className="project-sec">
                <h1>Dimension 20 Minis Auction</h1>
                <p className="text-container">
                    In July 2022, the RPG show Dimension 20 announced that it would be auctioning off minis from their season, <i>A Crown of Candy</i> to raise money for charity and for future minis in future seasons. There would be four waves, each with about twenty-five minis starting at $50 each. Little did the internet know how big this auction would turn out. The first wave saw immediate success, with the lowest mini still going for $602 (Candy Villager 4). Each wave has shown new levels of success. Below are tables and visualizations to interpret various aspects of the data. 
                </p>
                <h3>Glossary of Terms</h3>
                <p className="text-container">If you're new to role-playing games (RPGs) or Dimension 20, here are some terms you'll see in this analysis.</p>
                <p className="text-container" id="d20-terms">
                    <strong>NPC.</strong> Non-Player Character. More specifically in this analysis, non-player characters that are named. <br />
                    <strong>Background.</strong> Background characters, like Candy Villager 4 or Banana Swordsman 1. They're here for visual flavor, but aren't really part of the story. <br />
                    <strong>Player.</strong> These are the minis for the players are the table. Any companions or pets are part of the NPC category.
                </p>

                <div className="line"></div>

                <h2>Results</h2>
                <p className="text-container">
                    A few different conclusions can be drawn from this data. The first, and maybe obvious, is that player minis tended to auction for more than NPCs and background minis. No background minis broke the top 10 earners, and only one broke the top 10 most bid on (Candy Villager 2, a very cute chocolate bar). This is to be expected, as viewers spend much more time with player characters. The unused player character minis fall right in the main clump of minis, but still above background minis. A few NPCs did manage to break the top 10 earners (Lord Calroy Cruller, Sir Keradin Deeproot, Duke Joren Jawbreaker, and Queen Caramelinda), but they are major NPCs in the season. 
                </p>
                <p className="text-container">
                    Another important conclusion drawn is that people have a great interest in the player character minis, as represented by the bids vs amount auction for graph. The player minis stay close ot below the average line for bids, but are worth far more than most of the minis. This shows that viewers quickly raised the auction amount such that there was minimal bidding wars. On the opposite side, we see that nine out of 10 of the top bid on minis are NPCs, and only two of those minis are also on the top 10 earners list. People spent time only minorly incrementing the amounts for the NPCs, sparking last minute bidding wars.
                </p>
                <p className="mobile-tableau">
                    Tableau visualizations are best viewed on a screen at least 700px wide. Please view this page on a tablet or computer.
                </p>

                <div className="line"></div>

                <h2>Tableau Visualizations</h2>
                <div id="vizContainer"></div>

                <div className="line"></div>

                <h2>Spreadsheet Tables</h2>
                <div className="spreadsheet-div"><iframe title="Dimension 20 Auction spreadsheet" id="frame-d20auction" className="spreadsheet-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyYmLkw4g_YGxCclm4ttac4ACjOPhB0L0GXHELW1zFbMCfeIdAQwhbujb4OyYBhqpFk_vALdERfr3A/pubhtml?gid=1857248322&amp;single=true&amp;widget=true&amp;headers=false"></iframe></div>
            </div>
        )
    }
}

export default Auction;