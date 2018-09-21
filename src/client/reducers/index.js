import {combineReducers} from 'redux';
import authReducer from './authReducer';
import channeList from './channelList';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth:authReducer,
    channels:channeList,
    form:reduxForm
});
