import './main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import slon from './slon.png';
import cubook from './cubok.png';
import sabaq from './sabaq.png';
import nft from './nft.png';
import milk from './milk.png';
import food from './food.png';
import music from './music.png';
import audio from './audio.mp3'
import nomusic from './nomusic.png';
import { useNavigate } from 'react-router-dom';

const newAudio = new Audio(audio)

const Main = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(nomusic)

    const mute = () => {
        if (item === nomusic) {
            newAudio.play();
            setItem(music);
        } else {
            newAudio.pause();
            setItem(nomusic);
        }
    }

    const [count, setCount] = useState(0);


    return (
        <div className="Appp">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div onClick={() => { navigate('/') }}><h1 className="cv"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg></h1></div>
                <div><h1 className="stylee">Study for pleasure</h1></div>
                <div></div>
            </div>

            <div className="container-fill">
                <div className="row">
                    <div className="col">
                        <div className="row" onClick={() => { navigate('/Leader') }}>
                            <div><img className='cubook' src={cubook} alt="slon" /></div>
                        </div>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }} onClick={() => { navigate('/Sabaq') }}>
                            <img className='sabaq' src={sabaq} alt="slon" />
                        </div>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='nft' src={nft} alt="slon" />
                        </div>

                    </div>
                    <div className="col-8">
                        <div className="slon"><img src={slon} alt="slon" /></div>
                        <div className="count"><div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            {localStorage.getItem('Totalscore') || 0}
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='milk' src={milk} alt="slon" />
                        </div>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='food' src={food} alt="slon" />
                        </div>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='music' src={item} alt="slon" onClick={mute} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Main;