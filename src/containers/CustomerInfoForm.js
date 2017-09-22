import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validationMessages from '../data/coolblueValidationMessages';

const renderField = ( { input, label, type, meta: { touched, error, warning, valid, pristine, submitFailed }, autocomplete, children } ) => {
  return (
      <div className="grid-x">
        <div className="small-3 cell">
          <label htmlFor={input.name}>{label}</label>
        </div>
        <div className="small-8 cell">
          {type != 'select'
            ? <input {...input} type={type} className={valid && touched && !pristine ? 'is-valid-input' : ''} autoComplete={autocomplete} />
            : <select {...input} children={children} className="is-valid-input" autoComplete={autocomplete} />
          }
          {touched &&
            error &&
              submitFailed &&
                <div className="form-error" dangerouslySetInnerHTML={{__html: error}} />
          }
        </div>
        <div className="small-1 cell">
          {type != 'select'
            ? <i className={'fa fa-check' + (valid && touched && !pristine ? '' : 'hide')} />
            : <i className="fa fa-check" />
          }
        </div>
      </div>
  );
};

const CustomerInfoForm = (props) => {
  return (
    <div>
      <h1 className="order-step__header">
        <span className="order-step__number">1.</span>
        Uw gegevens
      </h1>
      <form onSubmit={ props.handleSubmit } className="form-customer-info">
        <Field name="firstName" component={renderField} type="text" label="Voornaam" autocomplete="given-name" />
        <Field name="lastName" component={renderField} type="text" label="Achternaam" autocomplete="family-name" />
        <Field name="emailAddress" component={renderField} type="email" label="E-mailadres" autocomplete="email" />
        <Field name="phoneNumber" component={renderField} type="tel" label="Telefoon" autocomplete="tel" />
        <Field name="country" component={renderField} type="select" label="Land" autocomplete="country">
          <option value="Nederland">Nederland</option>
          <option value="België">België</option>
          <option value="Duitsland">Duitsland</option>
        </Field>
        <Field name="zipCode" component={renderField} type="text" label="Postcode" autocomplete="postal-code"/>
        <Field name="houseNumber" component={renderField} type="text" label="Huisnummer" autocomplete="off"/>
        <Field name="houseNumberAddition" component={renderField} type="text" label="Toevoeging" autocomplete="off"/>
        <Field name="streetName" component={renderField} type="text" label="Adres" autocomplete="street-address"/>
        <Field name="city" component={renderField} type="text" label="Plaats" autocomplete="address-level2"/>
        <div className="grid-x">
          <div className="small-9 small-offset-3 cell">
            <button type="submit" className="button primary large order-step__button">Kies ontvangstwijze <i className="fa fa-chevron-right" /></button>
          </div>
        </div>
      </form>
    </div>
  );
};

function validate(values) {

  const regexZipCode = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
  const regexLandLine = /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/i;
  const regexMobile = /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i;
  const regexStreetName = /^[a-zA-Z ]+$/i;
  const regexHouseNumber = /^[0-9]+$/i;

  const errors = {};

  if (!values.firstName) {
    errors.firstName = validationMessages.firstName[1];
  }
  if (!values.lastName) {
    errors.lastName= validationMessages.lastName[1];
  }
  if (!values.emailAddress) {
    errors.emailAddress = validationMessages.email[1];
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
    errors.emailAddress = validationMessages.email[2];
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = validationMessages.telephone[1];
  } else if (!regexMobile.test(values.phoneNumber) && !regexLandLine.test(values.phoneNumber)) {
    errors.phoneNumber = validationMessages.telephone[2];
  }
  if (!values.zipCode) {
    errors.zipCode = validationMessages.postalCode[1];
  } else if (!regexZipCode.test(values.zipCode)) {
    errors.zipCode = validationMessages.postalCode[2];
  }
  if (!values.houseNumber) {
    errors.houseNumber = validationMessages.streetNr[1];
  } else if (!regexHouseNumber.test(values.houseNumber)) {
    errors.houseNumber = validationMessages.streetNr[2];
  }
  if (!values.streetName) {
    errors.streetName = validationMessages.street[1];
  } else if (!regexStreetName.test(values.streetName)) {
    errors.streetName = validationMessages.street[2];
  }
  if (!values.city) {
    errors.city = validationMessages.city[1];
  }

  return errors;

}

export default reduxForm({
  form: 'customer',
  initialValues: {
    country: 'Nederland'
  },
  validate
})(CustomerInfoForm);
