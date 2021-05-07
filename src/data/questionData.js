export const showTopQuestions = async (correct) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/question/show_top?correct=${correct}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      return data;
  };

  export const showRecentQuestions = async (correct) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/question/show_recent?correct=${correct}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      return data;
  };

  export const saveQuestion = async (letter, correct) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/question/save`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({letter: letter, correct: correct})
      });
      const data = await response;
      return data;
  };
  
  export default {showTopQuestions, showRecentQuestions, saveQuestion}