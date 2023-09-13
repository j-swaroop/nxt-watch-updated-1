import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  width: 29%;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    width: 95%;
  }
  @media (max-width: 768px) and (min-width: 577px){
    width: 40%;
  }
 
`

export const VideoImg = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-bottom: 15px;
  margin-right: 4px;
`
export const VideoText = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  text-decoration: none;
`

export const ChannelName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
  text-decoration: none;
`

export const Views = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
  text-decoration: none;
`