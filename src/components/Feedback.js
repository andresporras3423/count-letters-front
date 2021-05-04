import {useEffect} from 'react';
import {getScoreRecents} from './../data/scoreData';

function Feedback(props) {
  const {option} = props;
  if(option=='3'){
    (
      async () => {
        const data = await getScoreRecents();
        console.log(data);
      }
    )();
    return (
      <div>
          Feedback here
      </div>
    );
  }
  else return <></>;
  }
  
  export default Feedback;