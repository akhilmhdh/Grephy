export const LIMIT_UPDATE="limitUpdate";

export const limitUpdate=({upper,lower,email})=>async(dispatch,getState,api)=>{
    const res=await api.post(`/channels/fields/list/${id}`);
    dispatch({
        type:FETCH_FIELD_LIST,
        payload:res
    })
};