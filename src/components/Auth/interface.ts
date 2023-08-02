export interface IAuth {
  _id: string
  email: string
  password: string
  role: string
  firstName: string
  lastName: string
  userName: string
  isEmailVerified: boolean
  emailVerificationCode: number
  emailVerificationExpiration: number
  emailVerificationStatus: boolean
  passwordResetCode: number
  passwordResetExpiration: number
  createdAt: Date
  updatedAt: Date
  expires: Number
}
export interface IContactAuth {
  _id: string
  email: string
  password: string
  firstName: string
  lastName: string
  userName: string
  role: string
  isEmailVerified: boolean
  emailVerificationCode: number
  emailVerificationExpiration: number
  emailVerificationStatus: boolean
  passwordResetCode: number
  passwordResetExpiration: number
  createdAt: Date
  updatedAt: Date
  expires: Number
}
export interface ICreateAuth {
  email: string
  password: string
  role: string
}
export interface ITenant {
  flatId: string
  email: string
  password: string
}
