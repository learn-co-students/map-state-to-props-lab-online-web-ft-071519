import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
import { debug } from 'util';
class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
// connect this component to Redux
// export default Users
