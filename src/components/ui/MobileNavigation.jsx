import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import UserNav from 'views/account/components/UserAvatar';
import logo from '../../../static/projectlogo.png';



const Navigation = (props) => {
  const onClickLink = (e) => {
    if (props.isAuthenticating) e.preventDefault();
  };

  return (
    <nav className="mobile-navigation">
      <div className="mobile-navigation-main"> 
        <div className="mobile-navigation-logo">
          <Link onClick={onClickLink} to='/'>
            <img src={logo} style={{ width: '50px', height: '30px', objectFit: 'contain'}}/>
          </Link>
        </div>

        <BasketToggle>
          {({ onClickToggle }) => (
            <button 
                className="button-link navigation-menu-link basket-toggle" 
                onClick={onClickToggle}
                disabled={props.disabledPaths.includes(props.path)}
            >
              
              <Badge count={props.basketLength}>
                <i className="fa fa-shopping-basket" style={{  fontSize: '2rem'}}/>
              </Badge>
            </button>
          )}
        </BasketToggle>
        <ul className="mobile-navigation-menu"> 
          {props.isAuth ? (
            <li className="mobile-navigation-item">
              <UserNav isAuthenticating={props.isAuthenticating} profile={props.profile} />
            </li>
          ) : (
            <>
              {props.path !== '/signin' && (

                <li className="mobile-navigation-item">
                  <Link 
                      className="navigation-menu-link"
                      onClick={onClickLink}
                      to='/signin'
                  >
                    Sign In
                  </Link>
                </li>
                
                
              )
              }
              <li className="mobile-navigation-item">
                  <Link 
                      className="navigation-menu-link"
                      onClick={onClickLink}
                      to='/signup'
                  >
                    Sign UP
                  </Link>
                </li>
            </>
          )}
        </ul>
        <button className="button-link" onClick={(e) => {
          if (props.isAuthenticating) e.preventDefault(); 
          props.history.push('/search');
        }}>
          <i className="fa fa-search"/>
        </button>
      </div>
      
    </nav>
  );
}

Navigation.propType = {
  path: PropTypes.string.isRequired,
  disabledPaths: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withRouter(Navigation);
