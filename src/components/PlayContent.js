import {useEffect} from 'react';
import useState from 'react-usestateref';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {saveScore, showPosition} from './../data/scoreData';
import {saveQuestion} from './../data/questionData';

function PlayContent(props) {
  const {whitespaces, total_letters, questions, forceUpdate} = props;
  const letters_x = Math.round((2*total_letters)**0.5);
  const [initialTime, setInitialTime] = useState(new Date());
  const [totalTime, setTotalTime] = useState(0);
  const [word, setWord] = useState('');
  const [sol, setSol, refSol] = useState(0);
  const [answer, setAnswer] = useState('');
  const [counterQuestions, setCounterQuestions] = useState(0);
  const [corrects, setCorrects, refCorrects] = useState(0);
  const [char, setChar] = useState('');
  const [messageAnswer, setMessageAnswer] = useState('');
  const [playingGame, setPlayingGame, refPlayingGame] = useState(1);
  const [position, setPosition, refPosition] = useState(null);

  const updateCurrentTime = ()=>{
    if(refPlayingGame.current!==1){
      return;
    }
    //console.log(playingGame);
    const new_value = Math.round((new Date() - initialTime.valueOf())/1000);
    setTotalTime(new_value);
    setTimeout(updateCurrentTime, 1000);
  };
  
  const question = ()=>{
    setCounterQuestions(counterQuestions+1);
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

  const nextQuestion = async ()=>{
    if(answer===""+sol){
      setCorrects(refCorrects.current+1);
      setMessageAnswer("correct answer");
    }
    else{
      setMessageAnswer(`Incorrect, the solution was ${sol}`);
    }
    await saveQuestion(char);
    if(counterQuestions===questions){
      setPlayingGame(0);
      const newScore = await saveScore(totalTime, refCorrects.current);
      const nPosition = await showPosition(newScore.id);
      setPosition(nPosition[0].num);
      return;
    }
    setSol(0);
    setAnswer('');
    question();
  };

  useEffect(()=>{
    const abortController = new AbortController();
    question();
    updateCurrentTime();
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const displayContent = ()=>{
    if(refPlayingGame.current===1){
      return (
        <>
        <h4>Total questions: {questions}, whitespaces: {whitespaces}, letters: {total_letters}</h4>
          <h4>Total time: {totalTime}</h4>
          <h4>total corrects: {refCorrects.current}/{counterQuestions}</h4>
          <h4>How many?: {char}</h4>
          <div>
            <pre dangerouslySetInnerHTML={{ __html: word }}></pre>
          </div>
          <div>
            <input type="text" value={answer} onChange={(el)=>setAnswer(el.target.value)}></input>
            <button onClick={nextQuestion}>submit</button>
          </div>
          <div>{messageAnswer}</div>
        </>
      )
    }
    return (
      <>
      <h4>Final time: {totalTime}</h4>
      <h4>Final corrects: {refCorrects.current}/{counterQuestions}</h4>
      <h4>Final score: {totalTime*(2**(questions-refCorrects.current))}</h4>
      <h4>Position: {refPosition.current}</h4>
      <button onClick={forceUpdate}>Play again</button>
      </>
    );
  };

    return (
      <div>
        {displayContent()}
      </div>
    );
  }

  const mapStateToProps = state => ({
    whitespaces: state.config.whitespaces,
    total_letters: state.config.total_letters,
    questions: state.config.questions,
    });
  
    PlayContent.propTypes = {
    whitespaces: PropTypes.number,
    total_letters: PropTypes.number,
    questions: PropTypes.number,
    forceUpdate: PropTypes.func,
  };
  
  PlayContent.defaultProps = {
    whitespaces: 0,
    total_letters: 0,
    questions: 0,
    forceUpdate: null,
  };
  
  export default connect(mapStateToProps)(PlayContent);