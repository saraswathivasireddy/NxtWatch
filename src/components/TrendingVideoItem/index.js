import {
  VideoItemList,
  ThumbnailImage,
  ProfileImage,
  ThumbnailContent,
  ThumbnailTitle,
  Name,
  ThumbnailViewsYearsContainer,
} from './styledComponents'
import {BsDot} from 'react-icons/bs'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import NxtWatchContext from '../../NxtWatchContext'

const TrendingVideoItem = props => {
  const {eachVideo} = props
  const {channel} = eachVideo
  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemList>
            <ThumbnailImage src={eachVideo.thumbnailUrl} />
            <ThumbnailContent>
              <div>
                <ThumbnailTitle isDarkTheme={isDarkTheme}>
                  {eachVideo.title}
                </ThumbnailTitle>
                <Name>{updatedChannel.name}</Name>
                <ThumbnailViewsYearsContainer>
                  <p>{eachVideo.viewCount} views</p>
                  <BsDot />
                  <TimeAgo date={eachVideo.publishedAt} />
                </ThumbnailViewsYearsContainer>
              </div>
            </ThumbnailContent>
          </VideoItemList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
