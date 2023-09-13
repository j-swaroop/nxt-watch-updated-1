import {formatDistanceToNow} from 'date-fns'

import {
  VideoItem,
  VideoImg,
  VideoTitle,
  ProfileImg,
  VideoDetails,
  VideoText,
  ChannelName,
  Views,
  NavLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const HomeVideosList = props => {
  const {details} = props

  const date = formatDistanceToNow(new Date(details.publishedAt))
  const updatedDate = date.split(' ')[1]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const textColor = isDark ? '#ffffff' : '#212121'

        return (
          <VideoItem>
            <NavLink to={`/videos/${details.id}`}>
              <VideoImg src={details.thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImg src={details.profileImageUrl} alt="channel logo" />
                <VideoText>
                  <VideoTitle color={textColor}> {details.title} </VideoTitle>
                  <ChannelName> {details.name} </ChannelName>
                  <Views>
                    {' '}
                    {details.viewCount} . {updatedDate} years ago{' '}
                  </Views>
                </VideoText>
              </VideoDetails>
            </NavLink>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideosList