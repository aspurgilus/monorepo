import { FC, ReactNode } from 'react'
import { makeStyles } from 'tss-react/mui'
import type { Theme } from '@mui/material'

type FormProps = {
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}))

export const Form: FC<FormProps> = ({ children, ...props }) => {
  const { classes } = useStyles()

  return (
    <form className={classes.root} noValidate {...props}>
      {children}
    </form>
  )
}
