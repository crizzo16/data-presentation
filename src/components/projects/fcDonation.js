import React, {Component} from "react";
import "../../App.css";

class FCDonation extends Component {
    render() {
        return (
            <div className="project-sec">
                <h1>Flipcause Donation Tool</h1>
                <p className="text-container">
                    Flipcause is a company based around helping smaller nonprofits do online fundraising. This is achieved by using a basic design for their campaign pages, while allowing customization to personalize the pages to the specific organization, or even the specific campaign being run. There are many different ways that organizations could run these online campaigns, the most basic being a simple Donation tool. 
                </p>

                <div className="line"></div>

                <h2>Juggling Multiple Elements</h2>
                <div className="gen-section">
                    <img className="gen-img" src="./assets/fc-donation-home.png" alt="The homepage for a donation tool" />
                    <p className="gen-text">
                        When creating the donation tool, considerations were also taken into account for the general functions needed for the campaign pages. Elements such as photo and video galleries, contact information, signup for a mailing list, and more were added as part of the initial iteration. Since these exact needs could change with each organization and particular campaign, special care had to be taken to consider how different combinations of elements would look together. Every element seen in the image of the example Safe Paws Fund page is removable, creating an entirely different experience.
                    </p>
                    </div>
            </div>
        )
    }
}

export default FCDonation;