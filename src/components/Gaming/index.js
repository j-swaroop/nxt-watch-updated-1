import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GamingVideosList from '../GamingVideosList'
import {
  MainConatiner,
  GamingContainer,
  TopContainer,
  IconContainer,
  ContentContainer,
  LoaderContainer,
  Heading,
  GamingVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        title: video.title,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccesView = () => {
    const {videosList} = this.state

    return (
      <GamingVideos>
        {videosList.map(video => (
          <GamingVideosList key={video.id} details={video} />
        ))}
      </GamingVideos>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getGamingVideos()
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccesView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const bgColor = isDark ? '#0f0f0f' : ' #f9f9f9'
          const color = isDark ? '#ffffff' : '#000000'
          const iconBg = isDark ? '#000000' : '#cbd5e1'
          const containerBg = isDark ? '#212121' : '#cccccc'

          return (
            <>
              <Header />
              <MainConatiner bgColor={bgColor}>
                <SideBar />
                <GamingContainer bgColor={bgColor} data-testid="gaming">
                  <TopContainer containerBg={containerBg}>
                    <IconContainer iconBg={iconBg}>
                      <SiYoutubegaming color="#ff0b37" size={25} />
                    </IconContainer>
                    <Heading color={color}> Gaming</Heading>
                  </TopContainer>
                  <ContentContainer>
                    {this.renderGamingVideos()}
                  </ContentContainer>
                </GamingContainer>
              </MainConatiner>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming