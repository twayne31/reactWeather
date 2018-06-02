var React = require('react');
var Nav = require('Nav')



var Main = (props) => {
  return(
    <div>
      <Nav/>  
      <h2>Main component</h2>
      {/*shows the */}
      {props.children}
    </div>  
  );
}

module.exports = Main;