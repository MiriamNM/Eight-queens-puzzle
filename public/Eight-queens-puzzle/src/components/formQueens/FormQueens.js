import GetSolutionQueens from '../../lib/GetSolutionQueens'
import './formQueens.css';

const FormQueens = () => {
    return(
        <>
            <form className='container-form'>
                <label>
                    <input type='number' className='container-form__input' />
                </label>
                <button className='container-form__button' onClick={GetSolutionQueens}>Resolve</button>
            </form>
        </>
    )
}

export default FormQueens;