import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  Title,
  Details,
  VideoPlayer,
  ViewsAndLikesContainer,
  Views,
  LikeButton,
  DislikeButton,
  Button,
  LikeDislikeContainer,
  HrLine,
  ProfileContainer,
  Subscribers,
  Channel,
  SubscribersContainer,
  Profile,
  Description,
} from './styledComponents'

const VideoCard = props => {
  const {
    details,
    likeButton,
    dislikeButton,
    onClickLike,
    onClickDislike,
  } = props

  const date = formatDistanceToNow(new Date(details.publishedAt))
  const updatedDate = date.split(' ')[1]

  const clickLike = () => {
    onClickLike()
  }

  const clickDislike = () => {
    onClickDislike()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, addVideo, savedVideos} = value

        const color = isDark ? '#ffffff' : '#000000'

        const likeColor = likeButton ? '#2563eb' : '#64748b'
        const dislikeColor = dislikeButton ? '#2563eb' : '#64748b'

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === details.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const textColor = isDark ? '#64748b' : '#64748b'
        const saveColor = isSaved ? '#2563eb' : textColor
        const saveText = isSaved ? 'Saved' : 'Save'

        const clickSave = () => {
          addVideo(details)
        }

        return (
          <>
            <VideoPlayer>
              <ReactPlayer
                height="100%"
                width="100%"
                url={details.videoUrl}
                controls
              />
            </VideoPlayer>
            <Details>
              <Title color={color}> {details.title} </Title>
              <ViewsAndLikesContainer>
                <Views>
                  {' '}
                  {details.viewCount} views . {updatedDate} years ago{' '}
                </Views>
                <LikeDislikeContainer>
                  <LikeButton likeColor={likeColor} onClick={clickLike}>
                    <BiLike size={20} /> Like
                  </LikeButton>
                  <DislikeButton
                    dislikeColor={dislikeColor}
                    onClick={clickDislike}
                  >
                    <BiDislike size={20} /> Dislike
                  </DislikeButton>
                  <Button saveColor={saveColor} onClick={clickSave}>
                    <BiListPlus size={20} /> {saveText}
                  </Button>
                </LikeDislikeContainer>
              </ViewsAndLikesContainer>
              <HrLine />

              <ProfileContainer>
                <Profile src={details.profileImageUrl} alt="channel logo" />
                <SubscribersContainer>
                  <Channel color={color}> {details.name}</Channel>
                  <Subscribers>
                    {' '}
                    {details.subscriberCount} subscribers{' '}
                  </Subscribers>
                </SubscribersContainer>
              </ProfileContainer>
              <Description color={color}> {details.description} </Description>
            </Details>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard