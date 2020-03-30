import React, {useContext} from "react";
import {Context} from "../../context";
import TodoSubItem from "./TodoSubItem/TodoSubItem";
import add from "../../assets/images/add.svg";
import remove from "../../assets/images/delete.svg";
import done from "../../assets/images/done.svg";

const TodoItem = (props) => {
    const {
        dispatch, addSubTodoAC, deleteTodoAC,
        toggleTodoAC, editSubTodoAC, toggleSubTodoAC, deleteSubTodoAC
    } = useContext(Context);

    const toggleDone = (isDone) => {
        if (props.subTodo.length === props.subTodo.filter(item => item.isDone === true).length) {
            dispatch(toggleTodoAC(props.id, isDone));
        } else {
            dispatch(toggleTodoAC(props.id, !isDone));
        }
    };

    return (
        <>
            <div className={props.isDone ? 'todo-item todo-item--done' : 'todo-item'}>
                <div className='loader'/>

                <div className='todo-item__check'>
                    {props.isDone
                        ? <img src={done} className='isDone isDone--todo' alt="done"/>
                        : <span className={'checkSpan checkSpan--todo'}/>
                    }
                    <input type="checkbox"
                           className={'isDoneCheckbox isDoneCheckbox--todo'}
                           checked={props.isDone}
                           onChange={() => dispatch(toggleTodoAC(props.id, !props.isDone))}/>
                </div>

                <span>{props.title}</span>
                <div className='date'>{props.date}</div>

                <div className='buttons'>
                    <img src={add}
                         className='button'
                         onClick={() => dispatch(addSubTodoAC(props.id, {title: '', subId: Date.now()}))}
                         alt='add'/>

                    <img src={remove} alt={'delete'} className='button'
                         onClick={() => dispatch(deleteTodoAC(props.id))}/>
                </div>
            </div>
            {props.subTodo.map(item => <TodoSubItem key={item.subId} {...props} toggleDone={toggleDone}
                                                    dispatch={dispatch}
                                                    toggleSubTodoAC={toggleSubTodoAC} deleteSubTodoAC={deleteSubTodoAC}
                                                    editSubTodoAC={editSubTodoAC}
                                                    item={item}/>).reverse()}
        </>
    )
};

export default TodoItem;