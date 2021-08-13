import GetSolutionQueens from '../../lib/GetSolutionQueens'
import './resultQueens.css';

const ResultQueens = () => {
    return(
        <div className="container-Text">
            <h3>Results</h3>
            <GetSolutionQueens />
        </div>
    )
}

export default ResultQueens;