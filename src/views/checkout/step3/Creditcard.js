import React, { useState,useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { useDispatch } from 'react-redux';
import firebase from 'firebase'
import { removeFromBasket } from 'actions/basketActions';
import withAuth from '../hoc/withAuth';
import {  displayActionMessage } from 'helpers/utils';
import emailjs from 'emailjs-com';
import "./style.css";
import {Link } from "react-router-dom";
import { displayMoney } from 'helpers/utils';

  const Creditcard = ({ basket, profile, shipping, subtotal, history, payment }) => {

    const[field, setField] = useState({
        fullname: {value: profile.fullname ? profile.fullname: ''},
        email: {value: profile.email ? profile.email: ''},
        address: {value: shipping.address ? shipping.address : profile.address ? profile.address: ''},
        mobile: profile.mobile.value ? profile.mobile : shipping.mobile ? shipping.mobile : {
            value: '',
            data:{}
        },
        isInternational: !!shipping.isInternational ? shipping.isInternational : false,
        isDone: false,
        productName: [],
        productPrice: 100
    });
    const dispatch = useDispatch();
   
    const noError = Object.keys(field).every((key)=> {
        if(typeof field[key] === 'object'){
            return !!field[key].value && !!!field[key].error
        } else {
            return true;
        }
    });
   
    const CARD_OPTIONS = {
      iconStyle: "solid",
      style: {
        base: {
          iconColor: "#c4f0ff",
          color: "Black",
          fontWeight: 500,         
          fontSize: "16px",
          fontSmoothing: "antialiased",
          ":-webkit-autofill": {
            color: "#fce883"
          },
          "::placeholder": {
            color: "#87bbfd"
          }
        },
        invalid: {
          iconColor: "#ffc7ee",
          color: "#ffc7ee"
        }
      }
    };
    
    const CardField = ({ onChange }) => (
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
    );
    
    const Field = ({
      label,
      id,
      type,
      placeholder,
      required,
      autoComplete,
      value,
      onChange
    }) => (
      <div className="FormRow">
        <label htmlFor={id} className="FormRowLabel">
          {label}
        </label>
        <input
          className="FormRowInput"
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
      </div>
    );
    
    const SubmitButton = ({ processing, error, children, disabled }) => (
      <button
        className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
        type="submit"
        disabled={processing || disabled}
      >
        {processing ? "Processing..." : children}
      </button>
    );
    
    const ErrorMessage = ({ children }) => (
      <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
          <path
            fill="#FFF"
            d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
          />
          <path
            fill="#6772e5"
            d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
          />
        </svg>
        {children}
      </div>
    );
    
    const ResetButton = ({ onClick }) => (
      <button type="button" className="ResetButton" onClick={onClick}>
        <svg width="32px" height="32px" viewBox="0 0 32 32">
          <path
            fill="#FFF"
            d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
          />
        </svg>
      </button>
    );
    
    const CheckoutForm = () => {
      const stripe = useStripe();
      const elements = useElements();      
      const [error, setError] = useState(null);
      const [cardComplete, setCardComplete] = useState(false);
      const [processing, setProcessing] = useState(false);
       const [paymentMethod, setPaymentMethod] = useState(null);
      const [billingDetails, setBillingDetails] = useState({
        email: "",
        phone: "",
        name: ""
      });
    
      const handleSubmit = async (event) => {
        
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        if (error) {
          elements.getElement("card").focus();
          return;
        }
    
        if (cardComplete) {
          setProcessing(true);
        }
    
        const payload = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: billingDetails
        });
    
        setProcessing(false);
    
        if (payload.error) {
          setError(payload.error);
        } else {
          setPaymentMethod(payload.paymentMethod);
          payment.id=payload.paymentMethod;
        //  swal("Payment Received"+payload.paymentMethod.id)
         onClickConfirm(payload.paymentMethod.id);
        }
      };
    
      const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
        setBillingDetails({
          email: "",
          phone: "",
          name: ""
        });
      };
      const total= displayMoney(subtotal + (field.isInternational ? 50 : 0))
      
      const onClickConfirm = (id) => {
          
        if (field.fullname.value !== ''
        && field.address.value !== ''
        && field.email.value !== ''
        && field.mobile.value !== ''){
          //alert("your payment confirmed" +paymentMethod.id)
            saveOrderDetails(id);
            
            sendMail();
           
        }
        else{
            displayActionMessage("Please Fill All Fields",'info')
        }
               
      };
    const sendMail=()=>
    {
      const basketItemsNames = [];
        basket.map(product => {
            basketItemsNames.push(product.name)})

        const templateParams =
         {
            name: field.fullname.value,            
            product:basketItemsNames,           
            amount:subtotal,
            address:field.address.value
        };
        
        emailjs.send('service_9cepfm8','template_y49ty4p', templateParams, 'user_PUCz3hbxKGw7rOVmnbLWU')
            .then((response) => 
            {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            }
            );
     }
      const saveOrderDetails = (id) =>
       {
      const isChanged = true;
      const basketItemsNames = [];
      basket.map(product => {
          basketItemsNames.push(product.name+"  order quantity is  "+product.quantity+"  ;  ")
          field.productPrice = product.price
          dispatch(removeFromBasket(product.id))
                })
      if(isChanged){
          firebase.firestore().collection('orders').add({
              fullname: field.fullname.value,
              price: total,
              email: field.email.value,
              address: field.address.value,
              mobile: field.mobile,
              ProductName: basketItemsNames,
              PaymentID:id
          }).then((docref)=>{})
         
         history.push({

          pathname: "/checkout/step3/creditcard/final",
          state: id  
          } )

         
           }
          };
    
      return paymentMethod ? (
        <div   className="Result">
          <div  className="ResultTitle" role="alert">
            Payment Received
          </div>
          <div className="ResultMessage">
            Thank you for your payment .Your Transaction ID is {paymentMethod.id}   
    
            <br></br><br></br><Link to="/"> <button id="ok">Continue Shopping</button></Link>     
            
             </div>
         
          <ResetButton onClick={reset} />
        </div>
      ) :
      
      
      
      (
        <form className="Form" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <Field
              label="Name"
              id="name"
              type="text"
              placeholder="Enter Your Name"
              required
              autoComplete="name"
              value={billingDetails.name}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, name: e.target.value });
              }}
            />
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="test@gmail.com"
              required
              autoComplete="email"
              value={billingDetails.email}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, email: e.target.value });
              }}
            />
            <Field
              label="Phone"
              id="phone"
              type="tel"
              placeholder="phone"
              required
              autoComplete="tel"
              value={billingDetails.phone}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, phone: e.target.value });
              }}
            />
          </fieldset>
          <fieldset className="FormGroup">
            <CardField
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
            />
          </fieldset>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          <SubmitButton processing={processing} error={error} disabled={!stripe}>
            
            Pay 
          </SubmitButton>
        </form>
      );
    };
    
    const ELEMENTS_OPTIONS = {
      fonts: [
        {
          cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
      ]
    };
    
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.
    const stripePromise = loadStripe("pk_test_51JCl4BSG4FmAwhaJJc91Ej2qzrKjq5yv5MYnRnSwWN55KM6xgG6DB5rS8VsLJieSxfKdvK1jP4TegiCuaHVdYdnr00Pou6iYsA");
    
    
  


   
    
  return (
    
    <div className="AppWrapper">
    <h2 ><u>Credit Card Payment Gateway</u></h2><br></br>
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm />
      </Elements>
    </div>
    
  );
};

export default withAuth(Creditcard)