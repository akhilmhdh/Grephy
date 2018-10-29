class users{
    constructor(){
        this.users=[]
    }
    addUser(id,name,room){
        let user={id,name,room}
        this.users.push(user);
        return user;
    }
    removerUser(id){
        let user=this.getUser(id);
        if(user){
            this.users=this.users.filter((user)=>user.id!=id);
        }
        return user;
    }
    getUser(id){
        return this.users.find((user)=>user.id===id);
    }

}

export default users;