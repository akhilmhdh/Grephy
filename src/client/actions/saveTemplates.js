export const SAVE_TEMPLATES='save_templates';
export const saveTemplates=(name,token,template,callback)=>async(dispatch,getState,api)=>{
    api.post(`/channels/${token}/template/${name}`,{template}).then(()=>callback());
};