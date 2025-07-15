import { User } from "data-layer/models/User";

import {
  UserService,
} from "../../data-layer/services/UserService";
import {
  Controller,
  Get,
  Path,
  Query,
  Route,
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
}