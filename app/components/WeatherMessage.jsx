var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props
    return (
        <div>
            <h4>{temp} in the {location}!!!</h4>
        </div>
    )
}
module.exports = WeatherMessage;