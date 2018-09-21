import { callbackify } from "util";

export const NEW_CHANNEL='newChannel';
export const newChannel=({name,description},callback)=>async(dispatch,getState,api)=>{
    api.post('/channels/new',{name,description}).then(()=>callback());
};