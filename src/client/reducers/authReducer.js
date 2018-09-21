import { AUTH_VERIFY } from './../actions/authVerify';

export default (state=null,action)=>{
    switch(action.type){
        case AUTH_VERIFY:
            return action.payload.data || false;
        default:
            return state;
    }
};