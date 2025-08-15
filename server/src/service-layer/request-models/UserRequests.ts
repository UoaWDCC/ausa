import { User } from "data-layer/models/User";

export interface CreateUserRequestBody {
    id: string;
    data: User;
}

