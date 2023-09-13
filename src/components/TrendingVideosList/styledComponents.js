
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  @media (min-width: 576px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: auto;
  }
`

export const VideoImg = styled.img`
  width: 35vw;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Profile = styled.img`
  width: 30px;
  margin-right: 10px;
  align-self: flex-start;
  margin-top: 8px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-self: flex-start;
  @media (max-width: 576px) {
    margin-left: 0;
  }
`

export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  @media (min-width: 776px) {
    font-size: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0;
`

export const Views = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0;
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`