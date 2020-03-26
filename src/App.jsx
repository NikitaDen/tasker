import React, {useEffect, useReducer, useState} from 'react';
import './assets/styles/styles.scss';
import TodoItem from "./components/TodoItem/TodoItem";
import {Context} from "./context";
import reducer, {
    addSubTodoAC,
    addTodoAC,
    deleteSubTodoAC,
    deleteTodoAC,
    editSubTodoAC,
    toggleSubTodoAC,
    toggleTodoAC
} from "./reducer";

const App = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const [state, dispatch] = useReducer(reducer, todos);
    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            dispatch(addTodoAC(todoTitle));
            setTodoTitle('');
        }
    };
    return (
        <Context.Provider value={{dispatch, addSubTodoAC, deleteTodoAC, toggleTodoAC, editSubTodoAC, toggleSubTodoAC, deleteSubTodoAC}}>
            <div className="App">
                <h3>Tasker</h3>
                <input className='main-input'
                       type="text"
                       placeholder='Введите вашу цель'
                       value={todoTitle}
                       onChange={event => setTodoTitle(event.target.value)}
                       autoFocus={true}
                       onKeyPress={addTodo}
                />
                {state.map(item => <TodoItem key={item.id} subTodo={item.subTodo} isDone={item.isDone} id={item.id}
                                             title={item.title}/>).reverse()}
            </div>
        </Context.Provider>
    );
};

export default App;
