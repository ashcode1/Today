import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const UpdateEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditUpdateForm" onSubmit={props.editUpdate}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Update: </ControlLabel>
            <input type="hidden" value={props.updateData._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter update"
              name="updateText" defaultValue={props.updateData.updateText}
                />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
              <FormControl
                componentClass="textarea" placeholder="Enter description"
                name="updateDesc" defaultValue={props.updateData.updateDesc}
                  />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tags: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter tags (please leave at least one space between each tag)"
                name="updateTags"
                  />
          </FormGroup>
        </div>
      </div>
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
        </FormGroup>
    </form>
  );
}

export default UpdateEditForm;
