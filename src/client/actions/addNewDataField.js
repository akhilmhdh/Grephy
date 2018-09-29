export const NEW_DATA_FIELD='newDataField';

export const newDataField=({newField},token,name,callback) => async (dispatch,getState,api)=>{
    api.put(`/channels/${token}/fields/${name}/addX`,{dataName:newField}).then(()=>callback());
};