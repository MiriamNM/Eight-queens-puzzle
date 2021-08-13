import './App.css';

import FormQueens from './components/formQueens/FormQueens';
import ResultQueens from './components/resultQueens/ResultQueens';
import TextQueens from './components/textQueens/TextQueens';

function App() {
  return (
    <div className='container-app'>
      <TextQueens />
      <FormQueens />
      <ResultQueens />
    </div>
  );
}

export default App;
