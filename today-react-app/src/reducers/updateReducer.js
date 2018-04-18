const INITIAL_STATE = {
  updates:[],
  update:null,
  isFetching: false,
  error: null,
  successMsg:null,
  
  newUpdate: null
}

export  const updateReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_NEW_UPDATE_REQUEST':
          return {
            ...currentState,
            updates:currentState.updates,
            update:null,
            isFetching: true,
            error: null,
            successMsg:null,
            newUpdate: action.update
          }

    case 'ADD_NEW_UPDATE_REQUEST_FAILED':
          return {
            ...currentState,
            updates:currentState.updates,
            update:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            newUpdate: null
          }

    case 'ADD_NEW_UPDATE_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            updates:[...currentState.updates, action.update],
            update:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            newUpdate: action.update
          }
        return nextState;

    default:
       return currentState;

  }
}
