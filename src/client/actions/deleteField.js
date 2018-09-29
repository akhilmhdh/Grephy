export const REMOVE_FIELD='deleteField';

export const removeField=(token,name,fieldName,callback) => async (dispatch,getState,api)=>{
    api.post(`/channels/${token}/fields/${name}/delX`,{dataName:fieldName}).then(()=>callback());
};