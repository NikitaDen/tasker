import React, {useState} from "react";
import pin from './../../../assets/images/pin.svg';
import edit from './../../../assets/images/edit.svg';
import done from './../../../assets/images/done.svg';

const TodoSubItem = (props) => {
    const [subTitle, setSubTitle] = useState('');
    const [disabled, setDisabled] = useState(false);

    const editSubTodo = (event) => {
        if (event.key === 'Enter') {
            props.dispatch({
                type: 'EDIT_SUB_TODO',
                subId: props.item.subId,
                id: props.id,
                payload: {title: subTitle}
            });
            setDisabled(true);
        }
    };

    return (
        <div className='todo-subitem'>
            <div className='todo-subitem__check'>
                {props.item.isDone ? <img src={done} className='isDone' alt="done"/> : <span className={'checkSpan'}/>}
                <input className='isDoneCheckbox' type="checkbox" onChange={() => props.dispatch({
                    type: 'TOGGLE_SUB_TODO',
                    id: props.id,
                    subId: props.item.subId
                })}/>
            </div>


            {disabled ? <span style={props.item.isDone ? {textDecoration: 'line-through'} : {}}>{props.item.title || 'Press edit'}</span>
                : <input type="text"
                         value={subTitle}
                         onChange={event => setSubTitle(event.target.value)}
                         onKeyPress={editSubTodo}
                         onBlur={() => {
                             setDisabled(true)
                         }}
                         autoFocus={true}
                         placeholder={'Введите подцель'}/>
            }
            <div className='buttons'>
                <img src={edit} alt='edit' className='button' onClick={() => {
                    setDisabled(false)
                }}/>
                <img src={pin} alt='remove' className='button' onClick={() => props.dispatch({
                    type: 'DELETE_SUB_TODO',
                    id: props.id,
                    subId: props.item.subId
                })}/>
            </div>
        </div>
    )
};

export default TodoSubItem;