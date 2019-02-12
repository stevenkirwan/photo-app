import styled from "styled-components";

const CardItem = styled.div`
    width: 23%;
    display: flex;
    justify-content: flex-start;
    flex-grow:1;
    margin:1%;
    img {
        object-fit: cover;
        width: 100%;
        height: 320px;
    }
`;

export default CardItem;
