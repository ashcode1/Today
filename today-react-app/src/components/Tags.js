import React from 'react';
import { Link } from 'react-router';

class Tags extends React.Component {
  
  componentDidMount(){
    this.props.fetchUpdates();
  }
  render(){ 
    const updateState = this.props.mappedUpdateState;
    const updates = updateState.updates;
    const tagsArr = updates.reduce((accumulator, currentUpdate) => {
      if (currentUpdate.updateTags) {
        accumulator.push(...currentUpdate.updateTags);
      }
      return accumulator; 
    }, []); 
    const join = tagsArr.join(" ");
    const split = join.split(/[ ,]+/);
    const sort = split.sort();
    const tagsNoDupes = Array.from(new Set (sort));
    console.log(tagsNoDupes);


    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Select a tag to see related updates</h3>
      {!updates && updateState.isFetching &&
        <p>Loading tags....</p>
      }
      {updates.length <= 0 && !updateState.isFetching &&
        <p>No Updates Available. Add An Update to List here.</p>
      }
      {updates && updates.length > 0 && !updateState.isFetching &&
      <table className="table UpdatesTable">
      <thead>
       <tr><th>Tag</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>

        {tagsNoDupes.map((tag,i) => 
        <tr key={i}>
          <td>{tag}</td>      
          <td className="textCenter"><Link to={`/${tag}`}>View Updates related to this tag</Link></td>
        </tr> )
        }
        </tbody>
        </table>
      }
      </div>
    )
  }
}

export default Tags;