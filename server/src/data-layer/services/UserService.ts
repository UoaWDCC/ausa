import type { User } from "data-layer/models/User";
import FirestoreCollections from "data-layer/adapters/FirestoreCollections";

export type UserCreationParams = Pick<User, "email" | "name" | "username"> 

export class UserService{

    /**
     * 
     * @param id - using id to find a user in the db
     * @returns A user of type User
     */
    async getUser(identifier: string): Promise<User| null> {
        const userRef = FirestoreCollections.users.doc(identifier)
        const user = await userRef.get()
        if(!user.exists){
            console.log(`User - ${identifier} is not found`)
            return null
        } 
        console.log(user.data())
        return user.data() as User
    }

    /**
     * Creates a new user with the parameters provided without passing in the id
     * @param params - The parameters for creating a user.
     * @returns A promise that resolves to the created user.
     */
    async createUser(params: UserCreationParams): Promise<User> {
        const userRef = await FirestoreCollections.users.doc();
        const newUser: User = {
            id: userRef.id,
            username: params.username,
            email: params.email,
            name: params.name
        }
        await userRef.set({
            id: userRef.id,
            username: params.username,
            email: params.email,
            name: params.name
        });
        console.log(newUser)
        return newUser
    }
}