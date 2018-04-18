import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UpdateForm from './UpdateForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddUpdate = this.toggleAddUpdate.bind(this);
    this.addUpdate = this.addUpdate.bind(this);
  }

  toggleAddUpdate(e){
    e.preventDefault();
     this.props.mappedToggleAddUpdate();
  }

  addUpdate(e){
    e.preventDefault();
    const form = document.getElementById('addUpdateForm');
    if(form.updateText.value !== ""  && form.updateDesc.value !== "" && form.updateTags.value !== ""){
      
      // clean up tags    
      const cleanArr = form.updateTags.value.match(/\S+/g);
      form.updateTags.value = cleanArr;
 
      const data = new FormData();

      data.append('updateText', form.updateText.value);
      data.append('updateDesc', form.updateDesc.value);
      data.append('updateTags', form.updateTags.value);
      this.props.mappedAddUpdate(data);
      console.log(this.props.mappedAddUpdate(data));
      form.reset();
    }
    else{
      return ;
    }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
        <Navbar inverse collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Today I have...</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {  } }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddUpdate}>
                <NavItem eventKey={1}>Add Update</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {appState.showAddUpdate &&
            <UpdateForm addUpdate={this.addUpdate} toggleAddUpdate={this.toggleAddUpdate} />
          }
          {this.props.children}
        </div>
      </div>
    );
  }
}