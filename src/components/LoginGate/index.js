import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { userSetJwt } from '../../actions/user'
import { userSelectIsLoggedIn } from '../../selectors/user'


export class LoginGate extends Component {

    componentDidMount() {
        this.checkIfLoggedIn()
    }
    checkIfLoggedIn = () => {
        const token = Cookie.get('jwt');
        if (token) {
            this.props.userSetJwt(token)
        }
    }

    render() {
        const { loggedIn } = this.props
        console.log(loggedIn, "LOGGED IN")
        if (loggedIn) {
            return this.props.children

        } else {
            console.log('redirect')
            return <Redirect to={'/'} />
        }
    }
}
const mapStateToProps = state => ({
    loggedIn: userSelectIsLoggedIn(state)
})

export default connect(mapStateToProps, { userSetJwt })(LoginGate)