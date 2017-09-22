import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const fields = [
 {
   "for": "firstName",
   "label": "Voornaam",
   "type": "text",
   "required": true
 },
 {
   "for": "lastName",
   "label": "Achternaam",
   "type": "text",
   "required": true
 },
 {
   "for": "emailAddress",
   "label": "E-mailadres",
   "type": "email",
   "required": true
 },
 {
   "for": "phoneNumber",
   "label": "Telefoon",
   "type": "tel",
   "required": true
 },
 {
   "for": "country",
   "label": "Land",
   "type": "select",
   "required": true,
   "options" : ['Nederland', 'België', 'Duitsland']
 },
 {
   "for": "zipCode",
   "label": "Postcode",
   "type": "text",
   "required": true
 },
 {
   "for": "street2",
   "label": "Huisnummer",
   "type": "text",
   "required": true
 },
 {
   "for": "street3",
   "label": "Toevoeging",
   "type": "text",
   "required": false
 },
 {
   "for": "street1",
   "label": "Adres",
   "type": "text",
   "required": true
 },
 {
   "for": "city",
   "label": "Stad",
   "type": "text",
   "required": true
 }
];

class TestForm extends Component {
  renderFieldX({ input, meta, field, ...props }) {
    const { tokkie } = props;
    console.log('Field is: ', tokkie);
    return null;
  }
  renderField( { input, meta: { touched, error, warning, valid }, ...props } ) {
    console.log('Touched?', touched);
    const { label } = props;
    return (
      <div className="grid-x" key={_.uniqueId()}>
        <div className="small-3 cell">
          <label htmlFor={input.name}>{label}</label>
        </div>
        <div className="small-8 cell">
          <input {...input} type="text" className={valid && touched ? 'is-valid-input' : ''} />
          {touched &&
            error &&
              <div className="form-error">
                {error}
              </div>
          }
        </div>
        <div className="small-1 cell">
          <i className={'fa fa-check' + (valid && touched ? '' : 'hide')} />
        </div>
      </div>
    );
  }
  renderFields() {
    return fields.map(field => {
      return (
        <Field name={field.for} label={field.label} component={this.renderField} key={_.uniqueId()} />
      );
    });
  }
  renderFieldsX() {
    return fields.map(field => {
      return (
        <div className="grid-x" key={_.uniqueId()}>
          <div className="small-3 cell">
            <label htmlFor={field.for}>{field.label}</label>
          </div>
          <div className="small-8 cell">
            <Field name={field.for} component={this.renderField} />
          </div>
        </div>
      );
    });
  }
  renderFieldsX() {
    return fields.map(field => {
      return (
        <div className="grid-x" key={_.uniqueId()}>
          <div className="small-3 cell">
            <label htmlFor={field.for}>{field.label}</label>
          </div>
          <div className="small-8 cell">
            {field.type != 'select'
              ? <Field name={field.for} component="input" type={field.type} />
              : <Field name={field.for} component="select">
                  {field.options.map(option => {
                    return (
                      <option value={option}>{option}</option>
                    );
                  })}
                </Field>
            }
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.props.handleSubmit } className="form-customer-info">
            {this.renderFields()}
          <div className="grid-x">
            <div className="small-9 small-offset-3 cell">
              <button type="submit" className="button primary">Volgende stap</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstName || values.firstName.length < 3) {
    errors.firstName = 'Foute boel!';
  }
  if (!values.lastName || values.lastName.length < 3) {
    errors.lastName= 'Foute boel!';
  }
  if (!values.emailAddress || values.emailAddress.length < 3) {
    errors.emailAddress = 'Foute boel!';
  }
  if (!values.phoneNumber || values.phoneNumber.length < 3) {
    errors.phoneNumber = 'Foute boel!';
  }
  if (!values.country || values.country.length < 3) {
    errors.country = 'Foute boel!';
  }
  if (!values.zipCode || values.zipCode.length < 3) {
    errors.zipCode = 'Foute boel!';
  }
  if (!values.street2 || values.street2.length < 3) {
    errors.street2 = 'Foute boel!';
  }
  if (!values.street3 || values.street3.length < 3) {
    errors.street3 = 'Foute boel!';
  }
  if (!values.street1 || values.street1.length < 3) {
    errors.street1 = 'Foute boel!';
  }
  if (!values.city || values.city.length < 3) {
    errors.city = 'Foute boel!';
  }
  return errors;
}

TestForm = reduxForm({
  form: 'customer',
  validate
})(TestForm);

export default TestForm;
