import React, { Component } from 'react';
import { connect } from 'react-redux';
// import UserInput from './UserInput';

class Users extends Component {

    render() {
        console.log(this.props.users)            
        const users = this.props.users.map((user, index) => {
            return <li>{index + 1 }. {user.username}</li>
        })


        return (
        <div>
            <ul>
                Users!
                {/* Write code here that displays the usernames of all users in the Redux store */ 
                }
                {users}      
            
                {/* In addition, display the total number of users currently in the store */}
            </ul>
        </div>
        )
    }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
