import {combineReducers} from 'redux';
import authReducer from './authReducer';
import channeList from './channelList';
import { reducer as reduxForm } from 'redux-form';
import fieldList from './fieldList';

export default combineReducers({
    auth:authReducer,
    channels:channeList,
    fields:fieldList,
    form:reduxForm
});
