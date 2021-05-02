function Navbar(props) {
  const {setPage} = props;

  return (
    <div class="navbar">
      <div class="subnav">
      <button class="subnavbtn">Home</button>
      </div>
    <div class="subnav">
      <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
        <button>Company</button>
        <button>Team</button>
        <button>Careers</button>
      </div>
    </div> 
    <div class="subnav">
      <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
      <button>Bring</button>
      <button>Deliver</button>
      <button>Package</button>
      <button>Express</button>
      </div>
    </div> 
    <div class="subnav">
      <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
      <button>Link 1</button>
      <button>Link 2</button>
      <button>Link 3</button>
      <button>Link 4</button>
      </div>
    </div>
    <div class="subnav">
      <button class="subnavbtn">Contact</button>
      </div>
  </div>
  );
}

export default Navbar;