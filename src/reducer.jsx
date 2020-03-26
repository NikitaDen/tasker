export default function (state, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    isDone: false,
                    subTodo: [],
                    progress: 0
                }
            ];
        case 'ADD_SUB_TODO':
            return state.map(item => {
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
            });
        case 'EDIT_SUB_TODO':
            return state.map(item => {
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
            });
        case 'TOGGLE_TODO':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        isDone: !item.isDone
                    }
                }
                return item;
            });
        case 'TOGGLE_SUB_TODO':
            return state.map(item => {
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
            });
        case 'DELETE':
            return state.filter(item => item.id !== action.id);
        case 'DELETE_SUB_TODO':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        subTodo: item.subTodo.filter(subItem => subItem.subId !== action.subId)
                    };
                }
                return item;
            });
        default:
            return state
    }
}