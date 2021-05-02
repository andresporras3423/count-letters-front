import {useState} from 'react';
import '../App.css';
import Navbar from './Navbar'; 
import Instructions from './Instructions'; 
import Play from './Play'; 
import Settings from './Settings'; 
import Feedback from './Feedback'; 

function App() {
const [page, setPage] = useState('0');

const setSelectedPage = ()=>{
  if(page==='0') return (<Instructions/>);
  else if(page==='1') return (<Play/>);
  else if(page==='2') return (<Settings/>);
  else  return (<Feedback/>);
}
  return (
    <div className="App">
      <Navbar setPage={setPage}/>
      {setSelectedPage()}
    </div>
  );
}

export default App;
