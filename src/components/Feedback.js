import {useEffect, useState} from 'react';
import {getScoreRecents, getScoreTop} from './../data/scoreData';

function Feedback(props) {
  const {option} = props;
  const [listData, setListData] = useState([]);

  useEffect(async () => {
    let data=[];
    if(option==='3')  data = await getScoreTop(); 
    else if(option==='4') data = await getScoreRecents();
    setListData(data);
  }, [listData]);

  const printTitle=()=>{
    if(option==='3') return (<h3>show top scores for current config</h3>);
    if(option==='4') return (<h3>show recent scores for current config</h3>);
    if(option==='5') return (<h3>show most errors for current config</h3>);
    if(option==='6') return (<h3>show most corrects for current config</h3>);
    if(option==='7') return (<h3>show recent errors for current config</h3>);
    if(option==='8') return (<h3>show recent corrects for current config</h3>);
  };

  const printTable = ()=>{
    if(option==='3' || option==='4'){
    return (
      <table className="table tableContent">
                    <thead className="thead-dark">
                        <tr>
                            <th>Score</th>
                            <th>Corrects</th>
                            <th>Seconds</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listData.map(
                                (data)=>(
                                    <tr>
                                        <td>{data.score}</td>
                                        <td>{data.corrects} out of {data.questions}</td>
                                        <td>{data.seconds}</td>
                                        <td>{data.created_at}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
    );
  }
  else return <></>;
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