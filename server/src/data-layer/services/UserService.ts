import type { User } from "data-layer/models/User";
import FirestoreCollections from "data-layer/adapters/FirestoreCollections";

export type UserCreationParams = Pick<User, "email" | "name"> 

export class UserService{

    /**
     * Creates a new user with the parameters provided without passing in the id
     * @param params - The parameters for creating a user.
     * @returns A promise that resolves to the created user.
     */
    async createUser(params: UserCreationParams): Promise<User> {
        const userRef = await FirestoreCollections.users.doc();
        await userRef.set({
            id: userRef.id,
            ...params,
        });
        return {
            id: userRef.id,
            email: params.email,
            name: params.name,
        };
    }

    async getUser(userId:number, name?:string): Promise<User>{
       return null
    }
}