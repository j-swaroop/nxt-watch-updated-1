import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import TrendingVideosList from '../TrendingVideosList'
import {
  TrendingContainer,
  MainConatiner,
  Heading,
  IconContainer,
  TopContainer,
  ContentContainer,
  LoaderContainer,
  TrendingVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        title: video.title,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <TrendingVideos>
        {videosList.map(video => (
          <TrendingVideosList key={video.id} details={video} />
        ))}
      </TrendingVideos>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
                <TrendingContainer bgColor={bgColor} data-testid="trending">
                  <TopContainer containerBg={containerBg}>
                    <IconContainer iconBg={iconBg}>
                      <HiFire color="#ff0b37" size={25} />
                    </IconContainer>
                    <Heading color={color}> Trending</Heading>
                  </TopContainer>
                  <ContentContainer>
                    {this.renderTrendingVideos()}
                  </ContentContainer>
                </TrendingContainer>
              </MainConatiner>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending