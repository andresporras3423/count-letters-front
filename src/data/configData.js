export const getConfigData = async () => {
  const response = await fetch(`https://lit-shelf-55398.herokuapp.com/config_game/get`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const opts = new Object();
    data.forEach((conf)=>opts[conf.property]=parseInt(conf.val));
    return opts;
};

export const updateConfigData = async (property, val) => {
  const response = await fetch(`https://lit-shelf-55398.herokuapp.com/config_game/update`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({property: property, val: val})
    });
    const data = await response;
    return data;
};

export default {getConfigData, updateConfigData}