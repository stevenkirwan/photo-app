/**
 * PhotoSearch component
 * Handles the rendering of the PhotoSearch component
 * Most of the logic is handled in here and passed down to child components
 * First we check to see if the API returns an Error if so return the Error component
 * If the API doesn't return an error show the loading component until the API returns the results
 * Once the results have been returned render the Card component displaying the reults
 * There's infinite scrolling set on the results, the limit is set by the state. By default it's 20, when the user hits the bottom of the div 20 more are loaded
 * When a user enters a search term the form sends a new request to the API and repeats the process outlined above
 */

/**
 * Import dependencies
 */
import React, { Component } from "react";
import axios from "axios"; // used to make the http to the API

/**
 * Import components
 */
import Search from "./Search";
import Error from "./Error";
import Loader from "./Loader";
import Card from "./Card";

import { PhotoSearchWrapper, CardWrapper } from "./styles/PhotoSearch";

class PhotoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [], // results array
            limit: 20, // set limit of results
            loading: true, // set loading to true until results have been returned
            error: false // set error to false until error is returned
        };
    }

    componentDidMount() {
        // when the componet mounts add an event listener for the users scrolling
        window.addEventListener("scroll", this._handleScroll);

        // API url with hard coded serach term
        const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=snow&text=snow&extra=url_n&api_key=4c4c949d05abc5434e054a68b10c1e6e&format=json&nojsoncallback=1`;

        // API request
        axios
            .get(URL)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo, // push results to photo array
                    loading: false // set loading to false
                });
            })
            .catch(err => {
                this.setState({
                    error: true // if there's an error set to true
                });
            });
    }

    /**
     * If the component unmounts remove scroll event listener
     */
    componentWillUnmount() {
        window.removeEventListener("scroll", this._handleScroll);
    }

    /**
     *  Handle the submission of the search from
     */
    _handleSubmit = (e, term) => {
        // prevent default form behaviour so the page doesn't reload
        e.preventDefault();

        // set the loading state to true again
        this.setState({
            loading: true
        });

        // Make the API request
        const URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4c4c949d05abc5434e054a68b10c1e6e&tags=${term}&text=${term}&format=json&nojsoncallback=1`;
        axios
            .get(URL)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo, // update reults array
                    limit: 20, // reset the limit
                    term: "", // set the form value to empty
                    loading: false // set loading to false
                });
            })
            .catch(err => {
                this.setState({
                    error: true // if there's an error set to true
                });
            });
    };

    /**
     *  Handle the scrolling event
     */
    _handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // based on the prev state add 20 more cards
            this.setState(prev => {
                return { limit: prev.limit + 20 };
            });
        }
    };

    render() {
        return (
            <PhotoSearchWrapper>
                {/* { render search component - pass the _handleSubmit function } */}
                <Search _handleSubmit={this._handleSubmit} />
                {/* { if has error render the error component } */}
                {this.state.error ? (
                    <Error />
                ) : this.state.loading ? (
                    // if loading is true render the loader component
                    <Loader />
                ) : (
                    /**
                     *  if loading is false render the card component
                     *  pass the limt and photos array as props
                     */
                    <CardWrapper>
                        <Card
                            limit={this.state.limit}
                            photos={this.state.photos}
                        />
                    </CardWrapper>
                )}
            </PhotoSearchWrapper>
        );
    }
}

export default PhotoSearch;
