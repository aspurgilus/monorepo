import { Container, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './hooks/use-auth'

const Home = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isAuth) {
      navigate('/login')
    }
  }, [auth.isAuth, navigate])

  return (
    <Container>
      <Typography variant="h1" component="h1">
        Home
      </Typography>
    </Container>
  )
}

export default Home
