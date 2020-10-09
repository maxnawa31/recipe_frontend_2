import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../../Forms'
// import { usersSyncUser } from '../../../actions/users';
import LoginForm from './LoginForm';

function MainLogin() {
  console.log('INSIDE MAIN LOGIN')
  const [email, setEmail] = useState({ value: '' });
  const [password, setPassword] = useState({ value: '' });

  const handleInputChange = (field) => {
    switch (field) {
      case 'email': {
        return setEmail;
      }
      case 'password': {
        return setPassword;
      }
    }
  };

  const formFields = [
    {
      field: 'email',
      type: 'email',
      required: true,
      label: 'Email',
      key: 'email',
    },
    {
      field: 'password',
      type: 'password',
      required: true,
      label: 'Password',
      key: 'password',
    },
  ];

  return (
    <Form heading={"Login"} fields={formFields} handleInputChange={handleInputChange}/>
  )
}

// class MainLogin extends Component {
//   formFields = [
//     {
//       field: 'email',
//       type: 'email',
//       required: true,
//       label: 'Email',
//       key: 'email'
//     },
//     {
//       field: 'password',
//       type: 'password',
//       required: true,
//       label: 'Password',
//       key: 'password'
//     }
//   ];
//   state = {
//     email: {
//       value: '',
//       touched: false
//     },
//     password: {
//       value: '',
//       touched: false
//     }
//   };

//   handleInputChange = field => {
//     switch (field) {
//       case 'email': {
//         return this.handleEmailChange;
//       }
//       case 'password': {
//         return this.handlePasswordChange;
//       }
//     }
//   };

//   handleTouchChange = field => {
//     switch (field) {
//       case 'email': {
//         return this.handleEmailTouched;
//       }
//       case 'password': {
//         return this.handlePasswordTouched;
//       }
//     }
//   };

//   handleEmailTouched = () =>
//     this.setState({ email: { ...this.state.email, touched: true } });

//   handlePasswordTouched = () =>
//     this.setState({ password: { ...this.state.password, touched: true } });

//   handleEmailChange = ({ target: { value } }) => {
//     this.setState({ email: { ...this.state.email, value } });
//   };

//   handlePasswordChange = ({ target: { value } }) => {
//     this.setState({ password: { ...this.state.password, value } });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const {
//       email: { value: emailValue },
//       password: { value: passwordValue }
//     } = this.state;
//     const { loginUser } = this.props;
//     loginUser(emailValue, passwordValue);
//   };

//   render() {
//     const { email, password } = this.state;
//     const values = { email, password };
//     console.log(this.formFields, "INSIDE")
//     return (
//       <LoginForm
//         fields={this.formFields}
//         handleInputChange={this.handleInputChange}
//         handleTouchChange={this.handleTouchChange}
//         handleSubmit={this.handleSubmit}
//         values={values}
//       />
//     );
//   }
// }

// const mapDispatchToProps = {
//   loginUser: usersSyncUser
// };
export default connect(null, null)(MainLogin);
