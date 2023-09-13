import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideosList from '../TrendingVideosList'

import {
  SavedContainer,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosimage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
  MainConatiner,
  TopContainer,
  IconContainer,
  Heading,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDark ? '#f9f9f9' : '#231f20'
      const headingColor = isDark ? '#f1f5f9' : '#1e293b'
      const noteColor = isDark ? '#f1f5f9' : '#475569'
      const iconBg = isDark ? '#000000' : '#cbd5e1'
      const containerBg = isDark ? '#212121' : '#cccccc'

      return (
        <>
          <Header />
          <MainConatiner>
            <SideBar />
            <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
              {savedVideos.length > 0 ? (
                <>
                  <TopContainer containerBg={containerBg}>
                    <IconContainer iconBg={iconBg}>
                      <CgPlayListAdd size={35} color="#ff0000" />
                    </IconContainer>
                    <Heading color={textColor}> Saved Videos </Heading>
                  </TopContainer>
                  <SavedVideoList>
                    {savedVideos.map(video => (
                      <TrendingVideosList key={video.id} details={video} />
                    ))}
                  </SavedVideoList>
                </>
              ) : (
                <NoSavedVideosView>
                  <NoSavedVideosimage
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  />
                  <NoSavedVideosHeading headingColor={headingColor}>
                    {' '}
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosNote noteColor={noteColor}>
                    {' '}
                    You can save your videos while watching them{' '}
                  </NoSavedVideosNote>
                </NoSavedVideosView>
              )}
            </SavedContainer>
          </MainConatiner>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos