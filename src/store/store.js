import {
    createStore,
    applyMiddleware,
} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistCombineReducers} from 'redux-persist'; //for local storage
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import rootSaga from 'sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'basket', 'checkout']  //wat to be stored by browser or persisted
}

export default () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig, rootReducer),  //syntax:persistReducer(config, reducer)
        composeWithDevTools(applyMiddleware(sagaMiddleware))

    );
    const persistor = persistStore(store);  //store data from central repository
    sagaMiddleware.run(rootSaga);   //run middleware
    return {store, persistor};
};
