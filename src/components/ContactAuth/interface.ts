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

export interface ISignUpContact {
  email: string
  password: string
}
export interface ITenant {
  flatId: string
  email: string
  password: string
}
