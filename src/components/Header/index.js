// header.js
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsSun, BsBoxArrowInRight} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'

import {
  NavBar,
  NavContainer,
  WebsiteLogoImg,
  Navitems,
  Profile,
  LogoutBtn,
  NavItemsMobile,
  ListItem,
  NavLink,
  ConfirmButton,
  CloseButton,
  ButtonsContainer,
  ModalDesc,
  ModalContainer,
  LogoutIconButton,
  Btn,
  ModalContainerMenu,
  ModalButton,
  CloseModalBtn,
} from './styledComponents'

const webSiteLogoLightUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const webSiteLogoDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme, activeTabItem} = value

        const onClickChangeTheme = () => {
          changeTheme()
        }

        const onClickChangeHomeTab = () => {
          activeTabItem('HOME')
        }

        const logoImg = isDark ? webSiteLogoDarkUrl : webSiteLogoLightUrl
        const icons = isDark ? (
          <BsSun size={28} color="#ffffff" />
        ) : (
          <FaMoon size={28} />
        )
        const iconsMobile = isDark ? (
          <BsSun size={22} color="#ffffff" />
        ) : (
          <FaMoon size={22} />
        )
        const logoutIcon = isDark ? (
          <BsBoxArrowInRight size={22} color="#ffffff" />
        ) : (
          <BsBoxArrowInRight size={22} />
        )
        const menuIcon = isDark ? (
          <AiOutlineMenu size={22} color="#ffffff" />
        ) : (
          <AiOutlineMenu size={22} />
        )
        return (
          <NavBar isDarkTheme={isDark}>
            <NavContainer>
              <NavLink to="/">
                <WebsiteLogoImg
                  alt="website logo"
                  src={logoImg}
                  onClick={onClickChangeHomeTab}
                />
              </NavLink>
              <Navitems>
                <ListItem>
                  <Btn
                    type="button"
                    data-testid="theme"
                    onClick={onClickChangeTheme}
                  >
                    {' '}
                    {icons}{' '}
                  </Btn>
                </ListItem>
                <ListItem>
                  <Profile
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </ListItem>
                <ListItem>
                  <Popup
                    modal
                    trigger={
                      <LogoutBtn type="button" isDarkTheme={isDark}>
                        {' '}
                        Logout{' '}
                      </LogoutBtn>
                    }
                  >
                    {close => (
                      <ModalContainer>
                        <ModalDesc>
                          {' '}
                          Are you sure, you want to logout?{' '}
                        </ModalDesc>
                        <ButtonsContainer>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </ModalContainer>
                    )}
                  </Popup>
                </ListItem>
              </Navitems>

              <NavItemsMobile>
                <ListItem>
                  <Btn type="button" onClick={onClickChangeTheme}>
                    {' '}
                    {iconsMobile}{' '}
                  </Btn>
                </ListItem>
                <ListItem>
                  <Popup modal trigger={<Btn type="button">{menuIcon}</Btn>}>
                    {close => (
                      <ModalContainerMenu>
                        <CloseModalBtn
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          <AiOutlineClose size={20} />
                        </CloseModalBtn>
                        <ModalButton>
                          <NavLink to="/"> Home </NavLink>
                        </ModalButton>
                        <ModalButton>
                          <NavLink to="/trending"> Trending </NavLink>
                        </ModalButton>
                        <ModalButton>
                          <NavLink to="/gaming"> Gaming </NavLink>
                        </ModalButton>
                        <ModalButton>
                          <NavLink to="/saved-videos"> Saved Videos </NavLink>
                        </ModalButton>
                      </ModalContainerMenu>
                    )}
                  </Popup>
                </ListItem>
                <ListItem onClick={onClickLogout}>
                  <Popup
                    modal
                    trigger={
                      <LogoutIconButton type="button">
                        {logoutIcon}
                      </LogoutIconButton>
                    }
                  >
                    {close => (
                      <ModalContainer>
                        <ModalDesc>
                          {' '}
                          Are you sure, you want to logout?{' '}
                        </ModalDesc>
                        <ButtonsContainer>
                          <CloseButton type="button" onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </ModalContainer>
                    )}
                  </Popup>
                </ListItem>
              </NavItemsMobile>
            </NavContainer>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)