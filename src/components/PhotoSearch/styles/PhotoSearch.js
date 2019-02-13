import styled from "styled-components";

const PhotoSearchWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const CardWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1400px;
    margin:0 auto;
    justify-content:space-evenly;
    align-items:center;

    @media (max-width: ${props => props.theme.$tabletBreakpoint}) {
        flex-direction:column;
        padding:0 2rem;
        margin:0;
    }
`;

export { PhotoSearchWrapper, CardWrapper };
