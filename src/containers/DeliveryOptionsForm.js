import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import validationMessages from '../data/coolblueValidationMessages';

const renderFieldX = (field) => {
  console.log('Field props are:', field);
  return (
    <div></div>
  );
};

const renderField = ( { input, label, type } ) => {
  return (
      <div className="grid-x">
        <div className="small-12 cell">
          {/* <input {...input} type={type} id={input.value} defaultChecked={checked} /> */}
          <input {...input} type={type} id={input.value} />
          {/* <input name={input.name} value={input.value} id={input.value} type={type} onChange={(event, value) => input.onChange(value)} /> */}
          <label htmlFor={input.value}>{label}</label>
        </div>
      </div>
  );
};


const DeliveryOptionsForm = (props) => {
  // console.log('The props inside DeliveryOptionsForm are:', props);
  return (
    <div>
      <h1 className="order-step__header">
        <span className="order-step__number">2.</span>
        Hoe wilt u uw bestelling ontvangen?
      </h1>
      <form onSubmit={ props.handleSubmit } className="form-delivery-options">
        <Field name="deliveryOptions" value="sendToThisAddress" component={renderField} type="radio" label="Verzend naar dit adres" checked />
        <Field name="deliveryOptions" value="sendToOtherAddress" component={renderField} type="radio" label="Verzend naar ander adres" />
        <Field name="deliveryOptions" value="pickUpFromStore" component={renderField} type="radio" label="Zelf afhalen" />
        <div className="grid-x">
          <div className="small-9 small-offset-3 cell">
            <button type="button" onClick={props.previousPage} className="button primary large order-step__button"><i className="fa fa-chevron-left" /> Vorige stap</button>
            <button type="submit" className="button primary large order-step__button">Volgende stap <i className="fa fa-chevron-right" /></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'customer',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmitSuccess: (result, dispatch, props) => {
    props.history.push('/');
  },
})(DeliveryOptionsForm);
