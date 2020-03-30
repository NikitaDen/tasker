import React, {useEffect, useReducer, useState} from 'react';
import './assets/styles/styles.scss';
import TodoItem from "./components/TodoItem/TodoItem";
import {Context} from "./context";
import reducer, {
    addSubTodoAC,
    addTodoAC,
    deleteSubTodoAC,
    deleteTodoAC,
    editSubTodoAC, filterAC,
    toggleSubTodoAC,
    toggleTodoAC
} from "./reducer";


const App = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || {filter: 'All', tasks: []};
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
        <Context.Provider value={{
            dispatch,
            filterAC,
            addSubTodoAC,
            deleteTodoAC,
            toggleTodoAC,
            editSubTodoAC,
            toggleSubTodoAC,
            deleteSubTodoAC
        }}>
            <div className="App">
                <h3>Tasker</h3>
                <input className='main-input'
                       type="text"
                       placeholder='Input your task...'
                       value={todoTitle}
                       onChange={event => setTodoTitle(event.target.value)}
                       autoFocus={true}
                       onKeyPress={addTodo}
                />
                <div>
                    <button className={`button button--filter ${state.filter === 'All' && 'active'}`}
                            onClick={() => dispatch(filterAC('All'))}>All
                    </button>
                    <button className={`button button--filter ${state.filter === 'Completed' && 'active'}`}
                            onClick={() => dispatch(filterAC('Completed'))}>Completed
                    </button>
                    <button className={`button button--filter ${state.filter === 'Active' && 'active'}`}
                            onClick={() => dispatch(filterAC('Active'))}>Active
                    </button>
                </div>
                {
                    (state.filter === 'All' && state.tasks.filter(() => true).map(item =>
                        <TodoItem key={item.id}
                                  subTodo={item.subTodo}
                                  isDone={item.isDone}
                                  date={item.date}
                                  id={item.id}
                                  title={item.title}/>).reverse()) ||
                    (state.filter === 'Completed' && state.tasks.filter(item => item.isDone === true).map(item =>
                        <TodoItem key={item.id} subTodo={item.subTodo} isDone={item.isDone} date={item.date}
                                  id={item.id}
                                  title={item.title}/>).reverse()) ||
                    (state.filter === 'Active' && state.tasks.filter(item => item.isDone === false).map(item =>
                        <TodoItem key={item.id} subTodo={item.subTodo} isDone={item.isDone} date={item.date}
                                  id={item.id}
                                  title={item.title}/>).reverse())

                }
            </div>
        </Context.Provider>
    );
};

export default App;
