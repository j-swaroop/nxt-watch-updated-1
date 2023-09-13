// header styled.js
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  heigth: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  position: fixed;
  width: 100vw;
`
export const NavContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogoImg = styled.img`
  width: 120px;
  text-decoration: none;
  @media (max-width: 576px) {
    width: 85px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const Navitems = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`
export const NavItemsMobile = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    display: none;
  }
`
export const ListItem = styled.li`
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 576px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const Profile = styled.img`
  width: 28px;
`

export const LogoutBtn = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  height: 30px;
  width: 75px;
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 4px;
  border-style: solid;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  diasplay: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  @media (min-width: 700px) {
    width: 350px;
    height: 170px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  color: gray:
  cursor: pointer;
  margin-right:10px;
  margin-left:10px;
  border-radius: 5px;
  height:35px;
  width:60px;
`

export const ConfirmButton = styled.button`
  background-color: #3b83f6;
  border: none;
  height:35px;
  width:60px;
   margin-right:10px;
  margin-left:10px;
  color: gray:
  cursor: pointer;
  border-radius: 5px;
`

export const ModalDesc = styled.p`
  color: black;
  font-family: "Roboto"
  font-size: 14px;
  text-align:center;
  margin-top:10px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`
export const LogoutIconButton = styled.button`
  border: none;
  background-color: transparent;
`
export const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ModalContainerMenu = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
`
export const ModalButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
  color: #000000;
`
export const CloseModalBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #000000;
  align-self: flex-end;
`