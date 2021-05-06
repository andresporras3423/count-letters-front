import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Play(props) {
  const {whitespaces, total_letters, questions} = props;
  const letters_x = Math.round((2*total_letters)**0.5);
  const [initialTime, setInitialTime] = useState(new Date());
  const [totalTime, setTotalTime] = useState(0);
  const [word, setWord] = useState('');

  const updateCurrentTime = ()=>{
    const new_value = Math.round((new Date() - initialTime.valueOf())/1000);
    setTotalTime(new_value);
    setTimeout(updateCurrentTime, 1000);
  };
  
  const question = ()=>{
    let alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let subAlphabet =[];
    let nWord='';
    let sol=0;
    [...Array(5).keys()].forEach(()=>{
      let numb = Math.round(Math.random()*(alphabet.length-1));
      subAlphabet.push(alphabet[numb]);
      alphabet.splice(numb,1);
    });
    [...Array(total_letters).keys()].forEach((j)=>{
      if((j+1)%letters_x==1) nWord+="<span>";
      let numb = Math.round(Math.random()*4);
      if(numb===0) sol++;
      nWord+=subAlphabet[numb];
      for(let k=0;k<whitespaces;k++) nWord+=" ";
      if((j+1)%letters_x==0){
        nWord+="</span>";
        for(let k=0;k<whitespaces;k++) nWord+="<br/>";
      }
      setWord(nWord);
    });
    // console.log(`Find how many ${subAlphabet[0]}'s`);
    // console.log(word);
    // let answer = parseInt(prompt_sync());
    // let correct= answer===sol;
    // let nQuestion = new Questions(subAlphabet[0], correct);
    // let x = await questions_data.save_question(nQuestion);
    // if(correct) console.log("correct");
    // else console.log("incorrect, the solution was "+sol);
    // return correct;
  }

  useEffect(()=>{
    question();
    updateCurrentTime();
  }, [])
  // (
  //   ()=>{
  //     let sols = 0;
  //   let initial = new Date();
  //   for(let i=0; i< questions; i++){
  //     console.log(`Question N°${i+1}`);
  //     if(question()) sols++;
  //   }
  //   end_game(sols, initial);
  //   }
  // )();

    return (
      <div>
          <h4>total time: {totalTime}</h4>
          <pre dangerouslySetInnerHTML={{ __html: word }}></pre>
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