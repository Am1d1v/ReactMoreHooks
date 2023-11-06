import { useReducer } from 'react';
import './App.css';


const limitRbg = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)
const step = 51;

const reducer = (state, action) => {
    switch(action.type){
      case "INCREMENT_R":
        return{
          ...state,
          r: limitRbg(state.r + step)
        };
      case "DECREMENT_R":
        return{
          ...state,
          r: limitRbg(state.r - step)
        };
      case "INCREMENT_G":
        return{
          ...state,
          r: limitRbg(state.g + step)
        };
      case "DECREMENT_G":
        return{
          ...state,
          r: limitRbg(state.g - step)
        };   
      case "INCREMENT_B":
        return{
          ...state,
          r: limitRbg(state.b + step)
        };
      case "DECREMENT_B":
        return{
          ...state,
          r: limitRbg(state.b - step)
        }; 

    }
}


function App() {

  const [{r, g, b}, dispatch] =  useReducer(reducer, {r: 0, g: 102, b: 204});

  return(
    <div className='App'>

      <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>Color Title</h1>
      <div>
        <span> </span>
        <button onClick={''}>+</button>
        <button onClick={''}>-</button>
      </div>
      <div>
        <span> </span>
        <button onClick={''}>+</button>
        <button onClick={''}>-</button>
      </div>
      <div>
        <span> </span>
        <button onClick={''}>+</button>
        <button onClick={''}>-</button>
      </div>

    </div>
  )
}

export default App;