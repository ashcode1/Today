import { connect } from 'react-redux';
import * as updateActions from '../actions/updateActions';
import Updates from '../components/Updates';

const mapStateToProps = (state,ownProps) => {
  return {
    mappedUpdateState: state.updateState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdates: () => dispatch(updateActions.fetchUpdates()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Updates);