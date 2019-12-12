import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

// add any needed imports here
class Users extends Component {

  render() {

  let users = this.props.users.map((user, index) => <li key={index}>{user.username} from {user.hometown}</li>);
    return (
      <div>
        <ul>
          Users!
          {users}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return{users: state.users,
  numberOfUsers: state.users.length,
  hometown: state.users.hometown
};
};
// connect this component to Redux

export default connect(mapStateToProps)(Users);

