import ThemeContext from '../../context/ThemeContext'
import {
  RetryBtn,
  FailureText,
  FailureHeading,
  FailureImg,
  FailureContainer,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const textColor = isDark ? '#ffffff' : '#000000'

        return (
          <FailureContainer>
            <FailureImg alt="failure view" src={failureImg} />
            <FailureHeading color={textColor}>
              {' '}
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText color={textColor}>
              {' '}
              We are having some trouble to complete your request. Please try again.
            </FailureText>
            <RetryBtn onClick={onClickRetry}> Retry </RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView