import styled from 'styled-components'

export const MainConatiner = styled.div`
    display:flex;
    align-items:center;
    height:100vh
    background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 82vw;
  width: 90%;
  margin-left: 190px;
  padding-top: 10vh;
  @media (max-width: 576px) {
    width: 100vw;
    margin-left: 0;
  }
`
export const BannerBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  align-items:center;
  justify-content: space-between;
  padding: 25px;
  display: ${props => props.display};
`
export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:flex-start;
  height: 100%;
  margin-left:auto;
  margin-bottom:auto;
`
export const BannerImg = styled.img`
  width: 80px;
  height: 30px;
`

export const BannerBtn = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
`
export const BannerCloseBtn = styled.button`
  background: none;
  border: none;
  margin-bottom:auto;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const Searchbar = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-centent: space-between;
  height: 40px;
  border: 1px solid #64748b;
  border-radius: 3px;
  margin-left: 20px;
  margin-top: 10px;
  background-color: ${props => props.bgColor};
  @media (max-width: 576px) {
    width: 90%;
    margin-left: 15px;
  }
`

export const SearchbarInput = styled.input`
  height: 38px;
  background-color: transparent;
  outline: none;
  border: none;
  width: 92%;
  padding-left: 15px;
  color: ${props => props.color};
`
export const SearchbarIcon = styled.button`
  width: 10%
  display:flex;
  border:none;
  height: 38px;
  padding-left: 8px;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  margin-left: auto;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  @media (max-width: 576px) {
    margin-left: 15px;
  }
`
export const NoSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const NoSearchResultsImg = styled.img`
  width: 80%;
  max-width: 300px;
`
export const NoSearchResultsHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
export const NoSearchResultsText = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
`

export const RetryBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  height: 40px;
  width: 80px;
  background-color: #4f46e5;
  border: none;
  border-radius: 8px;
`