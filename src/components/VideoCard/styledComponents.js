import styled from 'styled-components'

export const VideoPlayer = styled.div`
  width: 100%;
  height: 300px;
  padding-top: 10vh;
  @media (min-width: 576px) {
    height: 500px;
  }
`
export const Details = styled.div``

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.color};
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Views = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  @media (max-width: 576px) {
    margin-top: 10px;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-right: 5px;
  color: ${props => props.saveColor};
  cursor: pointer;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-right: 5px;
  color: ${props => props.likeColor};
  cursor: pointer;
`

export const DislikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-right: 5px;
  color: ${props => props.dislikeColor};
  cursor: pointer;
`

export const HrLine = styled.hr`
  border-color: #64748b;
  border-width: 1px;
  border-style: solid;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Profile = styled.img`
  width: 50px;
  margin-right: 10px;
`

export const SubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Channel = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
`

export const Subscribers = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left:30px;
  margin-top:0;
`