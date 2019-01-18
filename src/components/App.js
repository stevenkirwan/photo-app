import React, { Component } from "react";

// Import global styles
import { ThemeProvider } from "styled-components";
import theme from "../globalStyles/GlobalTheme";
import GlobalStyles from "../globalStyles/GlobalStyles";

// Import components
import Placeholder from "./placeholder/Placeholder";

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <ThemeProvider theme={theme}>
                    <Placeholder />
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
