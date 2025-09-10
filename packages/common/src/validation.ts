/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Japanese phone number format
 */
export function isValidPhoneNumber(phoneNumber: string): boolean {
  // Japanese phone number patterns
  const phoneRegex = /^(\+81|0)[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{3,4}$/
  return phoneRegex.test(phoneNumber.replace(/\s/g, ''))
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('パスワードは8文字以上である必要があります')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('大文字を含む必要があります')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('小文字を含む必要があります')
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('数字を含む必要があります')
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('特殊文字を含む必要があります')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== ''
}