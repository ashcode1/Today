const apiUrl = "/api/";

export const toggleAddSomething = () => {
  return {
    type: 'TOGGLE_ADD_UPDATE'
  }
}

export const addNewUpdate = (update) => {console.log(update)
  return (dispatch) => {
    dispatch(addNewUpdateRequest(update));
    return fetch(apiUrl, {
      method:'post',
      body: update,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.update);
          dispatch(addNewUpdateRequestSuccess(data.update, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewUpdateRequestFailed(error))
        })
      }
    })
  }
}

export const addNewUpdateRequest = (update) => {
  return {
    type: 'ADD_NEW_UPDATE_REQUEST',
    update
  }
}

export const addNewUpdateRequestSuccess = (update,message) => {
  return {
    type: 'ADD_NEW_UPDATE_REQUEST_SUCCESS',
    update:update,
    message:message
  }
}

export const addNewUpdateRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_UPDATE_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchUpdates = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchUpdatesRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchUpdatesSuccess(data.updates,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchUpdatesFailed(error));
                    })
                  }
                })


  }
}

export const fetchUpdatesRequest = () => {
  return {
    type:'FETCH_UPDATES_REQUEST'
  }
}


//Sync action
export const fetchUpdatesSuccess = (updates,message) => {
  return {
    type: 'FETCH_UPDATES_SUCCESS',
    updates: updates,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchUpdatesFailed = (error) => {
  return {
    type:'FETCH_UPDATES_FAILED',
    error
  }
}

export const fetchUpdateById = (updateId) => {
  return (dispatch) => {
    dispatch(fetchUpdateRequest());
      // Returns a promise
      return fetch(apiUrl + updateId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchUpdateSuccess(data.update[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchUpdateFailed(error));
                 })
               }
             })

  }
}

export const fetchUpdateRequest = () => {
  return {
    type:'FETCH_UPDATE_REQUEST'
  }
}


//Sync action
export const fetchUpdateSuccess = (update,message) => {
  return {
    type: 'FETCH_UPDATE_SUCCESS',
    update: update,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchUpdateFailed = (error) => {
  return {
    type:'FETCH_UPDATE_FAILED',
    error
  }
}

export const showEditModal = (updateToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    update:updateToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editUpdate = (update) => {
    return (dispatch) => {
      dispatch(editUpdateRequest(update));
      return fetch(apiUrl, {
        method:'put',
        body:update
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editUpdateSuccess(data.update,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editUpdateFailed(error));
          })
        }
      })
    }
}

export const editUpdateRequest = (update) => {
   return {
     type:'EDIT_UPDATE_REQUEST',
     update
   }
}

export const editUpdateSuccess = (update,message) => {
  return {
    type:'EDIT_UPDATE_SUCCESS',
    update:update,
    message:message
  }
}

export const editUpdateFailed = (error) => {
  return {
    type:'EDIT_UPDATE_FAILED',
    error
  }
}

export const deleteUpdate = (update) => {
  return (dispatch) => {
    dispatch(deleteUpdateRequest(update));
    return fetch(apiUrl + update._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteUpdateSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteUpdateFailed(error));
        })
      }
    })

  }
}

export const deleteUpdateRequest = (update) => {
   return {
     type:'DELETE_UPDATE_REQUEST',
     update
   }
}

export const deleteUpdateSuccess = (message) => {
  return {
    type:'DELETE_UPDATE_SUCCESS',
    message:message
  }
}

export const deleteUpdateFailed = (error) => {
  return {
    type:'DELETE_UPDATE_FAILED',
    error
  }
}

export const showDeleteModal = (updateToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    update:updateToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
