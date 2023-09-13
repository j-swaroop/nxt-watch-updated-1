import styled from 'styled-components'

export const MainConatiner = styled.div`
    display:flex;
    align-items:center;
    min-height:98vh
    margin-top:0;
    padding-top: 0;
    background-color: ${props => props.bgColor};
`

export const SavedContainer = styled.div`
  min-height: 100vh;
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

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const SavedTitleIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  margin-top: 40px;
`

export const NoSavedVideosimage = styled.img`
  width: 80%;
  max-width: 300px;
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.noteColor};
  text-align: center;
`