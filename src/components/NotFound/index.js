import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundText,
  NotFoundHeading,
  NotFoundImg,
  NotFoundContainer,
  MainContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const bgColor = isDark ? '#000000' : '#ffffff'
      const color = isDark ? '#ffffff' : '#000000'
      return (
        <>
          <Header />
          <MainContainer>
            <SideBar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading color={color}> Page Not Found </NotFoundHeading>
              <NotFoundText color={color}>
                {' '}
                We are sorry, the page you requested could not be found.{' '}
              </NotFoundText>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound