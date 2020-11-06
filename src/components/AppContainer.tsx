import { connect } from 'react-redux'
import App from './App';
import * as actions from '../redux/actions';

const mapState = (state: any) => ({
  currentTextValue: state.textValue
})

const mapDispatch = (dispatch: any) => {
  return {
    todoAddHandler: (text: string) => { dispatch(actions.todoAddHandler(text)) },
    todoDeleteHandler: () => { dispatch(actions.todoDeleteHandler()) }
  };
};

export default connect(mapState, mapDispatch)(App);
