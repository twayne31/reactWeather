var React = require('react');
var {Link} = require('react-router')

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few examples you can try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Atlanta'>Atlanta, GA</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
}
module.exports = Example;