import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isdarktheme ? '#000000' : '#ffffff')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 30px;
  width: 190px;
  position: fixed; 
  overflow: hidden;
  top: 0;
  margin-top: 8vh;
  margin-bottom: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 576px) {
    display: none;
  }
`

export const ResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  width: 100%;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 30px;
  width: 100%;
`

export const NavText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 20px;
`

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const ItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  text-decoration: none;
  width: 100%;
  text-align: center;
  padding-left: 30px;
  background-color: ${props => (props.bgcolor ? '#212121' : 'transparent')};
  @media (max-width: 930px) {
    padding-left: 20px;
    padding-right: 15px;
  }
`
export const ItemText = styled.p`
  color: ${props => (props.isdarktheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 20px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  padding-bottom: 20px;
`