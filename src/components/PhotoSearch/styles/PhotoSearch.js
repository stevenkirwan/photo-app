import styled from "styled-components";

const PhotoSearchWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const CardWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content:space-between;
    align-items:center;
`;

export { PhotoSearchWrapper, CardWrapper };
