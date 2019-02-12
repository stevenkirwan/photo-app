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
    justify-content:space-between;
    align-items:center;
`;

export { PhotoSearchWrapper, CardWrapper };
