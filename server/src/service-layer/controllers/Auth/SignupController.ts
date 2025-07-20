import type {SignupRequest} from "server/src/service-layer/request-models/AuthRequest"
import type {SignupResponse} from "server/src/service-layer/response-models/AuthResponse"
import { auth } from "server/src/business-layer/security/Firebase"
import { User } from "data-layer/models/User"
import { Controller, Route, Post, SuccessResponse, Body } from "tsoa"
@Route("auth")
export class SignupController extends Controller {


}