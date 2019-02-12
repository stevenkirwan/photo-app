import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    background: ${props => props.theme.$greenHeritage};
    border: ${props => props.theme.$greenHeritage};
    ${props => props.theme.$borderRadius(5)};
    color: ${props => props.theme.$white};
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: bold;
    min-height: 3.2rem;
    line-height: normal;
    min-height: 3.2rem;
    overflow: visible;
    padding: 1.9rem 1.7rem;
    text-align: inherit;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    &:hover {
        background: ${props => props.theme.$greenDark};
    }

    ${props =>
        props.disabled &&
        css`
            background-color: ${props => props.theme.$grey80};
            border: 1px solid ${props => props.theme.$grey80};
            color: ${props => props.theme.$white};
            pointer-events: none;
            &:hover {
                background-color: ${props => props.theme.$grey80};
            }
        `};
`;

export default ButtonWrapper;
