import { useState } from 'react';
// import GetSolutionQueens from '../../lib/GetSolutionQueens';
import FunctionEigthQueens from '../../FunctionEigthQueens';
import './formQueens.css';

const FormQueens = () => {
    const [input, setInput] = useState('');
    FunctionEigthQueens(input)
    return(
        <>
            <form className='container-form'>
                <label>
                    <input type='number' className='container-form__input' value={input} onInput={e=> setInput(e.target.value)} />
                </label>
                <button className='container-form__button' onClick={FunctionEigthQueens}>Resolve</button>
            </form>
        </>
    )
}

export default FormQueens;