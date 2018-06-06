var React = require('react');
var {Link} = require('react-router');


var Nav = React.createClass({
    onSearch: function (e){
        e.preventDefault();
        alert("Not wired up yet")
    },
    render: function () {
        return (
            <div className= "top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li>
                        <Link to="/">Get Weather</Link> 
                        </li>
                        <li>
                        <Link to="/about">About</Link> 
                        </li>
                        <li>
                        <Link to="/example">Example</Link> 
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className= "menu">
                            <li>
                                <input type="search" placeholder="Search weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}) 


module.exports = Nav