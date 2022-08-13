import React from "react";

function Eurovision2022() {
  return (
    <div className="full-area-padding">
      <h1>Eurovision 2022</h1>
      <p className="text-container">
        Eurovision is ripe for statistical analysis, even just using Google
        Sheets. It's a popular phenomenon on Youtube to rank your favorite
        songs, outside of the structure of the contest. From a top 40, you can
        plug that into the semi-finals and final to find out the actual ranking
        if that was the true order of songs. By replicating with many different
        Youtubers (and my own personal ranking), I tried to predict who would
        win - or at least make the finals. While Sweden, the top choice, didn't
        win, it did place 4th. A big surprise was Austria. While they were the
        only non-Big 5 country to always make the finals in the Youtube
        rankings, their average performance didn't qualify them for the finals,
        showing that analysis of studio versions of songs can't fully predict
        what happens when everyone gets on the Eurovision stage.
      </p>
      <p className="text-container">
        At the bottom of the spreadsheet are the other sheets that help with
        creating this final collection. <strong>Actual</strong> looks at the
        real placements of the countries and how that compares to the data I
        collected. <strong>Input</strong> is obviously the sheet where I
        inputted all the data, as well as started to sort it based on
        semi-finals. I also added a way to quickly and easily see where various
        Youtubers ranked a specific country, as well as where their personal
        cutoffs for each semi-final ranked. <strong>Middleman</strong> is only
        used to calculate places in each semi-final to better automatically sort
        data on the real spreadsheet. <strong>My Ranking Over Time</strong> was
        a mini-experiment to see how my taste changed over the course of the
        month. <strong>Calculating Points</strong> was used during the live show
        to be able to see who the winner would be, since there are a finite
        amount of points to be given. It definitely helped take the sting out of
        the very drawn out moments between announcing points. It also shows
        which countries were preferred by the public and which were preferred by
        the juries - Moldova was ranked 20th by the juries, but 2nd by the
        public!
      </p>
      <iframe
        title="Eurovision2022"
        id="frame-esc22"
        className="spreadsheet-frame"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPtoPUbRSozcdEqZ9RYvIL-jDl0ZsirDDekUOMKMhvQOfNKp3FhPvyH1GMWr4jZEDWjtX0jr8iU9Q/pubhtml?widget=true&amp;headers=false"
      ></iframe>
    </div>
  );
}

export default Eurovision2022;
