import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getUser } from "../store/userProfile/actions";
import PropTypes from 'prop-types';

const propTypes = {
    match: PropTypes.object,
    userData: PropTypes.object,
    getUser: PropTypes.func
};

function UserProfile(props) {
    const { match: { params: { userID } }, userData, getUser } = props;

    useEffect(() => {
        getUser(userID);
    }, [getUser, userID]);

    if (!userData) {
        return null;
    }

    return(
        <div>
            <div>{userData.first_name}</div>
            <div>{userData.email}</div>
        </div>
    )
}

const mapState = state => {
    return {
        userData: state.user.data
    }
};

const mapActions = {
    getUser
};

UserProfile.propTypes = propTypes;
export default connect(mapState, mapActions)(UserProfile)