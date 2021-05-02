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
      total_letter: action.total_letter,
      questions: action.questions,
    }
    default: return state;
  }
};

export default configReducer;