import { useState, useMemo, useCallback } from 'react';
import Todo from './components/todo/todo';
import Todo2 from './components/todo_useReducer/todousereducer';
import Counter from './components/counter/counter';

import { todoType } from './utils/constants';

import logo from './logo.svg';
import './App.css';

function App() {
  const [type, setType] = useState(null);

  const isTodo = useMemo(() => type === todoType.todo, [type]);
  const isCounter = useMemo(() => type === todoType.counter, [type]);

  const changeTaskPosation = useCallback((event) => {
    setType(event.target.value);
  }, [setType]);

  const getBack = useCallback(() => {
    setType(null);
  }, [setType]);

  return (
    <div className="App">
      {isTodo && <Todo back={getBack}/>}
      {isCounter && <Counter back={getBack}/>}
      {!isTodo && !isCounter && (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={changeTaskPosation}
            value={todoType.todo}
            className='toDoOpenButton'
          >
            ToDo
          </button>
          <button
            onClick={changeTaskPosation}
            value={todoType.counter}
            className='counterOpenButton'
          >
              Counter
          </button>
          click on the task you want      
        </div>
      )}
    </div>
  )
}

export default App;
