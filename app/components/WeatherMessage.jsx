var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props
    return (
        <div>

            <h4 className='text-center'>{temp}&#8457; in the {location}!</h4>
        </div>
    )
}
module.exports = WeatherMessage;