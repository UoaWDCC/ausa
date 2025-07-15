import { User } from "data-layer/models/User";

import {
     UserCreationParams,
  UserService,
} from "../../data-layer/services/UserService";
import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Post,
  SuccessResponse,
  Body
} from "tsoa";

@Route("users")
export class UserController extends Controller {
    @SuccessResponse("200", "Found")
    @Get ("{userId}")
    public async getUser(
        @Path() userId?: string,
        @Query() username?: string,
        @Query() name?: string
    ): Promise<User | null>{
        if (userId) {
            return new UserService().getUser(userId)
        }
        if (username) {
            return new UserService().getUser(username)
        }
        return null
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<User>{
        this.setStatus(201)
        return new UserService().createUser(requestBody)
    }
}