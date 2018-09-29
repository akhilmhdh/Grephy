import { FETCH_FIELD_LIST } from './../actions/fetchFieldList';

export default (state=null,action) =>{
    switch(action.type){
        case FETCH_FIELD_LIST:
            return action.payload.data;
        default:
            return state;
    }
};