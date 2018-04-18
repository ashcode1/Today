import { connect } from 'react-redux';
import * as updateActions from '../actions/updateActions';
import Tags from '../components/Tags';

const mapStateToProps = (state,ownProps) => {
  return {
    mappedUpdateState: state.updateState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdates: () => dispatch(updateActions.fetchUpdates())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags);
