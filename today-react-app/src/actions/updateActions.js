const apiUrl = "/api/";

export const toggleAddUpdate = () => {
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

export const fetchUpdates = () => {
  return (dispatch) => {
    dispatch(fetchUpdatesRequest());
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