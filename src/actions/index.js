export  const ADD = 'ADD';
export  const CLEAR = 'CLEAR';
export  const MARKED = 'MARKED';

export const listAdd = (text) => {
    return { type: ADD, payload: text };
}


export const mark  = id =>{
    return { type: MARKED, payload: id };
};

export const clear = () =>{
    return { type: CLEAR }
}