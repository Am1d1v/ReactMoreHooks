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
          g: limitRbg(state.g + step)
        };
      case "DECREMENT_G":
        return{
          ...state,
          g: limitRbg(state.g - step)
        };   
      case "INCREMENT_B":
        return{
          ...state,
          b: limitRbg(state.b + step)
        };
      case "DECREMENT_B":
        return{
          ...state,
          b: limitRbg(state.b - step)
        }; 
      default:
        return state  

    }
}


function App() {

  const [{r, g, b}, dispatch] =  useReducer(reducer, {r: 0, g: 0, b: 0});

  return(
    <div className='App'>

      <h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>Color Title</h1>
      <div>
        <span> </span>
        <button onClick={() => dispatch({type: "INCREMENT_R"})}>RED: +</button>
        <button onClick={() => dispatch({type: "DECREMENT_R"})}>RED -</button>
      </div>
      <div>
        <span> </span>
        <button onClick={() => dispatch({type: "INCREMENT_G"})}>GREEN: +</button>
        <button onClick={() => dispatch({type: "DECREMENT_G"})}>GREEN: -</button>
      </div>
      <div>
        <span> </span>
        <button onClick={() => dispatch({type: "INCREMENT_B"})}>BLUE: +</button>
        <button onClick={() => dispatch({type: "DECREMENT_B"})}>BLUE: -</button>
      </div>
      
      {console.log({r, g, b})}

    </div>
  )
}

export default App;