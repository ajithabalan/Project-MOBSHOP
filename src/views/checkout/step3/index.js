import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase'
import {Link } from "react-router-dom";
import { removeFromBasket } from 'actions/basketActions';
import withAuth from '../hoc/withAuth';
import { displayMoney, displayActionMessage } from 'helpers/utils';
import emailjs from 'emailjs-com';
import './style.css';

const Payment = ({ basket, profile, shipping, subtotal, history, payment }) => {
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
    const total= displayMoney(subtotal + (field.isInternational ? 50 : 0))
    const dispatch = useDispatch();
    const noError = Object.keys(field).every((key)=> {
        if(typeof field[key] === 'object'){
            return !!field[key].value && !!!field[key].error
        } else {
            return true;
        }
    });
    const saveOrderDetails = () => {
        const isChanged = true;
        const basketItemsNames = [];
        basket.map(product => {
            basketItemsNames.push(product.name+" order quantity is "+product.quantity+" ;  ")
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
                PaymentID:'COD'
            }).then((docref)=>{})
          
            displayActionMessage('Your order has been saved and will be delivered in time', 'info');
        }
    };


    const onClickConfirm = () => {
      console.log("total"+total);
        if (field.fullname.value !== ''
        && field.address.value !== ''
        && field.email.value !== ''
        && field.mobile.value !== ''){
            saveOrderDetails();
            sendMail();
            // history.push(CHECKOUT_STEP_3 );
        }
        else{
            displayActionMessage("Please Fill All Fields",'info')
        }
    };
    const sendMail=()=>{
        const basketItemsNames = [];
        basket.map(product => {
            basketItemsNames.push(product.name)})

        const templateParams = {
            name: field.fullname.value,            
            product:basketItemsNames,           
            amount:subtotal,
            address:field.address.value
        };
        
        emailjs.send('service_9cepfm8','template_y49ty4p', templateParams, 'user_PUCz3hbxKGw7rOVmnbLWU')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    }
    
    return(
        <div >
           <h1>Payment Options</h1>
  
  <div>
      <Link to="/checkout/step3/creditcard"> <button className="cc">Credit Card Pay</button></Link>
  </div> 
   <br></br>
   <Link to="/"> <button onClick={onClickConfirm}className="cc">
    Cash On Delivery</button></Link>
  
            
        </div>
    );
};
export default withAuth(Payment);