const React = require('react')
const xhr = require('xhr')
const {Link, Redirect } = require('react-router')
const Person = React.createClass({
  getInitialState () {
    return {
      person: {},
      removed: false
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/persons/' +
      this.props.params.id, {
        json: true
      }, (err, response, person) => {
        if (err) return console.log(err.message)
        this.setState({person})
      }
    )
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Are you sure?') ) {
      xhr.del('http://localhost:4000/persons/' + this.state.person.id,{
        json: this.state.person
      }, (err, response, body) => {
        if (err) return console.log(err.message)
        this.setState({removed: true })
      })
    }
  },
  render () {
    return (
      <div>
        { this.state.removed ? <Redirect to="/persons" /> : null}
        <h3>{this.state.person.firstName
          + ' ' + this.state.person.lastName}</h3>
        <p>{this.state.person.email}</p>
        <p>{this.state.person.phone}</p>
        <Link to={`/persons/${this.state.person.id}/edit`}>Edit Person</Link>
        |
        <a href="#" onClick={this.handleRemove}>Remove Person</a>
        |
        <Link to="/persons">Return</Link>
      </div>
    )
  }
})

module.exports = Person
