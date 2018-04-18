// ./react-redux-today-app/src/reducers/updateReducer.js
const INITIAL_STATE = {
  updates:[],
  update:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  updateToDelete: null,
  showEditModal: false,
  updateToEdit: null,
  newUpdate: null
}

export  const updateReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_UPDATES_REQUEST':
          return {
            ...currentState,
            updates:[],
            update:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'FETCH_UPDATES_SUCCESS':
          return {
            ...currentState,
            updates:action.updates,
            update:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'FETCH_UPDATES_FAILED':
          return {
            ...currentState,
            updates:[],
            update:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'FETCH_UPDATE_REQUEST':
          return {
            ...currentState,
            updates:currentState.updates,
            update:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'FETCH_UPDATE_SUCCESS':
          return {
            ...currentState,
            updates:currentState.updates,
            update:action.update,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'FETCH_UPDATE_FAILED':
          return {
            ...currentState,
            updates:[],
            update:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
          }

    case 'ADD_NEW_UPDATE_REQUEST':
          return {
            ...currentState,
            updates:currentState.updates,
            update:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
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
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
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
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: false,
            updateToEdit: null,
            newUpdate: action.update
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          updateToDelete: null,
          showEditModal: true,
          updateToEdit: action.update,
          newUpdate: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          updateToDelete: null,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }

    case 'EDIT_UPDATE_REQUEST':
          return {
            ...currentState,
            updates:currentState.updates,
            update:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: true,
            updateToEdit: action.update,
            newUpdate: null
          }

    case 'EDIT_UPDATE_SUCCESS':
         const updatedUpdates = currentState.updates.map((update) => {
           if(update._id !== action.update._id){
             return update;
           }
           return { ...update, ...action.update }
         })
          return {
            ...currentState,
            updates:updatedUpdates,
            update:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            updateToDelete: null,
            showEditModal: true,
            updateToEdit: action.update,
            newUpdate: null
          }

  case 'EDIT_UPDATE_FAILED':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          updateToDelete: null,
          showEditModal: true,
          updateToEdit: currentState.updateToEdit,
          newUpdate: null
        }

  case 'DELETE_UPDATE_REQUEST':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          updateToDelete: action.update,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }

  case 'DELETE_UPDATE_SUCCESS':
  const filteredUpdates = currentState.updates.filter((update) => update._id !== currentState.updateToDelete._id)
        return {
          ...currentState,
          updates:filteredUpdates,
          update:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          updateToDelete: null,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }


  case 'DELETE_UPDATE_FAILED':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          updateToDelete: null,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          updateToDelete: action.update,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          updates:currentState.updates,
          update:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          updateToDelete: null,
          showEditModal: false,
          updateToEdit: null,
          newUpdate: null
        }


    default:
       return currentState;

  }
}
