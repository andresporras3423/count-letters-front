import { useEffect, useState } from 'react';
import {getConfigData, updateConfigData} from './../data/configData';

function Settings() {
  const [configData, setConfigData] = useState({
    'whitespaces': 0,
   'total_letters': 0,
  'questions': 0});
  const [messageStatus, setMessageStatus] = useState(0);
  useEffect(async () => {
    const data = await getConfigData();
    setConfigData((()=>{
      return {
        ...configData,
        'whitespaces': data['whitespaces'],
        'total_letters': data['total_letters'],
        'questions': data['questions'],
      }
    })());
  }, []);
  const updateSettings = async ()=>{
    const answ1 = await updateConfigData('whitespaces', configData['whitespaces']);
    const answ2 = await updateConfigData('total_letters', configData['total_letters']);
    const answ3 = await updateConfigData('questions', configData['questions']);
    if(answ1.status===200 && answ2.status===200 && answ3.status===200) setMessageStatus(1);
    else setMessageStatus(2);
  }

  const typeSetting = (property, val)=>{
    setConfigData((()=>{
      return {
        ...configData,
        [property]: val,
      }
    })());
    setMessageStatus(0);
  }

  const successMessage = ()=>{
    if(messageStatus===1) return (<div className="alert alert-success">data successfully updated</div>)
    else if(messageStatus===2) return (<div className="alert alert-danger">an error occurs, data couldn't be saved</div>)
    else return (<></>)
  }
    return (
      <div class="settings-parent">
        <div class="settings">
        <label>whitespaces: </label>
          <input type="number" value={configData['whitespaces']} onChange={(e)=>typeSetting('whitespaces', e.target.value)}></input>
          <label>total letters:</label>
          <input type="number" value={configData['total_letters']}  onChange={(e)=>typeSetting('total_letters', e.target.value)}></input>
          <label>questions:</label>
          <input type="number" value={configData['questions']}  onChange={(e)=>typeSetting('questions', e.target.value)}></input>
          <button className="btn btn-dark" onClick={updateSettings}>Update</button>
        </div>
          {successMessage()}
      </div>
    );
  }
  
  export default Settings;