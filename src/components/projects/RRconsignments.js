import React from "react";

function RRconsignments() {
    return (
        <div className="full-area-padding project-sec">
            <h1>All Things Right &amp; Relevant</h1>
            <p className="text-container">
                I had already worked for the consignment store <a target="_blank" href="http://www.rrconsignments.org/">All Things Right &amp; Relevant (R&amp;R)</a> for a couple years when I decided to take it into my own hands to redesign the website. I had been the go-to person to update it, but it hadn't really been touched since 2007. All of the CSS was done in each individual file, it used dark colors, and it definitely didn't scale nicely for smaller screens. So basically, I tried to do the opposite of that for the redesign. A central easy-to-follow CSS file, bright colors, and mobile responsiveness were three of the biggest aspects I prioritized for the redesign. I kept all the original element - just made them look a bit more 2020 and a bit less 2007. 
            </p>
            <div className="line"></div>
            <h2>CSS Guide</h2>
            <div className="gen-section">
                <p className="gen-text">
                    I knew I wasn't going to stay with the store forever, or even the area it was located it. This made code re-usability a huge priority. While I still help out with website updates, I wanted to create a <a href="http://www.rrconsignments.org/css-guide.html">CSS style guide</a> that meant anyone with basic HTML knowledge could add things or change the website. It does cover some slightly more advanced topics, like Flexbox and Containers, but it's better to have documentation and not need it than don't have documentation and don't remember what you've already created. <br/><br />
                    As shown in the image, I made sure to link each section in the document for quick reference, as well as consider what sections might be needed for someone with minimal knowledge. "Headers" and "Link Colors" might seem simple to anyone who's coded before, but since these elements are commonly used on the website, I thought it best to have thorough documentation for those who wish to create new elements.
                </p>
                <img className="gen-img" alt="CSS guide" src="./assets/rr-css-guide.png" />
            </div>
            <div className="line"></div>
            <h2>Thoughtful Elements</h2>
            <div className="gen-section">
                <img className="gen-img" alt="R&amp;R About Us page" src="./assets/rr-about-us.png" />
                <p className="gen-text">
                    The dotted border is not something oft-used, but for a mainly clothing consignment store, it adds the perfect stitch-like touch to boxes and images. The background image was also chosen for its fabric-like texture. The colors were chosen to make elements stand out on the page and easy to follow. A lot of information needs to be conveyed on the website, so bright colors help the customer find what they are looking for. The previous background was black, which I thought didn't convey the joy and light in the store.
                </p>
            </div>
            <div className="big-space"></div>
        </div>
    );
}

export default RRconsignments;