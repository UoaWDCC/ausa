import { User } from "data-layer/models/User";

export type UserCreationParams = Pick<User, "email" | "name"> 

export class UserService{

    async createUser(params: UserCreationParams): Promise<User> {
        return {
        id: Math.random().toString(36).substring(2, 15),
        email: params.email,
        name: params.name,
        };
    }

    async getUser(userId:number, name?:string): Promise<User>{
       return null
    }
    
}