import styled from "styled-components";

const CardItem = styled.div`
    width: 23%;
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    margin: 1%;
    @media (max-width: 992px) {
        padding-bottom:3rem;
        margin:0;
        width: 100%;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 320px;
        @media (max-width: 992px) {
            height: auto;
        }
    }
`;

export default CardItem;
