export const LIMIT_UPDATE="limitUpdate";

export const limitUpdate=(value,token,name,callback)=>async(dispatch,getState,api)=>{
    const res=await api.post(`/channels/${token}/fields/${name}/email`,value).then(()=>callback());
};