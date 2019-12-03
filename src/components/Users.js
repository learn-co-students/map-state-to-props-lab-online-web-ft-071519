import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h3>Number of Users: {this.props.users.length}</h3>
          {this.props.users.map((user, index) => {return <li key={index}>{user.username}</li>})}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
