import React, {Component} from "react";
import "../../App.css";

class ShutTheBox extends Component {

    
    toggleToken = event => {
        event.currentTarget.classList.toggle('token-back');
        event.currentTarget.classList.toggle('single-token')
    }

    render() {
        return (
            <div>
                <div className="tokens box">
                    <div className="single-token" num="1" onClick={this.toggleToken}>1</div>
                    <div className="single-token" num="2" onClick={this.toggleToken}>2</div>
                    <div className="single-token" num="3" onClick={this.toggleToken}>3</div>
                    <div className="single-token" num="4" onClick={this.toggleToken}>4</div>
                    <div className="single-token" num="5" onClick={this.toggleToken}>5</div>
                    <div className="single-token" num="6" onClick={this.toggleToken}>6</div>
                    <div className="single-token" num="7" onClick={this.toggleToken}>7</div>
                    <div className="single-token" num="8" onClick={this.toggleToken}>8</div>
                    <div className="single-token" num="9" onClick={this.toggleToken}>9</div>
                </div>
            </div>
        )
    }
}

export default ShutTheBox;