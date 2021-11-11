import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;

    return (
      <main>
        <h2> Users </h2>
        <p>
        { `${greetingMessage} User ${id}` }, this is my awesome Users component
        </p>
      </main>
    );
  }
}

export default Users;

// // arquivo Users.js
// import React, { Component } from 'react';

// class Users extends Component {
//   render() {
//     const { greetingsMessage } = this.props
//     return (
//       <div>
//         <h2>Users</h2>
//         <p> { greetingsMessage }, My awesome Users component </p>
//       </div>
//     );
//   }
// };

// export default Users;

// import React, { Component } from 'react';

// class Users extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Users</h2>
//         <p> My awesome Users component </p>
//       </div>
//     );
//   }
// };

// export default Users;
