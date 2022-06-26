import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'

import { Page } from 'components/Page'
import { MainContainer } from 'components/MainContainer'
import { Form } from 'components/forms/Form'
import { LoginInputs } from 'auth/types'
import { loginSchema } from 'auth/validateSchemas'
import { LoginFormContent } from './LoginFormContent'

const Login: FC = () => {
  const methods = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  })

  const formSubmitHandler: SubmitHandler<LoginInputs> = (data: LoginInputs) => {
    console.log('Form data is', data)
  }

  return (
    <Page title="Log In">
      <MainContainer>
        <Typography variant="h5" component="h2">
          <span role="img" aria-label="login">
            🦄
          </span>
          Login
        </Typography>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <LoginFormContent />
          </Form>
        </FormProvider>
      </MainContainer>
    </Page>
  )
}

export default Login
