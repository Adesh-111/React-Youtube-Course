import PropTypes from "prop-types";

function UserGreeting(props) {

    const welcome = <h2 className="welcome">Welcome {props.username}</h2>
    const login = <h2 className="login">Please Login</h2>

    return (
        props.isLogged ? welcome : login
    )
}

UserGreeting.prototype = {
    isLogged: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLogged: true,
    username: "Batman"
}

export default UserGreeting;