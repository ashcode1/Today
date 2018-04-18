import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import UpdateEditForm from './UpdateEditForm';

export default class Updates extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditUpdate = this.submitEditUpdate.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteUpdate = this.cofirmDeleteUpdate.bind(this);
  }

  componentWillMount(){
    this.props.fetchUpdates();
  }


  showEditModal(updateToEdit){
     this.props.mappedshowEditModal(updateToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditUpdate(e){
    e.preventDefault();
    const editForm = document.getElementById('EditUpdateForm');
    if(editForm.updateText.value !== ""){
      const data = new FormData();

      data.append('id', editForm.id.value);
      data.append('updateText', editForm.updateText.value);
      data.append('updateDesc', editForm.updateDesc.value);
      data.append('updateTags', editForm.updateTags.value);
      this.props.mappedEditUpdate(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(updateToDelete){
    this.props.mappedshowDeleteModal(updateToDelete);
  }

  cofirmDeleteUpdate(){
    this.props.mappedDeleteUpdate(this.props.mappedUpdateState.updateToDelete);
  }

  render(){
    const updateState = this.props.mappedUpdateState;
    const updates = updateState.updates;
    const editUpdate = updateState.updateToEdit;
    
    return(
      <div className="col-md-12">
        <h3 className="centerAlign">Updates</h3>
        {!updates && updateState.isFetching &&
          <p>Loading updates....</p>
        }
        {updates.length <= 0 && !updateState.isFetching &&
          <p>No Updates Available. Add an Update to list here.</p>
        }
        {updates && updates.length > 0 && !updateState.isFetching &&
          <table className="table UpdatesTable">
            <thead>
            <tr><th>Update</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
            </thead>
            <tbody>
              {updates.map((update,i) => <tr key={i}>
              <td>Today I have... {update.updateText}</td>
              <td className="textCenter"><Button onClick={() => this.showEditModal(update)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.showDeleteModal(update)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
              <td className="textCenter"><Link to={`/${update._id}`}>View Details</Link></td>
              </tr> )
            }
            </tbody>
          </table>
        }

        {/* Modal for editing update */}
        <Modal
          show={updateState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Your Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editUpdate  &&
                <UpdateEditForm updateData={editUpdate} editUpdate={this.submitEditUpdate} />
              }
              {editUpdate  && updateState.isFetching &&
                <Alert bsStyle="info">
                <strong>Updating...... </strong>
                </Alert>
              }
              {editUpdate  && !updateState.isFetching && updateState.error &&
                <Alert bsStyle="danger">
                  <strong>Failed. {updateState.error} </strong>
                </Alert>
              }
              {editUpdate  && !updateState.isFetching && updateState.successMsg &&
                <Alert bsStyle="success">
                  Update <strong> {editUpdate.updateText} </strong>{updateState.successMsg}
                </Alert>
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for deleting update */}
        <Modal
          show={updateState.showDeleteModal}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Delete Your Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {updateState.updateToDelete && !updateState.error && !updateState.isFetching &&
              <Alert bsStyle="warning">
                Are you sure you want to delete this update <strong>{updateState.updateToDelete.updateText} </strong> ?
              </Alert>
            }
            {updateState.updateToDelete && updateState.error &&
              <Alert bsStyle="warning">
                Failed. <strong>{updateState.error} </strong>
              </Alert>
            }
            {updateState.updateToDelete && !updateState.error && updateState.isFetching &&
              <Alert bsStyle="success">
                <strong>Deleting.... </strong>
              </Alert>
            }
            {!updateState.updateToDelete && !updateState.error && !updateState.isFetching&&
              <Alert bsStyle="success">
                Update <strong>{updateState.successMsg} </strong>
              </Alert>
            }
          </Modal.Body>
          <Modal.Footer>
            {!updateState.successMsg && !updateState.isFetching &&
              <div>
                <Button onClick={this.cofirmDeleteUpdate}>Yes</Button>
                <Button onClick={this.hideDeleteModal}>No</Button>
              </div>
            }
            {updateState.successMsg && !updateState.isFetching &&
              <Button onClick={this.hideDeleteModal}>Close</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}