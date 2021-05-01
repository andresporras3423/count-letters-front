function Navbar(props) {
  const {setPage} = props;

  return (
      <nav class="links-container">
      <span onClick={()=>setPage("0")}>Instructions</span>
      <span onClick={()=>setPage("1")}>Play</span>
      <span onClick={()=>setPage("2")}>Settings</span>
      <span onClick={()=>setPage("3")}>Game feedback</span>
    </nav>
    
  );
}

export default Navbar;