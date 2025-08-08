
import type { User } from "data-layer/models/User";
import { UserService } from './UserService' // 假设你的 UserService 在这里

export class AdminService {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    async getUser(id: string): Promise<User | null> {
        return this.userService.getUser(id)
    }

 
    async createUser(userData: any): Promise<User> {
        return this.userService.createUser(userData)
    }

  
    async updateUser(id: string, userData: any): Promise<User | null> {
        return this.userService.updateUser(id, userData)
    }

    async deleteUser(id: string): Promise<User> {
        return this.userService.deleteUser(id)
    }

}
