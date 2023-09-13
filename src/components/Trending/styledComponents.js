import styled from 'styled-components'

export const MainConatiner = styled.div`
    display:flex;
    align-items:center;
    height:90vh
     margin-top:0;
    padding-top: 0;
    background-color: ${props => props.bgColor};
`

export const TrendingContainer = styled.div`
  min-height: 91vh;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 90%;
  margin-top: 0;
   margin-left: 190px;
  padding-top: 10vh;
  @media (max-width: 576px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-top: 0;
  background-color: ${props => props.containerBg};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 20px;
  background-color: ${props => props.iconBg};
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 20px;
`

export const ContentContainer = styled.div`
  padding: 20px;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
export const TrendingVideos = styled.ul`
  padding-left: 0;
  list-style-type: none;
`