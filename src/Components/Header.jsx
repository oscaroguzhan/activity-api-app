
const Header = ({logo}) => {
  return (
  <header>
     <div className="logo">
          <img src={logo} alt="logo picture" />
        </div>
        <div className="title">
          <h1>Activity App</h1>
        </div> 
  </header>
  );
};

export default Header;
