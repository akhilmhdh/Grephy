export const FETCH_FIELD_LIST="fetchFieldList";

export const fetchFieldList=(id)=>async(dispatch,getState,api)=>{
    const res=await api.get(`/channels/fields/list/${id}`);
    dispatch({
        type:FETCH_FIELD_LIST,
        payload:res
    })
};