import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background: #87CEEB;
  color: #fff;

  align-items: center;

  h1 {
    margin-left: 20px;
    font-size: 300%;
  }

`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

   html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #fff;
  }

  div div {
    font-size: 62.5%;
  }

  button { 
    cursor: pointer;
  }

`