import React, {Component} from "react";
import "../../App.css";

class FCDonation extends Component {
    render() {
        return (
            <div>
                <h1>Flipcause Donation Tool</h1>
                <p className="text-container">
                    Flipcause is a company based around helping smaller nonprofits do online fundraising. This is achieved by using a basic design for their campaign pages, while allowing customization to personalize the pages to the specific organization, or even the specific campaign being run. There are many different ways that organizations could run these online campaigns, the most basic being a simple Donation tool. 
                </p>

                <div className="line"></div>

                <h2>Flow</h2>
                <img className="gen-img" src="./assets/fc-donation-home.png" />
            </div>
        )
    }
}

export default FCDonation;