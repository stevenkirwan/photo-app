import styled from "styled-components";

const SearchWrapper = styled.div`
    background: ${props => props.theme.$offWhite};
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3238&q=80");
    margin-bottom: 5rem;
    padding: 15% 20%;
    @media (max-width: ${props => props.theme.$tabletBreakpoint}) {
        padding: 20% 8%;
    }
    form {
        display: flex;
        margin: 0 auto;
        max-width: 960px;
        @media (max-width: ${props => props.theme.$tabletBreakpoint}) {
            flex-direction: column;
        }
    }
    input {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background: ${props => props.theme.$white};
        border: 1px solid ${props => props.theme.$white};
        border-top-left-radius: 6rem;
        border-bottom-left-radius: 6rem;
        border-right: none;
        box-shadow: none;
        display: block;
        font-size: 1.4rem;
        height: 6rem;
        outline: 0;
        padding: 1.3rem 3.5rem;
        transition: border ease-in-out;
        width: 75%;

        @media (max-width: ${props => props.theme.$tabletBreakpoint}) {
            border-radius: 0;
            padding: 1.3rem 2rem;
            width: 100%;
        }
    }

    button {
        background: ${props => props.theme.$primary};
        border: 1px solid ${props => props.theme.$primary};
        border-top-right-radius: 6rem;
        border-bottom-right-radius: 6rem;
        color: ${props => props.theme.$white};
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: ${props => props.theme.$semiBold};
        height: 6rem;
        outline: 0;
        transition: background-color ease-in-out;
        width: 25%;
        &:hover {
            background: ${props => props.theme.$primaryDark};
            border: 1px solid ${props => props.theme.$primaryDark};
        }

        @media (max-width: ${props => props.theme.$tabletBreakpoint}) {
            border-radius: 0;
            margin-top: 1rem;
            width: 100%;
        }
    }
`;

export default SearchWrapper;
