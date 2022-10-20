import React from "react";

function Resume() {
  return (
    <div className="resume-container">
      <div className="dropdown-sec">
        <div className="dropdown color">Coding Languages</div>
        <div className="sub-dropdown">
          <div className="resume-pill color">Javascript</div>
          <div className="resume-pill color">HTML</div>
          <div className="resume-pill color">CSS</div>
          <div className="resume-pill color">Python</div>
          <div className="resume-pill color">R</div>
        </div>
        <div className="dropdown color-darken-1">Tools &amp; Frameworks</div>
        <div className="dropdown color-darken-2">Software</div>
        <div className="dropdown color-darken-3">Skills</div>
      </div>
    </div>
  );
}

export default Resume;
