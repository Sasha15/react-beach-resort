import React from 'react';
import PlaylistHeader from '../PlayListHeader';
import PlayListItems from './PlayListItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../../styles/StyledPlaylist';


const PlayList = ({videos, active, nightModeCallback, nightMode}) => (
    <StyledPlaylist>
        <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
        <PlaylistHeader active={active} total={videos.length}/>
        <PlayListItems videos={videos} active={active}/>
    </StyledPlaylist>
)
export default PlayList;