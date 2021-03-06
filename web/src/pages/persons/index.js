const React = require('react')
const {Link} = require('react-router')
const Persons = React.createClass({
  getInitialState: function() {
    return {
      persons: []
    }
  },
  componentDidMount() {
    this.props.allDocs((err, persons) => {
      if (err) return console.log(err.message)
      this.setState({persons})
    })
  },
  render() {
    // or "/persons/" + person.id + "/show"
    const listPerson = person =>
      <li key={person.id}>
        <Link to={`/persons/${person.id}/show`}>
        {person.firstName + ' ' + person.lastName }
        </Link>
      </li>
    return (
      <div>
        <h1>Persons</h1>
        <Link to="/persons/new">New Person</Link>
        <ul>
          {this.state.persons.map(listPerson)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
})

module.exports = Persons
