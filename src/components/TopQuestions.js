import {useEffect, useState} from 'react';
import {showTopQuestions} from './../data/questionData';

function TopQuestions(props) {
    const {option, key} = props;
    const [listData, setListData] = useState([]);

  useEffect(async () => {
    let data=[];
    if(option==='5') data = await showTopQuestions(false);
    else if(option==='6') data = await showTopQuestions(true);
    setListData(data);
  }, [key]);

    return (
        <table className="table tableContent">
        <thead className="thead-dark">
            <tr>
                <th>Letter</th>
                <th>Percentage</th>
                <th>total</th>
                <th>{option==='5' ? 'Incorrects' : 'Corrects'}</th>
            </tr>
        </thead>
        <tbody>
            {
                listData.map(
                    (data)=>(
                        <tr>
                            <td>{data.letter}</td>
                            <td>{data.percentaje}</td>
                            <td>{data.total}</td>
                            <td>{data.corrects}</td>
                        </tr>
                    )
                )
            }
        </tbody>
    </table>

    );
  }
  
  export default TopQuestions;