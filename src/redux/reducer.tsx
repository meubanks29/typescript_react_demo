import * as constants from './constants';
import { BodyProps } from '../interfaces/BodyProps';

const init_state : BodyProps = {
   textValue: '',
};

export const rootReducer = (state : Object = init_state, action: any) => {
   switch (action.type) {
      case constants.ADD_TEXT:
        return {
          ...state,
          textValue: action.payload
        }
      case constants.DELETE_TEXT:
        return {
          ...state,
          textValue: ''
        }
      default:
         return state;
   }
}