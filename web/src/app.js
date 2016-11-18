const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')

const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons')

const NoMatch = () => (
  <div>
    <h3>Page Not Found</h3>
    <Link to="/">Home</Link>
  </div>
)

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/persons" component={Persons} />
          <Miss component={NoMatch} />
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
