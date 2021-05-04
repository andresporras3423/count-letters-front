import {useEffect, useState} from 'react';
import {showRecentQuestions} from './../data/questionData';

function RecentQuestions(props) {
    const {option} = props;
    const [listData, setListData] = useState([]);

  useEffect(async () => {
    let data=[];
    if(option==='7') data = await showRecentQuestions(false);
    else if(option==='8') data = await showRecentQuestions(true);
    setListData(data);
  }, [listData]);
    return (
        <table className="table tableContent">
        <thead className="thead-dark">
            <tr>
                <th>Letter</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                listData.map(
                    (data)=>(
                        <tr>
                            <td>{data.letter}</td>
                            <td>{data.created_at}</td>
                        </tr>
                    )
                )
            }
        </tbody>
    </table>

    );
  }
  
  export default RecentQuestions;