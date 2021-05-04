export const getScoreRecents = async () => {
    const response = await fetch(`https://lit-shelf-55398.herokuapp.com/score/show_recent`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
  };
  
  export default {getScoreRecents};