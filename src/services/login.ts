import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
// 微信官方登录
export const postLoginWxMin = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 模拟登录
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
