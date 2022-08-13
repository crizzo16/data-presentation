import React from "react";

function Resume() {
  return (
    <div className="resume-container">
      <div id="resume-skills" className="section-resume">
        <img className="resume-img" src="./assets/juggler.png" />
        <h3>Knowledge &amp; Skills</h3>
        <p className="resume-left">
          <strong>Languages:</strong> Javascript, HTML, CSS, SQL, Git, R, PHP,
          Python
        </p>
        <p className="resume-left">
          <strong>Tools:</strong> MongoDB, JQuery, Node JS, REST API, Laser
          Cutter
        </p>
        <p className="resume-left">
          <strong>Frameworks:</strong> Bootstrap, Materialize, Material UI,
          React
        </p>
        <p className="resume-left">
          <strong>Software:</strong> Tableau, Microsoft Office, Google Drive
          &amp; Scripts, Adobe Illustrator &amp; Photoshop, Figma
        </p>
        <p className="resume-left">
          <strong>Transferable Skills:</strong> Strong work ethic, optimistic
          attitude, attention to detail, public speaking, problem-solving, team
          player, communication skills
        </p>
      </div>
      <div id="resume-experience" className="section-resume">
        <img className="resume-img" src="./assets/shaking-hands.png" />
        <h3>Work Experience</h3>
        <p className="resume-left">
          <strong>Flipcause</strong>, Remote
          <br />
          <i>Frontend Web Developer, 2021-2022</i>
          <br /> 
          Collaborated with remote coworkers both in the States and overseas. Worked closely with designers to realize a website from conception to functional. 
        </p>
        <p className="resume-left">
          <strong>All Things Right &amp; Relevant</strong>, Davis, CA
          <br />
          <i>Sales Associate, 2017 - 2021</i>
          <br />
          Collaborated with management to create spreadsheets to assist in daily tasks. Completely redid the website to better display information for customers and consignors. 
        </p>
      </div>
      <div id="resume-applications" className="section-resume">
        <img className="resume-img" src="./assets/keyboard.png" />
        <h3>Applications Built</h3>
        <p>
          <strong>Flipcause</strong> (
          <a
            className="website-link"
            target="_blank"
            href="https://www.flipcause.com"
          >
            flipcause.com
          </a>
          )
        </p>
        <ul className="resume-list">
          <li>
            Revitalized HTML emails to display consistently across multiple
            devices and screen widths
          </li>
          <li>
            Translated Figma designs into clean code that was intuitively
            responsive
          </li>
          <li>
            Communicated effectively with team members distributed across the
            globe
          </li>
        </ul>
        <p>
          <strong>All Things Right &amp; Relevant</strong> (
          <a
            className="website-link"
            target="_blank"
            href="http://www.rrconsignments.org/"
          >
            rrconsignments.org
          </a>
          )
        </p>
        <ul className="resume-list">
          <li>
            Created a friendly user interface that is accessible for all age
            ranges
          </li>
          <li>
            Created CSS "building-blocks" for ease of creation of new elements
          </li>
          <li>
            Tailored technologies used for ease-of-use for current &amp; future
            managers
          </li>
        </ul>
      </div>

      <div id="resume-education" className="section-resume">
        <img className="resume-img" src="./assets/graduate-cap.png" />
        <h3>Education</h3>
        <p className="resume-left">
          <strong>Google Data Analytics Professional Certificate</strong>
          <br />
          <i>Google Career Certificates</i>
          <br />
          Gained a deeper understanding of Data Analytics practices, SQL,
          Excel/Google Sheets, and R.
        </p>
        <p className="resume-left">
          <strong>UC Davis Extension</strong>, Davis, CA
          <br />
          <i>Full Stack Web Development Program</i>
        </p>
        <p className="resume-left">
          <strong>University of Puget Sound</strong>, Tacoma, WA
          <br />
          <i>B.S. in Computer Science</i>
          <br />
          Minors in Mathematics and French. A member of Upsilon Pi Epsilon, Pi
          Mu Epsilon, and Phi Eta Sigma honor societies.
        </p>
      </div>
    </div>
  );
}

export default Resume;
