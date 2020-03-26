import React, {useContext} from "react";
import {Context} from "../../context";
import TodoSubItem from "./TodoSubItem/TodoSubItem";
import add from "../../assets/images/add.svg";
import remove from "../../assets/images/delete.svg";
import done from "../../assets/images/done.svg";

const TodoItem = (props) => {
    const {dispatch} = useContext(Context);
    return (
        <>
            <div className={props.isDone ? 'todo-item todo-item--done' : 'todo-item'}>
                <div>
                    {props.isDone ? <img src={done} className='isDone isDone--todo' alt="done"/> : <span className={'checkSpan checkSpan--todo'}/>}
                    <input type="checkbox"
                           className={'isDoneCheckbox isDoneCheckbox--todo'}
                           checked={props.isDone}
                           onChange={() => dispatch({
                               type: 'TOGGLE_TODO',
                               id: props.id
                           })}/>
                </div>
                <span>{props.title}</span>
                <div className='buttons'>
                    <img src={add} className='button' onClick={() => dispatch({
                        type: 'ADD_SUB_TODO',
                        id: props.id,
                        payload: {title: '', subId: Date.now()}
                    })} alt='add'/>

                    <img src={remove} alt={'delete'} className='button' onClick={() => dispatch({
                        type: 'DELETE',
                        id: props.id
                    })}/>
                </div>
            </div>
            {props.subTodo.map(item => <TodoSubItem key={item.subId} {...props} dispatch={dispatch} item={item}/>).reverse()}
        </>
    )
};

export default TodoItem;