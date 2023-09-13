import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const FailureImg = styled.img`
  width: 80%;
  max-width: 300px;
`

export const FailureHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
`

export const FailureText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
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