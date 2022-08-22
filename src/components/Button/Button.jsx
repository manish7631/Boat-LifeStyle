import styledComponents from "styled-components"


export const Button = styledComponents.button`
width: 150px;
height: 50px;
margin: 10px;
background-color: transparent;
color: ${(props) => props.theme === "dark" ? "white" : "white"};
border: none;
cursor:pointer;
`;