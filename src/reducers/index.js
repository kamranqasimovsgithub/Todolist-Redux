import { ADD, MARKED, CLEAR } from "../actions";

const INITIAL_STATE = {
    list: [
        { id: 1, heading: "Shopping", completed: false},
        { id: 2, heading: "Pay", completed: true},
        { id: 3, heading: "Read", completed: false}
    ]
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD:
            return {
                ...state, list: [
                    ...state.list, 
                    {
                        id: state.list.length + 1,
                        heading: action.payload,
                        completed: false
                    }
                ]
            }
        case MARKED:
            return {
                ...state, 
                list: state.list.map(item => item.id === action.payload 
                ? {...item, completed: !item.completed }
                : item )
            }
        case CLEAR:
            return {
                ...state, 
                list: state.list.filter(item => item.completed !== true )
            }
        default:
            return state;

    }

    return state;
}