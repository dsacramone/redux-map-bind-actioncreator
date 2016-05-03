import {connect}              from 'react-redux'
import { bindActionCreators } from 'redux'


export default (Component, name="actions") => Actions => connect(state => {
                                                            return { state }
                                                     }, dispatch => {
                                                            return { [name]: bindActionCreators(Actions, dispatch) }
                                                      })(Component)