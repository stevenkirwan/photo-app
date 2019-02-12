 /**
 * Loader component 
 * Handles the rendering of the loader
 * This is displayed on initial load and when a search is done
 * No state is handled and no props are passed
 */

import React from "react";

import ErrorWrapper from "./styles/ErrorWrapper";

const Loader = () => <ErrorWrapper>Loading....</ErrorWrapper>;

export default Loader;