import ThemeContext from '../../context/ThemeContext'
import {
  GamingVideoContainer,
  GameImg,
  GameTitle,
  NavLink,
  GameViews,
} from './styledComponents'

const GamingVideosList = props => {
  const {details} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const color = isDark ? '#ffffff' : '#000000'

        return (
          <GamingVideoContainer>
            <NavLink to={`videos/${details.id}`}>
              <GameImg src={details.thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={color}> {details.title} </GameTitle>
              <GameViews> {details.viewCount} Watching Worldwide </GameViews>
            </NavLink>
          </GamingVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideosList