import React from 'react';

export default class Update extends React.Component {
  componentDidMount(){
    this.props.mappedfetchUpdateById(this.props.params.id);
  }

  render(){
    const updateState = this.props.mappedUpdateState;
    return(
      <div className="updateDetail">
       <h2>Update Detail</h2>
         {!updateState.update && updateState.isFetching &&
           <div>
             <p>Loading update....</p>
           </div>
         }
       {updateState.update && !updateState.isFetching &&
         <div>
           <h3>{updateState.update.updateText}</h3>
           <p>{updateState.update.updateDesc}</p>
         </div>
       }
      </div>
    );
  }
}
