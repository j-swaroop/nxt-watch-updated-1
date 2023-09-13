// login.js
import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  ResponsiveContainer,
  FormContainer,
  WebSiteLogoImg,
  InputContainer,
  Label,
  Input,
  CheckBoxContainer,
  CheckBoxlabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

const webSiteLogoLightUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const webSiteLogoDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showError: true})
  }

  onSubmitForm = async event => {
    const {username, password} = this.state

    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderLoginForm = isDark => {
    const {username, password, showError, errorMsg, showPassword} = this.state
    const logoImg = isDark ? webSiteLogoDarkUrl : webSiteLogoLightUrl

    const inputType = showPassword ? 'type' : 'password'

    return (
      <FormContainer isDarkTheme={isDark} onSubmit={this.onSubmitForm}>
        <WebSiteLogoImg src={logoImg} alt="website logo" />
        <InputContainer>
          <Label 
            htmlFor='userNameInput' isDarkTheme={isDark}> USERNAME </Label>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            isDarkTheme={isDark}
            onChange={this.onChangeUserName}
            id="userNameInput"
          />
        </InputContainer>

        <InputContainer>
          <Label
            htmlFor="passwordInput" isDarkTheme={isDark}> PASSWORD </Label>
          <Input
            type={inputType}
            placeholder="Password"
            value={password}
            isDarkTheme={isDark}
            onChange={this.onChangePassword}
            id="passwordInput"/>
        </InputContainer>
        <CheckBoxContainer>
          <Input
            type="checkbox"
            id="checkbox"
            isDarkTheme={isDark}
            onClick={this.onClickShowPassword}
          />
          <CheckBoxlabel htmlFor="checkbox" isDarkTheme={isDark}>
            {' '}
            Show Password{' '}
          </CheckBoxlabel>
        </CheckBoxContainer>

        <LoginButton type="submit"> Login </LoginButton>
        {showError && <ErrorMsg> *{errorMsg}</ErrorMsg>}
      </FormContainer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <MainContainer isDarkTheme={isDark}>
              <ResponsiveContainer>
                {this.renderLoginForm(isDark)}
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm