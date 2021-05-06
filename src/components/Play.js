import {useEffect} from 'react';
import useState from 'react-usestateref'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Play(props) {
  const {whitespaces, total_letters, questions} = props;
  const letters_x = Math.round((2*total_letters)**0.5);
  const [initialTime, setInitialTime] = useState(new Date());
  const [totalTime, setTotalTime] = useState(0);
  const [word, setWord] = useState('');
  const [sol, setSol, refSol] = useState(0);
  const [answer, setAnswer] = useState('');
  const [corrects, setCorrects, refCorrects] = useState(0);
  const [char, setChar] = useState('');

  const updateCurrentTime = ()=>{
    const new_value = Math.round((new Date() - initialTime.valueOf())/1000);
    setTotalTime(new_value);
    setTimeout(updateCurrentTime, 1000);
  };
  
  const question = ()=>{
    let alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let subAlphabet =[];
    let nWord='';
    [...Array(5).keys()].forEach(()=>{
      let numb = Math.round(Math.random()*(alphabet.length-1));
      subAlphabet.push(alphabet[numb]);
      alphabet.splice(numb,1);
    });
    setChar(subAlphabet[0]);
    [...Array(total_letters).keys()].forEach((j)=>{
      if((j+1)%letters_x==1) nWord+="<span>";
      let numb = Math.round(Math.random()*4);
      if(numb===0) setSol(refSol.current+1);
      nWord+=subAlphabet[numb];
      for(let k=0;k<whitespaces;k++) nWord+=" ";
      if((j+1)%letters_x==0){
        nWord+="</span>";
        for(let k=0;k<whitespaces;k++) nWord+="<br/>";
      }
      setWord(nWord);
    });
  }

  const nextQuestion = ()=>{
    console.log(`answer: ${answer}, sol: ${sol}`)
    if(answer===""+sol){
      setCorrects(refCorrects.current+1);
      console.log(refCorrects.current);
    }
    setSol(0);
    setAnswer('');
    question();
  };

  useEffect(()=>{
    question();
    updateCurrentTime();
  }, [])
    return (
      <div>
          <h4>Total time: {totalTime}</h4>
          <h4>Score: {refCorrects.current}/{questions}</h4>
          <h4>How many?: {char}</h4>
          <div>
            <pre dangerouslySetInnerHTML={{ __html: word }}></pre>
          </div>
          <div>
            <input type="text" value={answer} onChange={(el)=>setAnswer(el.target.value)}></input>
            <button onClick={nextQuestion}>submit</button>
          </div>
      </div>
    );
  }

  const mapStateToProps = state => ({
    whitespaces: state.config.whitespaces,
    total_letters: state.config.total_letters,
    questions: state.config.questions,
    });
  
  Play.propTypes = {
    whitespaces: PropTypes.number,
    total_letters: PropTypes.number,
    questions: PropTypes.number,
  };
  
  Play.defaultProps = {
    whitespaces: 0,
    total_letters: 0,
    questions: 0,
  };
  
  export default connect(mapStateToProps)(Play);