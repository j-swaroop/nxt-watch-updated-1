import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideosList from '../HomeVideosList'
import FailureView from '../FailureView'
import {
  MainConatiner,
  HomeContainer,
  BannerBg,
  BannerRightPart,
  BannerLeftPart,
  BannerBtn,
  BannerImg,
  BannerText,
  BannerCloseBtn,
  LoaderContainer,
  SearchbarInput,
  Searchbar,
  SearchbarIcon,
  VideosList,
  NoSearchResults,
  NoSearchResultsImg,
  NoSearchResultsText,
  NoSearchResultsHeading,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
    isBannerClose: false
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
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

    if (videosList.length !== 0) {
      return (
        <VideosList>
          {videosList.map(video => (
            <HomeVideosList details={video} key={video.id} />
          ))}
        </VideosList>
      )
    }
    return (
      <NoSearchResults>
        <NoSearchResultsImg
          alt="no videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        />
        <NoSearchResultsHeading>
          {' '}
          No Search results found
        </NoSearchResultsHeading>
        <NoSearchResultsText>
          {' '}
          Try different key words or remove search filter{' '}
        </NoSearchResultsText>
        <RetryBtn onClick={this.onRetry}> Retry</RetryBtn>
      </NoSearchResults>
    )
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeVideos = () => {
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getHomeVideos()
  }

  onCloseBanner = () => {
    this.setState({isBannerClose: true})
  }

  render() {
    const {isBannerClose, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const bgColor = isDark ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <MainConatiner bgColor={bgColor}>
                <SideBar />
                <HomeContainer data-testid="home" bgColor={bgColor}>

                {isBannerClose? null: (
                  <BannerBg data-testid="banner">
                    <BannerLeftPart>
                      <BannerImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        {' '}
                        Buy Nxt Watch Premium prepaid plans with UPI{' '}
                      </BannerText>
                      <BannerBtn> GET IT NOW </BannerBtn>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseBtn
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </BannerCloseBtn>
                    </BannerRightPart>
                  </BannerBg>
                )}

                  <Searchbar bgColor={bgColor}>
                    <SearchbarInput
                      color={isDark ? '#ffffff' : '#000000'}
                      placeholder="Search"
                      type="search"
                      onKeyDown={this.onEnterSearchBar}
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                    />
                    <SearchbarIcon
                      onClick={this.getSearchResults}
                      data-testid="searchButton"
                      type='button'
                      bgColor={bgColor}
                    >
                      <AiOutlineSearch
                        color={isDark ? '#ffffff' : '#000000'}
                        size={20}
                      />
                    </SearchbarIcon>
                  </Searchbar>
                  {this.renderHomeVideos()}
                </HomeContainer>
              </MainConatiner>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home