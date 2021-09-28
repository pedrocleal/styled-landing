import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 2;

  img {
    position: relative;
    height: 450px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  padding: 24px;
  color: #fff;
  position: relative;
  font-size: 36px;
`

export const SmallText = styled.p`
  color: #fff;
  position: relative;
  font-size: 14px;
  padding-bottom: 24px;
`

export const Button = styled.button`
  position: relative;
  width: 200px;
  height: 50px;
  color: #fff;
  border: none;
  background: hsl(176, 68%, 64%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`

export const Wave = styled.div`
  img {
    z-index: 1;
    position: absolute;
    top: 32rem;
    left: -20rem;
    width: 140rem;
  }
` 