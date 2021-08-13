import './formQueens.css';

const FormQueens = () => {
    return(
        <>
            <form className='container-form'>
                <label>
                    <input type='number' className='container-form__input' />
                </label>
                <button className='container-form__button'>Resolve</button>
            </form>
        </>
    )
}

export default FormQueens;