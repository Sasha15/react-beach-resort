import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import VideoContainer from '../VideoContainer';
import PlayList from './PlayList';
import StyledWbnPlayer from '../../styles/StyledWbnPlayer';

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
}
const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}

const WbnPlayer = props => {
    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`));

    const [ state, setState ] = useState({
        videos: savedState ? savedState.videos : videos.playlist,
        activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
        nightMode: savedState ? savedState.nightMode : true,
        playlistId: savedState ? savedState.playlistId : videos.playlistId,
        autoplay: false
    })

    useEffect (() => {
        localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}))
    }, [state]);

    useEffect (()=> {
        const videoId = props.match.params.activeVideo;
        if(videoId !== undefined) {
            const newActiveVideo = state.videos.findIndex(
                video => video.id === videoId
            )
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: props.location.autoplay
            }))
        } else {
            props.history.push({
                pathname: `/video/${state.activeVideo.id}`,
                autoplay: false,
            })
        }
    }, [props.history,
        props.location.autoplay,
        props.match.params.activeVideo,
        state.activeVideo.id,
        state.videos]) 


    const nightModeCallback = () => {
        setState(prevState => ({
            ...prevState, nightMode: !prevState.nightMode
        }))
    }

    const endCallback = () => {
        const videoId = props.match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(
            video => video.id === videoId
        )

        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;
        props.history.push({
            pathname: `/video/${state.videos[nextVideo].id}`,
            autoplay: false
        })
    }

    const progressCallback = e => {
        if(e.playedSeconds > 10 && e.playedSeconds < 11) {
            setState(prevState => ({
                ...prevState, 
                videos: state.videos.map(element => {
                    return element.id === state.activeVideo.id ? {...element, played: true} : element
                })
            }))
        } 
    }
    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? 
                (
                    <StyledWbnPlayer>
                        <VideoContainer active={state.activeVideo} autoplay={state.autoplay} endCallback={endCallback} progressCallback={progressCallback} />
                        <PlayList videos={state.videos} active={state.activeVideo} nightModeCallback={nightModeCallback} nightMode={state.nightMode}/>
                    </StyledWbnPlayer>
                ) : null 
            }
            
        </ThemeProvider>
    )
}
export default WbnPlayer;
