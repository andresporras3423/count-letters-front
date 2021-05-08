export const getScoreRecents = async (signal) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/score/show_recent`, {
      signal,    
      method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
  };

  export const getScoreTop = async (signal) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/score/show_top`, {
        signal,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
  };

  export const saveScore = async (seconds, corrects) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/score/save`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({seconds: seconds, corrects: corrects})
      });
      const data = await response.json();
      return data;
  };

  export const showPosition = async (id) => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/score/show_position?id=${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      return data;
  };
  
  export default {getScoreRecents, getScoreTop, saveScore, showPosition};