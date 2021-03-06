import {useState, useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar'; 
import Instructions from './Instructions'; 
import Play from './Play'; 
import Settings from './Settings'; 
import Feedback from './Feedback';
import {getConfigData} from './../data/configData'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConfig } from '../actions/index';

function App(props) {
  const {handleGetConfig, total_letters} = props;
const [page, setPage] = useState('0');

useEffect(async () => {
  const data = await getConfigData();
  handleGetConfig({
    'whitespaces': data['whitespaces'],
    'total_letters': data['total_letters'],
    'questions': data['questions'],
  });
}, []);

const setSelectedPage = ()=>{
  if(page==='0') return (<Instructions/>);
  else if(page==='1') return (<Play/>);
  else if(page==='2') return (<Settings/>);
  else  return (<Feedback option={page} />);
}
if(total_letters===0) return <></>
else return (
    <div className="App">
      <Navbar setPage={setPage}/>
      {setSelectedPage()}
    </div>
  );
}

const mapStateToProps = state => ({
  total_letters: state.config.whitespaces,
  });

const mapDispatchToProps = dispatch => ({
  handleGetConfig: nConfig => {
    dispatch(getConfig(nConfig));
  }
});

App.propTypes = {
  handleGetConfig: PropTypes.func,
  total_letters: PropTypes.number,
};

App.defaultProps = {
  handleGetConfig: null,
  total_letters: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
