
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routers/AppRouter';
import Preloader from 'components/ui/Preloader';
import React, {StrictMode} from 'react';

const App = ({ store, persistor}) => (
 <StrictMode>
   <Provider store={store}>
     <PersistGate loading={<Preloader/>} persistor={persistor}>
       <AppRouter/>
     </PersistGate>

   </Provider>
 </StrictMode>
);
export default App;


//f you are using react, wrap your root component with PersistGate. This delays the rendering of your app's UI 
//until your persisted state has been retrieved and 
// PersistGate loading prop can be null, or any react instance, e.g. loading={<Loading />}