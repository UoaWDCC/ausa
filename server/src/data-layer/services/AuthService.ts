import { adminAuth, authWeb } from "firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { User, UserRole } from "types/types";
import { collections } from "data-layer/firebase-collections";
import { AuthCreationParams } from "service-layer/request-models/AuthRequest";

export default class AuthService {
    /**
     * Logs in a user by their email and password.
     * @param email - The email of the user
     * @param password - The password of the user
     * @returns the logged-in user
     */
    public async login(email: string, password: string): Promise<User> {
        try{
            const userCredential = await signInWithEmailAndPassword(authWeb, email, password);
            const user = await collections.user.doc(userCredential.user.uid).get();
            return user.data();
        } catch (error){
            throw new Error("Login failed: " + error);
        }
    }

    /**
     * 
     * @param newUser - The new user to create
     * Creates a new user in the authentication system and the database.
     * @returns the created user
     * @throws Error if user creation fails
     */
    public async signUpUser(newUser: AuthCreationParams): Promise<User> {
        const userCredential = await adminAuth.createUser({
            email: newUser.email, password: newUser.password, displayName: `${newUser.firstName} ${newUser.lastName}`
        });
        await collections.user.doc(userCredential.uid).set({
        ...newUser,
            role: UserRole.USER,
            id: userCredential.uid
        });

        return {...newUser, role: UserRole.USER, id: userCredential.uid};
    }

    /**
     * Deletes a user by their ID.
     * @param id - The ID of the user to delete
     * @returns the write result of the delete operation
     */

    public async deleteUser(id: string): Promise<void> {
        await adminAuth.deleteUser(id);
        await collections.user.doc(id).delete();
    }

    /**
     * Updates a user's password.
     * @param id - The ID of the user to update
     * @param newPassword - The new password of the user
     * @returns the write result of the update operation
     */
    public async updateUserPassword(id: string, newPassword: string): Promise<void> {
        await adminAuth.updateUser(id, { password: newPassword });
    }

}
