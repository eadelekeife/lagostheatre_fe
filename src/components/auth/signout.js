import React from 'react';

import { Redirect } from 'react-router-dom';

import { signOutProp } from '../reducers/auth';
import { connect } from 'react-redux';

class SignOut extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.signOutProp();
    }
    render() {
        return <Redirect to="/signin" />
    }
}
// props.signOutProp();
const mapStateToProps = store => {
    return { auth: store.auth };
}

export default connect(mapStateToProps, { signOutProp })(SignOut);