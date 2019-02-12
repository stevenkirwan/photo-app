 /**
 * Error component 
 * Handles the rendering of error
 * if there's an error return from the API this component is displayed
 * Not state is handled and no props are passed
 */

import React from "react";

import ErrorWrapper from "./styles/ErrorWrapper";

const Error = () => <ErrorWrapper>Something went wrong....Please try again</ErrorWrapper>;

export default Error;
