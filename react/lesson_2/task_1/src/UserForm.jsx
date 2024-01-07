import React from 'react';
import moment from 'moment';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.nameInput.value;
    const student = this.studentInput.checked;
    const occupation = this.occupationSelect.value;
    const about = this.aboutTextarea.value;

    const formData = {
      name,
      student,
      occupation,
      about,
    };

    this.props.onSubmit(formData);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            ref={input => (this.nameInput = input)}
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
            ref={input => (this.studentInput = input)}
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
            ref={select => (this.occupationSelect = select)}
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
            ref={textarea => (this.aboutTextarea = textarea)}
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
