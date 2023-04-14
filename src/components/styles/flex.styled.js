import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & >ul {
        flex: 1;
    }

    div{
        margin-left: 200px;
    }
    h1{
        color: #ED145B;
        margin-bottom: 1rem;
    }

    p{
        width: 500px;
        text-align: justify;
        margin-bottom: 1rem;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        text-align: center;
    div{
        margin-left: 0px;
        margin-bottom: 10px;
    }
    }
`