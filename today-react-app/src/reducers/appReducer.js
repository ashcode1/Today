const INITIAL_STATE = {
  showAddUpdate: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_UPDATE':
          return {
            ...currentState,showAddUpdate: !currentState.showAddUpdate
          }

    default:
       return currentState;

  }
}

export default appReducer;
