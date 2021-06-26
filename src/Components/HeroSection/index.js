import React, { useState } from 'react';
import Video from '../../Videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    HeroContent,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        Welcome to my World!
                    </HeroH1>
                    <HeroP>
                        Wanna hop in? Sign up now!
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button 
                            to="signup" 
                            onMouseEnter = {onHover} 
                            onMouseLeave = {onHover}
                            primary = 'true'
                            dark = 'true'
                        >
                            Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>

        </>
    )
}

export default HeroSection
