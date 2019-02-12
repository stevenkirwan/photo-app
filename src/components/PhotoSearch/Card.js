/**
 * Photo card component
 * Handles the rendering of the photo card
 * If the API successfully returns results this component is displayed
 * Stateless component - props are passed form the parent PhotoSearch.js
 */

import React from "react";

import CardItem from "./styles/Card";

const Card = props =>
    props.photos.slice(0, props.limit).map(item => {
        return (
            <CardItem key={item.id}>
                <img
                    src={`https://farm${item.farm}.staticflickr.com/${
                        item.server
                    }/${item.id}_${item.secret}.jpg`}
                    alt={item.id}
                />
            </CardItem>
        );
    });

export default Card;
