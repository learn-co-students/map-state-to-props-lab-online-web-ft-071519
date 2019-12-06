import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debug } from 'util';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
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
