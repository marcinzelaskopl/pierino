import React, { Component } from 'react';
import '../App.css';
import video from '../video/main-video.mp4'
import Button from "./Button";

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
                        <h2>Serdecznie Witamy!</h2>
                        <p>Od ponad dwudziestu lat dbamy o to, aby dobry nastrój, miła atmosfera , różnorodna oferta kulinarna i przyjazne otoczenie towarzyszyły Wam w „Pierino".</p>
                        <p> "Żyjemy po to aby jeść czy jemy po to aby żyć?
                            Jedno jest pewne – ważne jest co i gdzie jadamy." - J.C</p>
                        <Button/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main