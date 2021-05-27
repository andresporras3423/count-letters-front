import {useState } from 'react';
import {updateConfigData} from './../data/configData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConfig } from '../actions/index';

function Settings(props) {
  const {whitespaces, total_letters, questions, handleGetConfig} = props;
  const [configData, setConfigData] = useState({
  'whitespaces': whitespaces,
  'total_letters': total_letters,
  'questions': questions});
  const [messageStatus, setMessageStatus] = useState(0);
  const updateSettings = async ()=>{
    const answ1 = await updateConfigData('whitespaces', configData['whitespaces']);
    const answ2 = await updateConfigData('total_letters', configData['total_letters']);
    const answ3 = await updateConfigData('questions', configData['questions']);
    if(answ1.status===200 && answ2.status===200 && answ3.status===200) {
      setMessageStatus(1);
      handleGetConfig({
        'whitespaces': configData['whitespaces'],
        'total_letters': configData['total_letters'],
        'questions': configData['questions'],
      });
    }
    else setMessageStatus(2);
  }

  const typeSetting = (property, val)=>{
    setConfigData((()=>{
      return {
        ...configData,
        [property]: parseInt(val),
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
      <div className="settings-parent">
        <div className="settings">
        <label>whitespaces: </label>
          <input type="number" min="0" max="4" value={configData['whitespaces']} onChange={(e)=>typeSetting('whitespaces', e.target.value)}></input>
          <label>total letters:</label>
          <input type="number" min="8" max="128" value={configData['total_letters']}  onChange={(e)=>typeSetting('total_letters', e.target.value)}></input>
          <label>questions:</label>
          <input type="number" min="3" max="100" value={configData['questions']}  onChange={(e)=>typeSetting('questions', e.target.value)}></input>
          <button className="btn btn-dark" onClick={updateSettings}>Update</button>
        </div>
          {successMessage()}
      </div>
    );
  }

  const mapDispatchToProps = dispatch => ({
    handleGetConfig: nConfig => {
      dispatch(getConfig(nConfig));
    }
  });
  
  const mapStateToProps = state => ({
    whitespaces: state.config.whitespaces,
    total_letters: state.config.total_letters,
    questions: state.config.questions,
    });
  
  Settings.propTypes = {
    whitespaces: PropTypes.number,
    total_letters: PropTypes.number,
    questions: PropTypes.number,
    handleGetConfig: PropTypes.func,
  };
  
  Settings.defaultProps = {
    whitespaces: 0,
    total_letters: 0,
    questions: 0,
    handleGetConfig: null,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Settings);