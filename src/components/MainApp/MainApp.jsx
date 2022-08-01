
import { useNavigate } from 'react-router-dom';
import slon from '../../slon.png';

export const MainApp = ()=>{

    const navigate = useNavigate();

    return (
        <div className="App">
        <h1 className="style">Study Imperium</h1>
        <div className="slon"><img src={slon} alt="slon"/></div>
        <div className="button-18" onClick={() => {navigate('/Main')}}>Play</div>
        </div>
      
    )
}