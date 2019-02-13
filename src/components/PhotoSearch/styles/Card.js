import styled from "styled-components";

// used to animate styles
import { FadeIn} from "animate-css-styled-components";

const CardItem = styled(FadeIn)`
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    margin:2rem 0;
    overflow:hidden;
    width: calc(25% - 3rem);
    @media (max-width: ${props => props.theme.$largeTabletBreakpoint}) {
        margin: 0;
        padding-bottom: 3rem;
        width: 100%;
    }
    img {
        object-fit: cover;
        height: 320px;
        width: 100%;
        @media (max-width: ${props => props.theme.$largeTabletBreakpoint}) {
            height: auto;
        }
    }

    .card {
        min-height:200px;
        max-height:200px;
        margin-bottom:10px;
        padding: 1.5rem;
        h3 {
            padding-bottom: 0.3rem;
            a {
                font-size: 1.8rem;
                line-height: 2.2rem;
                text-decoration: none;
            }
        }

        p{
            font-size:1.4rem;
            padding-bottom: 0.3rem;
        }

        .date{
            font-size:1.2rem;
            font-weight:${props => props.theme.$semiBold};
        }

        .tags{
            font-size:1.2rem;
            padding-top:0.5rem;
        }
    }
`;

export default CardItem;
