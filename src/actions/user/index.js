import * as types from '../../types/user'

export const userSetJwt = jwt => ({ type: types.USER_SET_JWT, jwt });