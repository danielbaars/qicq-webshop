import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FormRow = props => {
  return (
    <div className="grid-x grid-margin-x">
      <div className="small-12 cell">
        {props.children}
      </div>
    </div>
  );
};


const renderField = ( { input, label, type } ) => {
  return (
    <FormRow>
      <input {...input} type={type} id={input.value} />
      <label htmlFor={input.value}>{label}</label>
    </FormRow>
  );
};


const DeliveryOptionsForm = (props) => {
  return (
    <div>
      <h1 className="order-step__header">
        <span className="order-step__number">2.</span>
        Hoe wilt u uw bestelling ontvangen?
      </h1>
      <form onSubmit={ props.handleSubmit } className="form-delivery-options">
        <Field name="deliveryOptions" value="sendToThisAddress" component={renderField} type="radio" label="Verzend naar dit adres" />
        <Field name="deliveryOptions" value="sendToOtherAddress" component={renderField} type="radio" label="Verzend naar ander adres" />
        <Field name="deliveryOptions" value="pickUpFromStore" component={renderField} type="radio" label="Zelf afhalen" />
        <FormRow>
          <div className="buttons-grouped">
            <button type="button" onClick={props.previousPage} className="button primary hollow large order-step__button"><i className="fa fa-chevron-left" /> Vorige stap</button>
            <button type="submit" className="button primary large order-step__button">Volgende stap <i className="fa fa-chevron-right" /></button>
          </div>
        </FormRow>
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
