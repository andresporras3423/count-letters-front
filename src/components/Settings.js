import { useEffect, useState } from 'react';
import {getConfigData} from './../data/configData';

function Settings() {
  const [whitespaces, setWhitespaces] = useState(0);
  const [totalLetters, setTotalLetters] = useState(0);
  const [questions, setQuestions] = useState(0);
  useEffect(async () => {
    const data = await getConfigData();
    console.log(data);
  }, []);
    return (
      <div>
          Settings here
      </div>
    );
  }
  
  export default Settings;