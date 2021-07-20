import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//withRouter is a higher order component that will pass closest route's match , current location ,
// and history props to the wrapped component whenever it renders. simply it connects component to the router.

const ScrollToTop = Component => withRouter((props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location])

    return <Component {...props}/>
});

export default ScrollToTop;
