// Environment variable validation utility

interface EnvironmentConfig {
  RESEND_API_KEY: string
  NODE_ENV: 'development' | 'production' | 'test'
}

class EnvironmentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnvironmentError'
  }
}

function validateEnvironment(): EnvironmentConfig {
  const requiredVars = ['RESEND_API_KEY'] as const
  const missingVars: string[] = []

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      missingVars.push(varName)
    }
  }

  if (missingVars.length > 0) {
    throw new EnvironmentError(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }

  // Validate RESEND_API_KEY format
  const resendKey = process.env.RESEND_API_KEY!
  if (!resendKey.startsWith('re_')) {
    throw new EnvironmentError('RESEND_API_KEY must start with "re_"')
  }

  return {
    RESEND_API_KEY: resendKey,
    NODE_ENV:
      (process.env.NODE_ENV as EnvironmentConfig['NODE_ENV']) || 'development',
  }
}

// Validate environment variables at module import
let env: EnvironmentConfig

try {
  env = validateEnvironment()
} catch (error) {
  const message =
    error instanceof Error ? error.message : 'Unknown validation error'
  console.error('❌ Environment validation failed:', message)
  process.exit(1)
}

export { env }
