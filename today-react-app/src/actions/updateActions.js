const apiUrl = "/api/";

export const toggleAddBook = () => {
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