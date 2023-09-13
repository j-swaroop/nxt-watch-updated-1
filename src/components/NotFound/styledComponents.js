import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 82%;
   margin-left: 190px;
  padding-top: 10vh;
  background-color: ${props => props.bgColor};
  @media (max-width: 576px) {
    width: 100%;
    margin-left:0;
  }
`

export const NotFoundImg = styled.img`
  width: 80%;
  max-width: 300px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => props.color};
`

export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => props.color};
`