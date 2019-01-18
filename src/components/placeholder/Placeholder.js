import React, { Component } from "react";

// Styles
import PlaceholderWrapper from "./styles/Placeholder";

// Components
import Button from "../common/Button";

class Placeholder extends Component {
    _handleClick = () => {
        console.log("Clicked");
    };

    render() {
        return (
            <PlaceholderWrapper>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient.
                </p>
                <Button buttonText="Click here" onClick={this._handleClick} />
            </PlaceholderWrapper>
        );
    }
}

export default Placeholder;
