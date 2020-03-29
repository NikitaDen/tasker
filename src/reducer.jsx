const ADD = 'ADD';
const ADD_SUB_TODO = 'ADD_SUB_TODO';
const DELETE = 'DELETE';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_SUB_TODO = 'EDIT_SUB_TODO';
const TOGGLE_SUB_TODO = 'TOGGLE_SUB_TODO';
const DELETE_SUB_TODO = 'DELETE_SUB_TODO';
const FILTER = 'FILTER';

export default function (state, action) {
    switch (action.type) {
        case FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        case ADD:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        date: `${new Date().toLocaleDateString()}`,
                        title: action.payload,
                        isDone: false,
                        subTodo: [],
                        progress: 0
                    }]
            };
        case ADD_SUB_TODO:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            subTodo: [
                                ...item.subTodo,
                                {
                                    ...action.payload,
                                    subId: Date.now(),
                                    isDone: false
                                }
                            ]
                        }
                    }
                    return item;
                })
            };
        case TOGGLE_TODO:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        isDone: !item.isDone
                    }
                }
                return item;
            })};
        case TOGGLE_SUB_TODO:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        subTodo:
                            item.subTodo.map(subItem => {
                                if (subItem.subId === action.subId) {
                                    return {
                                        ...subItem,
                                        isDone: !subItem.isDone
                                    }
                                }
                                return subItem;
                            })
                    };
                }
                return item;
            })};
        case EDIT_SUB_TODO:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        subTodo:
                            item.subTodo.map(subItem => {
                                if (subItem.subId === action.subId) {
                                    return {
                                        ...subItem,
                                        ...action.payload
                                    }
                                }
                                return subItem;
                            })
                    };
                }
                return item;
            })};
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.id)};
        case DELETE_SUB_TODO:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        subTodo: item.subTodo.filter(subItem => subItem.subId !== action.subId)
                    };
                }
                return item;
            })};
        default:
            return state
    }
}

export const filterAC = (filter) => ({type: FILTER, filter});

export const addTodoAC = (todoTitle) => ({type: ADD, payload: todoTitle});
export const addSubTodoAC = (id, payload) => ({type: ADD_SUB_TODO, id, payload});

export const toggleTodoAC = (id) => ({type: TOGGLE_TODO, id});
export const toggleSubTodoAC = (id, subId) => ({type: TOGGLE_SUB_TODO, subId, id});

export const editSubTodoAC = (subId, id, payload) => ({type: EDIT_SUB_TODO, subId, id, payload});

export const deleteTodoAC = (id) => ({type: DELETE, id});
export const deleteSubTodoAC = (id, subId) => ({type: DELETE_SUB_TODO, subId, id});