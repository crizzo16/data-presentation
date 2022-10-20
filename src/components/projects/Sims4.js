import React, { Component } from "react";

class Sims4 extends Component {
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizURL =
      "https://public.tableau.com/views/Sims4Analyzation/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
    const vizContainer = document.getElementById("vizContainer");
    let viz;
    if (viz) viz.dispose();
    viz = new window.tableau.Viz(vizContainer, vizURL);
  }

  render() {
    return (
      <div className="project-sec">
        <h1>Sims 4 Pack Releases</h1>
        <p className="text-container">
          The idea of this spreadsheet was to track Sims 4 releases in general.
          One of the first stats I pulled out was how much time passed
          in-between packs, especially between packs of the same type. Later on
          I was curious about the amount of items in each pack, and set about
          trying to compare the type of packs with how many items they offered.
          The best part of the Sims is that types were already color-coded,
          making this a very colorful spreadsheet!
        </p>
        <p className="text-container">
          This spreadsheet has evolved over time. At the beginning, it only
          looked at release dates. As someone who only got into the Sims in
          March 2021, I was curious how often they released new content. In
          particular I was curious about the frequency of major pack releases. I
          started this spreadsheet around the same time as a new content type,
          Kits, were first released, adding in a new layer of exploration as the
          Sims appears to have pivoted from Stuff Packs to the even smaller
          Kits. Another area of interest for me was the amount of items in each
          release. Items in the Sims can be broken into CAS (Create a Sim) items
          and Build/Buy items. From there, it was easy to extrapolate the pack
          value based on number of items alone. However, this doesn't tell the
          whole story. New gameplay features can be hard to quantify, such as
          new careers or game systems. But for certain Simmers, knowing the
          value of the items you're buying can have an impact on whether you buy
          the pack.
        </p>
        <div className="line"></div>
        <h2>Spreadsheet Tables</h2>
        <div className="spreadsheet-div">
        <iframe className="spreadsheet-frame" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTCdrFzWYnk-JcUyBnthPKl3Dx8A2396Pkk302422nfRoY2apLyEEri-AnM7qVeFoEhABMx7DU0i26-/pubhtml?gid=2056633264&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
        <div id="vizContainer"></div>
      </div>
    );
  }
}

export default Sims4;
