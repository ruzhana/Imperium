import './sabaq.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Sabaq = () => {
    const navigate = useNavigate();
    return (
    <div className="Apppe">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div onClick={() => {navigate('/Main')}}><h1 className="cve"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg></h1></div>
    <div><h1 className="stylees">Choose your level</h1></div>
    <div></div>
    </div>
    <div className='gr'>
    <div className="grid-container">
            <div className="grid-item" onClick={() => {navigate('/First')}}>Beginner</div>
            <div className="grid-item">Elementary</div>
            <div className="grid-item">Pre-Intermediate</div>  
            <div className="grid-item">Intermediate</div>
            <div className="grid-item">Upper-Intermediate</div>
            <div className="grid-item">Advanced</div>   
        </div>
        </div>
    </div>
      );
}
export default Sabaq;