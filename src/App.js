import './App.css';
import { Provider } from 'react-redux';
import store from './store/index'
import Count from './components/Count';
import Control from './components/Control';

function App() {

  // const reducer = (state={}, action) => {
  //   if(action.type === 'A'){
  //     return {
  //       ... state,
  //       A: ' I am A'
  //     }
  //   }
  //   if(action.type === 'b'){
  //     return {
  //       b: ' I am b'
  //     }
  //   }
  //   return state;
  // }

  // const store = createStore(reducer);

  // store.subscribe(() => {
  //   console.log(store.getState().b);

  // })

  // store.dispatch({type: 'b'})
  // store.dispatch({type: 'A'})
  // store.dispatch({type: 'b'})

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hellow</h1>
      </div>
      <Count />
      <Control />
    </Provider>
  );
}

export default App;
