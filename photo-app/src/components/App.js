/**
 * This is the main wrapper for the app
 * It handles passing the default styles around the app
 * it renders the Photosearch component that displays the search view
 */

/**
 * Import dependencies
 */
import React, { Component } from "react";

/**
 * Import global styles
 */
import { ThemeProvider } from "styled-components";
import theme from "../globalStyles/GlobalTheme";
import GlobalStyles from "../globalStyles/GlobalStyles";

/**
 * Import components
 */
import PhotoSearch from "./PhotoSearch/PhotoSearch";

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <ThemeProvider theme={theme}>
                    <PhotoSearch />
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
