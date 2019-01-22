export const NEW_GRAPH='newGraph';
export const newGraph=(value,callback)=>async(dispatch,getState,api)=>{
    //api.post('/channels/:id/fields/new',{name,description}).then(()=>callback());
    console.log(value);
};