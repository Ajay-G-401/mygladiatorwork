import { User } from "../models/user.model";

export class UserService{
    users:User[];
    constructor(){
        this.users = [
            new User("Ajay@gmail.com","Ajay","1234567890","Ajay1234","","","","","","")
        ];
    }
    UserLogin(useremail:any,userpassword:any):boolean{
        var result:boolean = false;
        this.users.forEach(element  => {
            
            if(element.useremail == useremail && element.userpassword ==userpassword)
            {
                result=true;
            }
        });
        return result;
    }
    AddUser(user:User)
    {
        this.users.push(user);
    }
    GetOrdersUserProfile(useremail:any)
    {
        return "success";
    }
    GetUserprofile(useremail:any)
    {
        return "success user";
    }
    ChangeUserPassword(useremail:any,oldpassword:any,newpassword:any)
    {
        return "Changed";
    }
   
}