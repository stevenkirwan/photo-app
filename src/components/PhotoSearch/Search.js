/**
 * Search component
 * Handles the rendering of the search component
 * The value form the input field is passed up to the parent PhotoSearch.js to pass to the API call
 * There's an onChange function to handle user input in input field
 */

import React, { Component } from "react";

/**
 * Import styles
 */
import SearchWrapper from "./styles//Search";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "" // search term
        };
    }

    /**
     * Function to handle input field change
     */
    _handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <SearchWrapper>
                <form
                    onSubmit={e => this.props._handleSubmit(e, this.state.term)}
                >
                    <input
                        type="text"
                        name="term"
                        onChange={this._handleChange}
                        value={this.state.term}
                        placeholder="Search Images"
                        autoComplete="off"
                    />
                    <button type="submit">Search</button>
                </form>
            </SearchWrapper>
        );
    }
}

export default Search;
