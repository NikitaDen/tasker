import React, {useEffect, useState} from "react";
import pin from './../../../assets/images/pin.svg';
import edit from './../../../assets/images/edit.svg';
import done from './../../../assets/images/done.svg';

const TodoSubItem = (props) => {
    const [subTitle, setSubTitle] = useState(props.item.title || '');
    const [disabled, setDisabled] = useState(props.item.title && true);

    const editSubTodo = (event) => {
        if (event.key === 'Enter') {
            props.dispatch(props.editSubTodoAC(props.item.subId, props.id, {title: subTitle}));
            setDisabled(true);
        }
    };

    useEffect(() => props.toggleDone(true), [props.item.isDone]);

    return (
        <div className='todo-subitem'>
            <div className='todo-subitem__check'>
                {props.item.isDone
                    ? <img src={done} className='isDone' alt="done"/>
                    : <span className={'checkSpan'}/>}
                <input className='isDoneCheckbox' type="checkbox"
                       onChange={() => {
                           props.dispatch(props.toggleSubTodoAC(props.id, props.item.subId))
                       }}/>
            </div>

            {disabled
                ? <div className={'todo-subitem__text'}>
                <span
                      style={props.item.isDone ? {textDecoration: 'line-through'} : {}}>{props.item.title || 'Press edit'}</span>
                </div>
                : <input type="text"
                         value={subTitle}
                         onChange={event => setSubTitle(event.target.value)}
                         onKeyPress={editSubTodo}
                         onBlur={() => {
                             setDisabled(true)
                         }}
                         autoFocus={!disabled}
                         placeholder={'Input subtask...'}/>
            }

            <div className='buttons'>
                <img src={pin} alt='remove' className='button'
                     onClick={() => props.dispatch(props.deleteSubTodoAC(props.id, props.item.subId))}/>
                <img src={edit} alt='edit' className='button' onClick={() => {
                    setDisabled(false)
                }}/>
            </div>
        </div>
    )
};

export default TodoSubItem;