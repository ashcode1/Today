import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const UpdateForm = (props) => {
  return (
    <form
      className='form form-horizontal'
      id='addUpdateForm'
      onSubmit={props.addUpdate}
    >
      <div className='row'>
        <h3 className='centerAlign'>Add Your Update</h3>
        <div className='col-md-12'>
          <FormGroup>
            <ControlLabel>Update: </ControlLabel>
            <FormControl
              type='text'
              placeholder='Enter update'
              name='updateText'
            />
          </FormGroup>
        </div>
        <div className='col-md-12'>
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              componentClass='textarea'
              placeholder='Enter description'
              name='updateDesc'
            />
          </FormGroup>
        </div>
        <div className='col-md-12'>
          <FormGroup>
            <ControlLabel>Tags: </ControlLabel>
            <FormControl
              type='text'
              placeholder='Enter tags (please leave at least one space between each tag)'
              name='updateTags'
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button
          type='submit'
          // onClick={props.toggleAddUpdate}
          bsStyle='success'
          bsSize='large'
          block
        >
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default UpdateForm;
