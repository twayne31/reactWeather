var React = require('react');

var About = (props) => {
    return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is application built on React framework. 
         I have built this from the Udemy React Web Developer course.
         </p>
         <p>
             Here are some of the tools used:
         </p>
        <ul>
            <li>
                <a href="https://reactjs.org/">React</a> -This was the Javascript framework used.
            </li>
            <li>
                <a href="https://openweathermap.org/current">Open Weather App</a> -This was the api used to handle the weather data.
            </li>
        </ul>
    </div>        
    )
}
module.exports = About;