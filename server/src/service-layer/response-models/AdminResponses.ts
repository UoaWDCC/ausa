import type { DocumentDataWithUid } from 'data-layer/models/Common'
import type { UserAdditionalInfo } from 'data-layer/models/User'
import type { CommonResponse } from './CommonResponse'

export interface GetAllUsersResponse extends CommonResponse {
  data?: DocumentDataWithUid<UserAdditionalInfo>[]
}

export interface GetUserResponse extends CommonResponse {
  data?: DocumentDataWithUid<UserAdditionalInfo>
}
