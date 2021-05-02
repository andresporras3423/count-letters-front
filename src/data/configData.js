export const getConfigData = async () => {
  const response = await fetch(`https://lit-shelf-55398.herokuapp.com/config_game/get`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.map((conf)=>{
        let obj = new Object();
        obj[`${conf.property}`]=parseInt(conf.val);
        return obj;
    });
};

export default {getConfigData}