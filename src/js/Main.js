import React, { Component } from 'react';
import '../App.css';
import video from '../video/main-video.mp4'

class Main extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 holder'}>
                        <video className={'video-background'} loop autoPlay muted>
                            <source src={video} type={'video/mp4'}/>
                        </video>
                        <h1>Restauracja Pierino</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main