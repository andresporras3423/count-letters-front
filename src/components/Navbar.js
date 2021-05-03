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
      <button className="subnavbtn" onClick={()=>setPage('3')}>Game feedback <i className="fa fa-caret-down"></i></button>
      <div className="subnav-content">
      <button>Top scores</button>
      <button>Recent scores</button>
      <button>Most errors</button>
      <button>Most corrects</button>
      <button>Recent errors</button>
      <button>Recent corrects</button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;