import dotenv from 'dotenv'

const envFound = dotenv.config({ path: 'env' })
if (!envFound) {
  throw new Error('env not found')
}

export const APP_NAME = 'APP_NAME'
export const APP_SECRET = 'Vokproperty'
export const EMAIL = 'emordiokechukwu26@gmail.com'
export const PASSWORD = 'Okechukwuemordi@27'
export const CLOUDAPIKEY = '728959894335376'
export const CLOUDNAME = 'dqltz1lgo'
export const CLOUDAPISECRET = '2fYi754UhQOZYE6t5hPpfPX8wUU'
export const PAYSTACK_KEY = 'sk_test_94628a4899bc1f11113899784610ad83616d1689'
