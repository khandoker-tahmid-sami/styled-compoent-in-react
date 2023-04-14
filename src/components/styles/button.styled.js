import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({bg})=> bg || "white"};
    color: ${({color})=> color || "black"};
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    transition: all 0.5s;
    font-size: 15px;
    font-weight: bold;
    margin-right: 20px;

    &:hover{
        background-color: #b6d5d8;
        transform: scale(0.90);
    }
`