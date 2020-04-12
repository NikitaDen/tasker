import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../context";
import TodoSubItem from "./TodoSubItem/TodoSubItem";
import add from "../../assets/images/add.svg";
import remove from "../../assets/images/delete.svg";
import done from "../../assets/images/done.svg";
import see from "../../assets/images/show.svg";
import hide from "../../assets/images/hide.svg";
import edit from "../../assets/images/edit.svg";
import Button from "../Button/Button";

const TodoItem = (props) => {
    const {
        dispatch, addSubTodoAC, deleteTodoAC,
        toggleTodoAC, editSubTodoAC, editTodoAC, toggleSubTodoAC, deleteSubTodoAC
    } = useContext(Context);
    const [show, setShow] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);

    const toggleDone = (isDone) => {
        if (props.subTodo.length === props.subTodo.filter(item => item.isDone === true).length) {
            dispatch(toggleTodoAC(props.id, isDone));
        } else {
            dispatch(toggleTodoAC(props.id, !isDone));
        }
    };

    useEffect(() => {
        dispatch(editTodoAC(props.id, newTitle))
    }, [newTitle]);

    const changeTitle = (e) => {
        setNewTitle(e.target.value);
        dispatch(editTodoAC(props.id, newTitle))
    };

    const setNewTitleToTask = (e) => {
        if (e.key === 'Enter') {
            setEditMode(false)
        }
    };

    return (
        <>
            <div className={props.isDone ? 'todo-item todo-item--done' : 'todo-item'}>
                <div className='complete-indicator'/>

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

                {editMode ? <input type="text" autoFocus={editMode} value={newTitle} onChange={changeTitle} onBlur={() => setEditMode(false)}
                                   onKeyPress={setNewTitleToTask}/> :
                    <span style={newTitle ? null : {color: 'gray'} }>{newTitle ? newTitle : 'Title is Empty'}</span>}

                <div className='date'>{props.date}</div>

                <div className='buttons'>
                    <Button src={add} alt={'add'} className={'button'} onClickFunc={() => dispatch(addSubTodoAC(props.id, {title: '', subId: Date.now()}))}/>
                    <Button src={edit} alt={'edit'} className={'button'} onClickFunc={() => {setEditMode(!editMode)}}/>
                    <Button src={show ? hide : see} className={'button'} alt={'hide'} onClickFunc={() => setShow(!show)}/>
                    <Button src={remove} alt={'delete'} className={'button'} onClickFunc={() => dispatch(deleteTodoAC(props.id))}/>
                </div>
            </div>
            {show ? props.subTodo.map(item => <TodoSubItem key={item.subId} {...props} toggleDone={toggleDone}
                                                           dispatch={dispatch}
                                                           toggleSubTodoAC={toggleSubTodoAC}
                                                           deleteSubTodoAC={deleteSubTodoAC}
                                                           editSubTodoAC={editSubTodoAC}
                                                           item={item}/>).reverse() : null}
        </>
    )
};

export default TodoItem;