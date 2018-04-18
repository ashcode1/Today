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
    mappedEditUpdate: updateToEdit => dispatch(updateActions.editUpdate(updateToEdit)),
    mappedshowEditModal: updateToEdit => dispatch(updateActions.showEditModal(updateToEdit)),
    mappedhideEditModal: () => dispatch(updateActions.hideEditModal()),
    mappedDeleteUpdate: updateToDelete => dispatch(updateActions.deleteUpdate(updateToDelete)),
    mappedshowDeleteModal: updateToDelete => dispatch(updateActions.showDeleteModal(updateToDelete)),
    mappedhideDeleteModal: () => dispatch(updateActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Updates);
