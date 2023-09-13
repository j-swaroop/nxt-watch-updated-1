// login.styled
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1140px;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const FormContainer = styled.form`
  width: 95%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${props => (props.isDarkTheme ? '' : '0 1px 10px 0 #b3b3b3')};
  padding: 20px;
  padding-bottom: 35px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`

export const WebSiteLogoImg = styled.img`
  width: 150px;
  margin-bottom: 25px;
  margin-top: 20px;
  @media (max-width: 576px) {
    width: 100px;
    margin-bottom: 15px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  margin-top: 20px;
  width: 90%;
`

export const Label = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`
export const Input = styled.input`
  height: 38px;
  outline: none;
  border-color: #94a3b8;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  padding-left: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  width: 92%;
  margin: auto;
  margin-top: 0;
`
export const CheckBoxlabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 13px;
  margin-left: 3px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  color: #ffffff;
  width: 90%;
  border-radius: 5px;
  border-width: 0;
  height: 38px;
  margin-top: 10px;
  font-size: 14px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  margin-bottom: 10px;
  align-self: flex-start;
  width: 91%;
  margin: auto;
  margin-top: 3px;
`