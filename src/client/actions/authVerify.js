export const AUTH_VERIFY="auth_verify";

export const authVerify=()=> async (dispatch,getState,api)=>{
    const res=await api.get("/auth/user")
    dispatch({
        type:AUTH_VERIFY,
        payload:res
    });    
};
