import { setErrorMessageType } from '../actions/appActions';

const initialState = {
  errorMessage: null,
  language: 'en'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case setErrorMessageType:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
