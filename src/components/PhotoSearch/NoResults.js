/**
 * No Results component
 * Handles the rendering of No Results
 * if the API returns nothing show this component
 */

import React from "react";

import ErrorWrapper from "./styles/ErrorWrapper";

const NoResults = () => <ErrorWrapper>No results. Try again....</ErrorWrapper>;

export default NoResults;
