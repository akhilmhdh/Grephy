export const subscribeFieldData=(token,callback)=>{
    return {
      emit:true,
      event: 'join',
      handle:token,
      err:(err)=>{callback(err)}
    }
  }

export const updateField=()=>{
  return{
    event:'updateFieldValue',
    handle:'fieldUpdate'
  }
};

export const updateMaps=()=>{
  return{
    event:'updateMapValue',
    handle:'mapUpdate'
  }
};

export const tempCall=(data,callback)=>{
  return {
    emit:true,
    event: 'updateMap',
    handle:data,
    err:(err)=>{callback(err)}
  }
}

