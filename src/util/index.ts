import bcrypt from 'bcryptjs'
import { v4, uuidv4 } from 'uuid'

const { floor, random } = Math

class Util {
  static generateCode() {
    const code = 1000
    return code
  }
  static generateRandom() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
  }
  static async bcryptDecoded(input: {
    value: string
    comparedValue: string
  }): Promise<boolean> {
    const response = await bcrypt.compareSync(input.value, input.comparedValue)

    return response
  }
  static async bcryptEncoded(input: { value: string }): Promise<string> {
    const response = await bcrypt.hashSync(input.value)
    return response
  }
  static intertionalizePhone(tele: string, code = '+234') {
    const arrange = tele
      .split('')
      .reverse()
      .join('')
      .substring(0, 10)
      .split('')
      .reverse()
      .join('')

    return `${code}${arrange}`
  }
  static async Capitalize(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  static async LowerCase(str: string) {
    return str.toLowerCase()
  }
  static changeHours(date, hrs: number) {
    // Replace with your actual date object

    return Math.floor(new Date(date).setHours(date.getHours() + hrs) / 1000)
  }
}

export default Util
