import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 60px 0;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;

 
`

export const HeaderMenu = styled.div`
  color: white;
  ul {
    list-style: none;
    display: flex;

    li {
      font-family: 'Maleway', sans-serif;
      font-weight: 400;
      padding: 20px;
      font-size: 18px;
      cursor: pointer;
    }
  }
`
