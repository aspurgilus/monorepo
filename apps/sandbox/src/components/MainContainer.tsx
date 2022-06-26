import { FC, ReactNode } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Container, Theme } from '@mui/material'

type PageProps = {
  children: ReactNode
}

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const MainContainer: FC<PageProps> = ({ children, ...props }) => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root} maxWidth="xs" {...props}>
      {children}
    </Container>
  )
}
