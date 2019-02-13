/**
 * Photo card component
 * Handles the rendering of the photo card
 * If the API successfully returns results this component is displayed
 * Stateless component - props are passed form the parent PhotoSearch.js
 */

import React from "react";

import { _formatDate } from "../helpers/helpers";

import CardItem from "./styles/Card";

const Card = props =>
    props.photos.slice(0, props.limit).map(item => {
        return (
                <CardItem key={item.id} delay="0.2s">
                    <a
                        href={`https://www.flickr.com/photos/${item.owner}/${
                            item.id
                        }/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`https://farm${item.farm}.staticflickr.com/${
                                item.server
                            }/${item.id}_${item.secret}.jpg`}
                            alt={item.id}
                        />
                    </a>
                    <div className="card">
                        <h3>
                            <a
                                href={`https://www.flickr.com/photos/${
                                    item.owner
                                }/${item.id}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.title}
                            </a>
                        </h3>
                        <p>{item.owner}</p>
                        <div className="date">
                            {_formatDate(item.datetaken)}
                        </div>
                        <div className="tags">{item.tags}</div>
                    </div>
                </CardItem>
     
        );
    });

export default Card;
