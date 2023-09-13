import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoContainer = styled.li`
  width: 30%;
  margin-right: 5px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    width: 47%;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 90%;
  @media (max-width: 576px) {
    width: 50%;
  }
`

export const GameImg = styled.img`
  width: 90%;
`
export const GameTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 4px;
  @media (max-width: 576px) {
    font-size: 15px;
  }
`

export const GameViews = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 2px;
  width: 90%;
`