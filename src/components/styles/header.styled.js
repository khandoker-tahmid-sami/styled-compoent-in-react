import styled from "styled-components";

export const StyledHeader = styled.div`
    padding: 30px;
    background-color: #e7f1f2;
    margin-bottom: 2rem;
` 
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #134b5f;

    h1{
        color: white;
    }

    @media(max-width: 768px) {
        flex-direction: column;

        h1{
        margin-bottom: 20px;
    }
    }
`

export const Image = styled.img`
    width: 375px;
    margin-right: 200px;
    
    @media(max-width: 768px){
        margin-right: 0px;
    }
`