const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API

const Service = Component => React.createClass({
  allDocs (callback) {
    xhr.get(API_URL + '/persons', {json: true}, (err, response, body) => {
      callback(err, body)
    })
  },
  get (id, callback) {
    xhr.get(API_URL + '/persons/' + id,
      {json: true}, (err, response, body) => {
      callback(err, body)
    })
  },
  post (doc, callback) {
    xhr.post(`${API_URL}/persons`, {json:doc}, (e,r,b) => {
      callback(e,b)
    })
  },
  put (id, doc, callback) {
    xhr.put(`${API_URL}/persons/${id}`, {json: doc}, (e,r,b) => {
      callback(e,b)
    })
  },
  remove (id, body, callback) {
    xhr.del(`${API_URL}/persons/${id}`,
      { json: body}, (e,r,b) => {
      callback(e,b)
    })
  },
  render () {
    return (
      <Component {...this.props}
        allDocs={this.allDocs}
        get={this.get}
        post={this.post}
        put={this.put}
        remove={this.remove}
      />
    )
  }
})

module.exports = Service
