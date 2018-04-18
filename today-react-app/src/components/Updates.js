import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import UpdateEditForm from './UpdateEditForm';

export default class Updates extends React.Component {

  componentWillMount(){
    this.props.fetchUpdates();
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
            {updates.map((update,i) => 
            <tr key={i}>
              <td>Today I have... {update.updateText}</td>
              <td className="textCenter"><Button bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
              <td className="textCenter"><Link>View Details</Link> </td>
            </tr> )
            }
          </tbody>
        </table>
        }

      </div>
    );
  }
}
