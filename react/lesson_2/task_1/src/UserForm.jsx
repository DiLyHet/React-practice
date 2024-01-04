import React from 'react';
import moment from 'moment';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    name: '',
    student: 'false',
    occupation: 'london',
    about: '',
  };

  handleChange = event => {

    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  handleSubmit = event => {
    this.props.submitHandler(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form className="login-form" onSubmit={()=>{
        event.preventDefault();
        this.props.onSubmit(this.state)}}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            name="name"
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            value={this.state.student}
            onChange={this.handleChange}
            id="student"
            name="student"
          />
        </div>

        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            value={this.state.about}
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
