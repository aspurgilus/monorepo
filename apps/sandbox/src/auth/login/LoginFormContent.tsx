import { FC } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

export const LoginFormContent: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      />
    </>
  )
}
