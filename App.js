import './App.css';
import {DualCounter, CountButtons} from './useCallback';
import Context from './Context';
import Books from './components/Books';


function App() {
  return(
    <div className='App'>
      <Context>
        <Books />
      </Context>
    </div>
  )
}

export default App;