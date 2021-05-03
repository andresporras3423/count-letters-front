import { GET_CONFIG } from '../types/index';

const configReducer = (state = {
  whitespaces: 0,
  total_letters: 0,
  questions: 0,
}, action) => {
  switch (action.type) {
    case GET_CONFIG: return {
      ...state,
      whitespaces: action.whitespaces,
      total_letters: action.total_letters,
      questions: action.questions,
    }
    default: return state;
  }
};

export default configReducer;