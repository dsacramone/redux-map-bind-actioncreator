const connect            = require('react-redux').connect
const bindActionCreators = require('redux').bindActionCreators

export default (Component, name="actions") => (Actions, ...requestState) => connect(state => {
  return (requestState.length) ? { state: deriveRequestState(state)(requestState) } : { state }
}, dispatch => {
  return {[name]: bindActionCreators(Actions, dispatch)}
})(Component)

const deriveRequestState = state => states => {
  return states.filter(f => f in state )
.reduce((p, c) => Object.assign({}, p, {[c]: state[c]}), {})
}