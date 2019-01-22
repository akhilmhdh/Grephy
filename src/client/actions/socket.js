//channel joins the room for RTC 
export const subscribeFieldData=(token,callback)=>{
    return {
      emit:true,
      event: 'join',
      handle:token,
      err:(err)=>{callback(err)}
    }
  }

//GRAPH-RTC
export const updateField=()=>{
  return{
    event:'updateFieldValue',
    handle:'fieldUpdate'
  }
};

//MAP-RTC
export const updateMaps=()=>{
  return{
    event:'updateMapValue',
    handle:'mapUpdate'
  }
};

//VIDEO STREAM RTC
export const updateStream=()=>{
  return{
    event:'streamVideo',
    handle:'videoUpdate'
  }
};


