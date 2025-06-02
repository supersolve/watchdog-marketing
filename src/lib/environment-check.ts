/**
 * Environment configuration checker utility
 */

interface EnvironmentCheck {
  isValid: boolean
  missing: string[]
  warnings: string[]
}

export function checkEnvironmentConfiguration(): EnvironmentCheck {
  const required = ['RESEND_API_KEY']
  const missing: string[] = []
  const warnings: string[] = []

  // Check required environment variables
  for (const varName of required) {
    if (!process.env[varName]) {
      missing.push(varName)
    }
  }

  // Check RESEND_API_KEY format if present
  if (
    process.env.RESEND_API_KEY &&
    !process.env.RESEND_API_KEY.startsWith('re_')
  ) {
    warnings.push('RESEND_API_KEY should start with "re_"')
  }

  // Check NODE_ENV
  if (!process.env.NODE_ENV) {
    warnings.push('NODE_ENV is not set, defaulting to development')
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings,
  }
}

export function logEnvironmentStatus(): void {
  const check = checkEnvironmentConfiguration()

  if (check.isValid) {
    console.log('✅ Environment configuration is valid')
  } else {
    console.error('❌ Environment configuration issues:')
    console.error('Missing required variables:', check.missing)
  }

  if (check.warnings.length > 0) {
    console.warn('⚠️  Environment warnings:', check.warnings)
  }
}
