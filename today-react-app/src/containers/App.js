import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as updateActions from '../actions/updateActions';

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddUpdate: () => dispatch(appActions.toggleAddUpdate()),
    mappedAddUpdate: update => dispatch(updateActions.addNewUpdate(update))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
