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

    @media (max-width: 992px) {
        flex-direction:column;
        padding:0 2rem;
        margin:0;
    }
`;

export { PhotoSearchWrapper, CardWrapper };
