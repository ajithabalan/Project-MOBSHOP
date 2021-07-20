import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css/normalize.css';
import 'react-phone-input-2/lib/style.css';
import WebFont from 'webfontloader';
import firebase from './firebase/firebase';
import {onAuthStateSuccess, onAuthStateFail} from 'actions/authActions';
import configureStore from 'store/store';
import Preloader from 'components/ui/Preloader';
import 'styles/style.scss';

WebFont.load({
  google:{
    families: ['Droid Sans']
  }
  //To use the Web Font Loader library, just include it in your page and tell it which fonts to load. 
  //It provides a common interface to loading fonts regardless of the source,
});
const {store, persistor} = configureStore();
const root = document.getElementById('app')
render(<Preloader/>, root);   //ReactDOM.render(myfirstelement, document.getElementById('root'));
firebase.auth.onAuthStateChanged((user)=>{
  if(user){    //when open app auth should be checked
    store.dispatch(onAuthStateSuccess(user));
  }else{
    store.dispatch(onAuthStateFail('Failed to Athenticate'));
  }
  render(<App store={store} persistor={persistor}/>, root);
});








