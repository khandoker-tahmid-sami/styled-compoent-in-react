import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #e7f1f2;
    border-radius: 15px;
    /* box-shadow: 0 0 10px rgba(0,0,0,0.15); */
    margin: 10px 0;
    padding: 30px;

    div{
        width: 50%;
        text-align: center;
    }
    h2{
        color: #ED145B;
    }
    div,p,h2{
        width: 50%;
    }
    img{
        width: 40%;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        div,p,h2{
        width: 100%;
    }
        div{
            margin-bottom: 10px;
        }
        img{
        width: 80%;
    }
    }
`