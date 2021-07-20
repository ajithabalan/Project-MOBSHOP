import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Basket from 'components/basket/Basket';
import Navigation from 'components/ui/Navigation';
import Footer from 'components/ui/Footer';
const PrivateRoute = ({isAuth, userType, component: Component, path, ...rest})=>(
    <Route
    {...rest}
    component={props =>(
        isAuth && userType === 'USER'
        ?(<>
            <Navigation path={path} isAuth={isAuth}/>
            <Basket isAuth={isAuth}/>
            <main className='content'>
                <Component {...props}/>
            </main>
            <Footer path={path}/>
        </>):isAuth && userType === "ADMIN" ? <Redirect to={'/admin/dashboard'}/>
        :<Redirect to={{
            pathname:'/signin',
            state: {from: props.location}
        }}
        />
    )}
    />
);
const mapStateToProps = ({auth}) => ({   
    //mapStateToProps is used for selecting the part of the data from the store that 
    // we map our state comming from store to props ,to use props inside our componenet
    isAuth: !!auth.id && !!auth.role,
    userType: auth.role
});
export default connect(mapStateToProps)(PrivateRoute); //The connect() function connects a React component to a Redux store.
