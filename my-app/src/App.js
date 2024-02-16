import { useState } from 'react';
import Todo from './components/todo/todo';
import Counter from './components/counter/counter';
import logo from './logo.svg';
import './App.css';

function App() {
  let [state, setState] = useState('');

  function changeTaskPosation (value){
    return setState(value)
  };
  function getBack(){
    return setState('')
  }
  console.log(state)
  return (
    <div className="App">
      {state === 'todo' ? <Todo back={getBack}/> 
      : state === 'counter' ? <Counter back={getBack}/> :
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={(e) => changeTaskPosation(e.target.value)} value={'todo'} className='toDoOpenButton'>ToDo</button>
        <button onClick={(e) => changeTaskPosation(e.target.value)} value={'counter'}className='counterOpenButton'>Counter</button>
        click on the task you want      
        </header>
}
    </div>
  );
}

export default App;
