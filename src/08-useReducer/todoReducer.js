export const todoReducer = (initialState = [], action)=>{
  
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
            // throw new Error('Action.type = ABC no esta implementada');
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
           
        default:
            return initialState;
    }

}