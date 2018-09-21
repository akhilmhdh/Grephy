export const FETCH_CHANNEL_LIST='fetchChannelList';

export const fetchChannelList=() => async (dispatch,getState,api)=>{
    const res=await api.get('/channels/list');
    dispatch({
        type:FETCH_CHANNEL_LIST,
        payload:res
    });
};