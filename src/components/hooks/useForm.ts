import { useState, useCallback } from 'react'
import { FormValidationErrors } from '@/lib/validations'

export interface UseFormOptions<T> {
  initialValues: T
  validate?: (_values: T) => FormValidationErrors
  onSubmit: (_values: T) => Promise<void>
}

export interface UseFormReturn<T> {
  values: T
  errors: FormValidationErrors
  isSubmitting: boolean
  isSubmitted: boolean
  generalError: string
  setValue: (_name: keyof T, _value: string) => void
  setValues: (_values: Partial<T>) => void
  setError: (_error: string) => void
  clearError: (_name: keyof T) => void
  clearAllErrors: () => void
  handleSubmit: (_e: React.FormEvent) => Promise<void>
  reset: () => void
}

/**
 * Custom hook for managing form state, validation, and submission
 */
export function useForm<T extends Record<keyof T, string>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [generalError, setGeneralError] = useState('')

  const setValue = useCallback(
    (name: keyof T, value: string) => {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Clear field error when user starts typing
      if (errors[name as string]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name as string]
          return newErrors
        })
      }
    },
    [errors]
  )

  const setFormValues = useCallback((newValues: Partial<T>) => {
    setValues((prev) => ({
      ...prev,
      ...newValues,
    }))
  }, [])

  const setError = useCallback((error: string) => {
    setGeneralError(error)
  }, [])

  const clearError = useCallback((name: keyof T) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[name as string]
      return newErrors
    })
  }, [])

  const clearAllErrors = useCallback(() => {
    setErrors({})
    setGeneralError('')
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Clear previous errors
      setErrors({})
      setGeneralError('')

      // Validate if validator provided
      if (validate) {
        const validationErrors = validate(values)
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }
      }

      setIsSubmitting(true)

      try {
        await onSubmit(values)
        setIsSubmitted(true)
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred'
        setGeneralError(errorMessage)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, validate, onSubmit]
  )

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
    setIsSubmitted(false)
    setGeneralError('')
  }, [initialValues])

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    generalError,
    setValue,
    setValues: setFormValues,
    setError,
    clearError,
    clearAllErrors,
    handleSubmit,
    reset,
  }
}
