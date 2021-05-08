import useState from 'react-usestateref';
import PlayContent from './PlayContent';

function Play() {
  const [showContent, setShowContent, refShowContent] = useState(false);

  const forceUpdate = ()=>{
    setShowContent(true);
    setTimeout(reloadAgain, 10);
  };

  const reloadAgain = ()=>{
    setShowContent(false);
  };

  const showPlayContent = ()=>{
    if(!refShowContent.current) return <PlayContent forceUpdate={forceUpdate} />
    else return <></>;
  };
  
    return (
      <div className="margin-div">
        {showPlayContent()}
      </div>
    );
  }
  
  export default Play;