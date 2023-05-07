import React, {useState} from 'react';
import './Introduce.css';
import Dropdown from '../../components/dropdown/Dropdown';
import {useNavigate} from 'react-router-dom';

const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate();
    const TOTAL_QUESTIONS = 10;

    console.log(difficultyChange, "difficultyChange")

    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }
    return (
        <div className='introduce'>
            <div className='introduce-container'>
                <img src='https://fedoraproject.org/w/uploads/d/d3/Fudcon_symbol.png' alt=''/>
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
                <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
            </div>
        </div>
    )
}

export default Introduce;