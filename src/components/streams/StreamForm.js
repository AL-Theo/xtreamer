//this form is reusable for pages that look the same
//such as create and edit
import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component{
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  //
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }


  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }


  render (){
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form error" 
      >
        <Field 
          name="title" 
          component={this.renderInput} 
          label="Enter Title" 
        />
        <Field 
          name="description" 
          component={this.renderInput} 
          label="Enter Description" 
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  //if input is empty return error
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Must enter title';
  }

  if (!formValues.description) {
    errors.description = 'Must enter a description';
  }

  return errors;
}


export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);



//one way of combining redux form and connect
/*export default connect(reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate));*/