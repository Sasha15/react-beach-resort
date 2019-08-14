import React from 'react';
import PlayListItem from '../PlayListItem';
import StyledPlaylistitems from '../../styles/StyledPlaylistitems';
import withLink from '../hoc/withLink';

const PlayListItemWithLink = withLink(PlayListItem);

const PlayListItems = ({videos, active}) => (
    <StyledPlaylistitems>
        {videos.map(video => (
            <PlayListItemWithLink
                key={video.id} 
                video={video} 
                active={video.id ===active.id ? true : false}
                played={video.played}
            />  
        ))}
    </StyledPlaylistitems>
)
export default PlayListItems;