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
    @Get ("{userId}")
    public async getUser(
        @Path() userId: number,
        @Query() name?: string

    ): Promise<User>{
        return new UserService().getUser(userId, name);
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