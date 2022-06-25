import { FC } from "react"
import { Page } from "components/Page"
import { MainContainer } from "components/MainContainer"
import { Typography } from "@mui/material"
import { Form } from "components/Form"

const Login: FC = () => {
  return (
    <Page title="Log In">
      <MainContainer>
        <Typography variant="h5" component="h2">
          <span role="img" aria-label="login">🦄</span>Login
        </Typography>
        <Form>
          
        </Form>
      </MainContainer>
    </Page>
  )
}

export default Login
