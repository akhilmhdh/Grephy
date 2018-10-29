export default (state=null,action)=>{
    switch(action.type){
        case 'NEW_MESSAGE':
            return action;
        default:
            return state;
    }
};