import {useEffect, useState} from 'react';
import {getScoreRecents, getScoreTop} from './../data/scoreData';
function ScoreInfo(props) {
    const {option} = props;
    const [listData, setListData] = useState([]);

  useEffect(async () => {
    let data=[];
    if(option==='3')  data = await getScoreTop(); 
    else if(option==='4') data = await getScoreRecents();
    console.log(data);
    setListData(data);
  }, [listData]);
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
  
  export default ScoreInfo;