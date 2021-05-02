import {
    GET_CONFIG,
  } from '../types/index';
  
  export const getConfig = nConfig => ({
    type: GET_CONFIG,
    whitespaces: nConfig.whitespaces,
    total_letters: nConfig.total_letters,
    questions: nConfig.questions,
  });
  
  
  export default {
    getConfig,
  };
  