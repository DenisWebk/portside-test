import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getUserList } from "../store/userList/actions";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    userList: PropTypes.array,
    getUserList: PropTypes.func
};

function UserList(props) {
    const { userList, getUserList } = props;

    useEffect(() => {
        getUserList();
    }, [getUserList]);

    const users = userList && userList.map((user, index) => (
        <li key={index}>
            <Link to={`/user/${user.id}`}>
                { user.first_name }
            </Link>
        </li>
    ));

    return(
        <ul>
            { users }
        </ul>
    )
}

const mapState = state => {
    return {
        userList: state.userList.data
    }
};

const mapActions = {
    getUserList
};

UserList.propTypes = propTypes;
export default connect(mapState, mapActions)(UserList);