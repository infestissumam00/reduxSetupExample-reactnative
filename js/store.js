import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



    const persistConfig = {
        key: 'root',
        storage: storage,
        persistReconciler: autoMergeLevel2,
        whitelist: ['dataReducer']
    };

    const pReducer = persistReducer(persistConfig, rootReducer);


    export const store = createStore(pReducer,applyMiddleware(thunk));
    export const persistor = persistStore(store);

