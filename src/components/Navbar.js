function Navbar(props) {
  const {setPage} = props;

  return (
    <div className="myNavbar">
      <div className="subnav">
      <button className="subnavbtn" onClick={()=>setPage('0')}>Instructions</button>
      </div>
    <div className="subnav">
      <button className="subnavbtn" onClick={()=>setPage('1')}>Play</button>
    </div>
    <div className="subnav">
      <button className="subnavbtn" onClick={()=>setPage('2')}>Settings</button>
    </div> 
    <div className="subnav">
      <button className="subnavbtn">Game feedback <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
      <button onClick={()=>setPage('3')}>Top scores</button>
      <button onClick={()=>setPage('4')}>Recent scores</button>
      <button onClick={()=>setPage('5')}>Most errors</button>
      <button onClick={()=>setPage('6')}>Most corrects</button>
      <button onClick={()=>setPage('7')}>Recent errors</button>
      <button onClick={()=>setPage('8')}>Recent corrects</button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;