const connect            = require('react-redux').connect
const bindActionCreators = require('redux').bindActionCreators


module.exports = (Component, name="actions") => Actions => connect(state => {
                      return { state }
                  }, dispatch => {
                      return { [name]: bindActionCreators(Actions, dispatch) }
                  })(Component)