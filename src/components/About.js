import React from "react";

function About() {
  return (
    <div className="container">
      <div>
        <img className="img-about" src="./assets/ProfCelia.JPG" />
        <p className="text-container">
          Raised in central California, Celia has always enjoyed logic puzzles
          and figuring things out, even if she hadn't discovered coding yet. At
          the University of Puget Sound, she decided to do a Computer Science
          minor, but from "Hello World!" was immediately entranced. Switching to
          a coding major, she finished her university days with Mathematics and
          French minors.
          <br />
          <br></br>
          After university, Celia decided to augment her coding skills with a
          web development course through UC Davis Extension. This help her get
          in touch with her artistic side, as she really enjoyed the
          intersection between making a website look great while also being
          well-coded.
          <br />
          <br></br>
          Outside of coding, Celia enjoys being creative, whether that's sewing
          masks or running a D&amp;D game for her friends. Like many others
          during the pandemic, she discovered that spending time with friends
          and family is very important, especially if she can convince them to
          play a board game or two.
        </p>
        <div className="quick-about">
          <div className="sec-quick-about color">
            <h2>Currently Reading</h2>
            <p>Gideon the Ninth by Tamsyn Muir</p>
          </div>
          <div className="sec-quick-about color-darken-1">
            <h2>Currently Watching</h2>
            <p>Critical Role, Young Justice, Paper Girls</p>
          </div>
          <div className="sec-quick-about color-darken-2">
            <h2>Currently Playing</h2>
            <p>Marvel Avengers, Unravel, Ghosts of Saltmarsh</p>
          </div>
          <div className="sec-quick-about color-darken-3">
            <h2>Currently Learning</h2>
            <p>Data Science Foundations: Statistical Inference</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
