import ScoreInfo from './ScoreInfo';
import TopQuestions from './TopQuestions';
import RecentQuestions from './RecentQuestions';

function Feedback(props) {
  const {option} = props;


  const printTitle=()=>{
    if(option==='3') return (<h3>show top scores for current config</h3>);
    else if(option==='4') return (<h3>show recent scores for current config</h3>);
    else if(option==='5') return (<h3>show most errors for current config</h3>);
    else if(option==='6') return (<h3>show most corrects for current config</h3>);
    else if(option==='7') return (<h3>show recent errors for current config</h3>);
    else return (<h3>show recent corrects for current config</h3>);
  };

  const printTable = ()=>{
    if(option==='3' || option==='4') return (<ScoreInfo option={option} /> );
    else if(option==='5' || option==='6') return (<TopQuestions option={option} /> );
    else return (<RecentQuestions option={option} /> );
  }
  
  return (
    <div className="tableContainer">
      {printTitle()}
            <div>
              {printTable()}
            </div>
        </div>
  )
  }
  
  export default Feedback;