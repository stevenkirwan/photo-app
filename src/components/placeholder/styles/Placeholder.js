import styled from "styled-components";

const PlaceholderWrapper = styled.div`
    color: ${props => props.theme.$black};
    ${props => props.theme.$space("padding", "", "2")};
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        color: #128932;
        font-size: 3.6rem;
        line-height: 4.5rem;
        margin: 0;
        padding-bottom: 1rem;
    }

    p {
        font-size: 1.8rem;
        line-height: 3.2rem;
        padding-bottom: 2.4rem;
    }
`;

export default PlaceholderWrapper;
