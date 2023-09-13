import styled from 'styled-components'

export const MainConatiner = styled.div`
    display:flex;
    align-items:center;
    height:90vh
    margin-top:0;
    padding-top: 0;
    background-color: ${props => props.bgColor};
`

export const VideoContainer = styled.div`
  min-height: 91vh;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 100%;
  margin-left: 190px;
  padding-top: 10vh;
  padding: 20px;
  @media (max-width: 576px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const VideoPlayer = styled.div`
  width: 100%;
  height: 360px;
  @media (min-width: 576px) {
    height: 500px;
  }
`
export const Details = styled.div``

export const Title = styled.p`
  
`