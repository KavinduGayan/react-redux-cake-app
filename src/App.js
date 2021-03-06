import './App.css';
import Store from './redux/store'
import { Provider } from 'react-redux'

import CakeContainer  from "./component/cakeContainer";
import SandwitchContainer from "./component/sandwitch/sandwitchContainer";
import H1Title from "./component/h1Title";

function App() {
  return (
    <Provider store={Store}>
      <div className='App'>
        <H1Title title='CAKE SHOP' />
        <CakeContainer />
       <SandwitchContainer />
      </div>
    </Provider>
  );
}

export default App;
