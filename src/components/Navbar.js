function Navbar(props) {
  const {setPage} = props;

  return (
    <div class="navbar">
      <div class="subnav">
      <button class="subnavbtn">Instructions</button>
      </div>
    <div class="subnav">
      <button class="subnavbtn">Play</button>
    </div>
    <div class="subnav">
      <button class="subnavbtn">Settings <i class="fa fa-caret-down"></i></button>
    </div> 
    <div class="subnav">
      <button class="subnavbtn">Game feedback<i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
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