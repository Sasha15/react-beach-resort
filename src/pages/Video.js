import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import WbnPlayer from '../components/containers/WbnPlayer';
import GlobalStyle from '../styles/GlobalStyle';


class Video extends Component { 
   
    render () {
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="Our rooms">
                        <Link to="/" className="btn-primary">Return home</Link>
                    </Banner>
                </Hero>
                <GlobalStyle />
                <WbnPlayer {...this.props} />
            </>
        )
    }
}

export default Video;