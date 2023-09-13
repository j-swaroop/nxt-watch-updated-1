import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import {
  SideBarContainer,
  ResponsiveContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactNote,
  ContactImage,
  ContactIcons,
  ContactHeading,
  ContactInfo,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, activeTabItem, activeTab} = value

          const textColor = isDark ? '#f9f9f9' : '#231f20'
          const activeTabBg = isDark ? '#212121' : '#e2e8f0'

          const onClickChangeHomeTab = () => {
            activeTabItem('HOME')
          }

          const onClickChangeTrendingTab = () => {
            activeTabItem('TRENDING')
          }

          const onClickChangeGamingTab = () => {
            activeTabItem('GAMING')
          }

          const onClickChangeSavedTab = () => {
            activeTabItem('SAVED_VIDEOS')
          }

          return (
            <SideBarContainer isdarktheme={isDark}>
              <ResponsiveContainer>
                <NavOptions>
                  <NavLink to="/">
                    <NavLinkContainer
                      key="home"
                      bgColor={activeTab === 'HOME' ? activeTabBg : 'none'}
                      onClick={onClickChangeHomeTab}
                    >
                      <AiFillHome
                        size={20}
                        color={activeTab === 'HOME' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}> Home</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/trending">
                    <NavLinkContainer
                      key="trending"
                      bgColor={activeTab === 'TRENDING' ? activeTabBg : 'none'}
                      onClick={onClickChangeTrendingTab}
                    >
                      <HiFire
                        size={20}
                        color={activeTab === 'TRENDING' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}> Trending</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/gaming">
                    <NavLinkContainer
                      key="gaming"
                      bgColor={activeTab === 'GAMING' ? activeTabBg : 'none'}
                      onClick={onClickChangeGamingTab}
                    >
                      <SiYoutubegaming
                        size={20}
                        color={activeTab === 'GAMING' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}> Gaming</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/saved-videos">
                    <NavLinkContainer
                      key="savedvideos"
                      bgColor={
                        activeTab === 'SAVED_VIDEOS' ? activeTabBg : 'none'
                      }
                      onClick={onClickChangeSavedTab}
                    >
                      <BiListPlus
                        size={20}
                        color={
                          activeTab === 'SAVED_VIDEOS' ? '#ff0b37' : '#909090'
                        }
                      />
                      <NavText color={textColor}> Saved Videos</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </NavOptions>
                <ContactInfo>
                  <ContactHeading color={textColor}>
                    {' '}
                    CONTACT US{' '}
                  </ContactHeading>
                  <ContactIcons>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIcons>
                  <ContactNote color={textColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactNote>
                </ContactInfo>
              </ResponsiveContainer>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar