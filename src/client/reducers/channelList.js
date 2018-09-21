import { FETCH_CHANNEL_LIST } from './../actions/fetchChannelList';

export default (state=null,action) => {
    switch(action.type){
        case FETCH_CHANNEL_LIST:
            return action.payload.data;
        default:
            return state;
    }
}