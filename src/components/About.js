import React from "react";

function About() {
  return (
    <div className="container">
      <div>
        <div className="about-side-by-side">
          <img className="img-about" src="./assets/ProfCelia.JPG" />
          <p className="text-container about-text">
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
        </div>

        <div className="line"></div>

        <h1>Skills &amp; Knowledge</h1>
        <div className="testing">
          <div className="resume-stuff">
            <h2 className="color">Coding Languages</h2>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>R</li>
              <li>Python</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="resume-stuff">
            <h2 className="color-darken-1">Tools &amp; Frameworks</h2>
            <ul>
              <li>Mongo DB</li>
              <li>Node.js</li>
              <li>Rest API</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>React</li>
            </ul>
          </div>
          <div className="resume-stuff">
            <h2 className="color-darken-2">Software</h2>
            <ul>
              <li>Microsoft Office (Expert at Excel)</li>
              <li>Adobe Photoshop</li>
              <li>Google Drive &amp; Google Scripts</li>
              <li>Tableau</li>
              <li>Jira</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="resume-stuff">
            <h2 className="color-darken-3">Transferable Skills</h2>
            <ul>
              <li>Strong work ethic</li>
              <li>Optimistic attitude</li>
              <li>Attention to detail</li>
              <li>Public Speaking</li>
              <li>Problem-solving</li>
              <li>Team player</li>
              <li>Communication skills</li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div className="quick-about">
          <div className="sec-quick-about color">
            <h2>Currently Reading</h2>
            <p>Project Hail Mary by Andy Weir</p>
          </div>
          <div className="sec-quick-about color-darken-1">
            <h2>Currently Watching</h2>
            <p>Critical Role, Young Justice, Rings of Power</p>
          </div>
          <div className="sec-quick-about color-darken-2">
            <h2>Currently Playing</h2>
            <p>Marvel Avengers, SWTOR, Ghosts of Saltmarsh</p>
          </div>
          <div className="sec-quick-about color-darken-3">
            <h2>Currently Learning</h2>
            <p>Statistical Inference, Project Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
