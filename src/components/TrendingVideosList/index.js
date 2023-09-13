import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  VideoDetails,
  VideoImg,
  NavLink,
  VideoTitle,
  Views,
  ChannelName,
  Profile,
  Details,
  Container,
} from './styledComponents'

const TrendingVideosList = props => {
  const {details} = props

  const date = formatDistanceToNow(new Date(details.publishedAt))
  const updatedDate = date.split(' ')[1]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const color = isDark ? '#ffffff' : '#000000'

        return (
          <VideoItem>
            <NavLink to={`videos/${details.id}`}>
              <VideoImg src={details.thumbnailUrl} alt="video thumbnail" />
              <Details>
                <Profile src={details.profileImageUrl} alt="channel logo"  />
                <VideoDetails>
                  <VideoTitle color={color}> {details.title}</VideoTitle>
                  <Container>
                    <ChannelName> {details.name} </ChannelName>
                    <Views>
                      {' '}
                      {details.viewCount} views . {updatedDate} years ago{' '}
                    </Views>
                  </Container>
                </VideoDetails>
              </Details>
            </NavLink>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideosList
