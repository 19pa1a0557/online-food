import React, { Component } from 'react'
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      eMail: '',
      passWord:''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // const { firstName, lastName, eMail, passWord } = this.state;
    // console.log(e.target.fname.value)
    // console.log(e.target.lname.value)
    // console.log(e.target.mail.value)
    // console.log(e.target.pswd.value)

    const data = {
      firstName:e.target.firstName.value,
      lastName:e.target.lastName.value,
      eMail:e.target.eMail.value,
      passWord:e.target.passWord.value
    }
    console.log(data)

    // const data = {
    //   firstName,
    //   lastName,
    //   eMail,
    //   passWord
    // }
    // console.log(data)
    axios
      .post('http://localhost:5000/signup', JSON.stringify(data))
      .then(() => console.log('Data sent'))
      .catch(err => {
        console.error(err);
      });

    // fetch('http://localhost:5000/signup', {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result)
    // })
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name ="firstName"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" name='lastName' placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name='eMail'
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name='passWord'
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
