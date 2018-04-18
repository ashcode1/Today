import { connect } from 'react-redux';
import * as updateActions from '../actions/updateActions';
import Update from '../components/Update';

const mapStateToProps = (state) => {
  return {
    mappedUpdateState: state.updateState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedfetchUpdateById: updateId => dispatch(updateActions.fetchUpdateById(updateId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Update);
